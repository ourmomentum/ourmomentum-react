import axios from "axios";
import {BACKEND_URL} from "../constants/backend_info";

export const isLoggedIn = () => {
    return axios.get(BACKEND_URL + '/api/temp/verifyToken', {withCredentials: true});
}

