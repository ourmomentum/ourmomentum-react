import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { BACKEND_URL } from '../constants/urls'

let creds = sessionStorage.getItem('creds');
if (creds) {
    creds = JSON.parse(creds);
    sessionStorage.clear();

} else {
    creds = {};
}

window.addEventListener('unload', () => {
    sessionStorage.setItem('creds', JSON.stringify(creds));
})

export const getCreds = () => {
    return creds;
}


export const setCreds = (updatedCreds) => {
    creds = {...creds, ...updatedCreds};
}

export const deleteCreds = () => {
    creds = {};
}

const getNewToken = () => {
    const headers = {}
    if (creds.refreshToken) {
        headers.Authorization = 'Bearer ' + creds.refreshToken;
    }
    return new Promise((resolve, reject) => {
        axios.get(BACKEND_URL + '/refresh', {withCredentials: true, headers}).then((res) => {
            if (res.data) {
                console.log(creds)
                setCreds({accessToken: res.data});
                console.log(creds)
                resolve(res);
            } else {
                reject(res);
            }

        })
        .catch((err) => {
            reject(err);
        })
    });

}
export const makeAuthorizedRequest = (path, payload, options={}) => {
    const headers = {};
    if (creds.accessToken) {
        headers.Authorization = 'Bearer ' + creds.accessToken;
    }

    return new Promise((resolve, reject) => {
        if (payload) {
            axios.post(BACKEND_URL + path, payload, {withCredentials: true, headers})
            .then(res=>{
                resolve(res)
            })
            .catch(err => {
                if (err.response.status == 401) {
                    getNewToken.then(()=>{
                        headers.Authorization = 'Bearer ' + creds.accessToken;
                        axios.post(BACKEND_URL + path, payload, {withCredentials: true, headers})
                        .then((res)=>{
                            resolve(res);
                        })
                        .catch(err => {
                            reject(err);
                        })
                    })
                    .catch(err => {
                        if (err.reponse.status == 401) {
                            if (options.history) {
                                options.history.push('/login');
                            }
                        } else {
                            reject(err);
                        }
                    })
                } else {
                    reject(err);
                }
            });
        } else {
            axios.get(BACKEND_URL + path, {withCredentials: true, headers}).then(res=>{resolve(res)}).catch(err => {
                if (err.response && err.response.status == 401) {
                    getNewToken().then(()=>{
                        headers.Authorization = 'Bearer ' + creds.accessToken;
                        axios.get(BACKEND_URL + path, {withCredentials: true, headers})
                        .then((res)=>{
                            resolve(res);
                        })
                        .catch(err => {
                            reject();
                        })
                    })
                    .catch(err => {
                        if (err.response && err.response.status == 401) {
                            if (options.history) {
                                options.history.push('/login');
                            }
                        } else {
                            reject();
                        }
                    })
                } else {
                    reject();
                }
            });
        }
    });

}