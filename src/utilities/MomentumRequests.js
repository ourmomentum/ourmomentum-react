import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { BACKEND_URL } from '../constants/urls'

export const makeAuthorizedRequest = (path, payload, history) => {

    return new Promise((resolve, reject) => {
        if (payload) {
            axios.post(BACKEND_URL + path, payload, {withCredentials: true}).then(res=>{resolve(res)}).catch(err => {
                if (err.response.status == 401) {
                    axios.get(BACKEND_URL + '/refresh', {withCredentials: true}).then(()=>{
                        axios.post(BACKEND_URL + path, payload, {withCredentials: true})
                        .then((res)=>{
                            resolve(res);
                        })
                        .catch(err => {
                            reject(err);
                        })
                    })
                    .catch(err => {
                        if (err.reponse.status == 401) {
                            if (history) {
                                history.push('/login');
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
            axios.get(BACKEND_URL + path, {withCredentials: true}).then(res=>{resolve(res)}).catch(err => {
                if (err.response && err.response.status == 401) {
                    axios.get(BACKEND_URL + '/refresh', {withCredentials: true}).then(()=>{
                        axios.get(BACKEND_URL + path, {withCredentials: true})
                        .then((res)=>{
                            resolve(res);
                        })
                        .catch(err => {
                            reject();
                        })
                    })
                    .catch(err => {
                        if (err.response && err.response.status == 401) {
                            if (history) {
                                history.push('/login');
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