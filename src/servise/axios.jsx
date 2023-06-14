import axios from "axios";
import { useNavigate } from "react-router-dom";

const config = {
    baseUrl: "http://rele.nimble.uz/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
};

const base = async (param) => {
    const CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    setTimeout(() => {
        source.cancel();
    }, 10000);
    return await axios({
        method: param.method,
        baseURL: config.baseUrl,
        url: param.url,
        headers: { ...config.headers, "Authorization": `Bearer ${localStorage.getItem("token")}`},
        cancelToken: source.token,
        data: param.data,
    })
        .then((res) => {
            return Promise.resolve(res);
        })
        .catch((err) => {
            if (err.response) {
                return Promise.reject(err.response);
            } else {
                return Promise.reject("TIMEOUT");
            }
        });
};

const request = async (method, url) => {
    return await base({ method, url })
        .then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                if (res.data.statusCode >= 200 && res.data.statusCode <= 299) {
                    return Promise.resolve(res.data.data)
                } else {
                    return Promise.reject(res.data.message);
                }
            }
        })
        .catch((err) => {
            console.log(err);
            if (err.status == 401) {
                window.localStorage.clear();
                let nav = useNavigate();
                nav('/login');
            } else if (err.status == 403) {
                return Promise.reject("Kirishga ruxsat yo'q");
            } else {
                return Promise.reject(err);
            }
        });
};

const requestData = async (method, url, data) => {
    return await base({ method, url, data })
        .then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                if (res.data.statusCode >= 200 && res.data.statusCode <= 299) {
                    return Promise.resolve(res.data.data);
                } else {
                    return Promise.reject(res.data.message);
                }
            }
        })
        .catch((err) => {
            if (err.status == 401) {
                window.localStorage.clear();
                let nav = useNavigate();
                nav('/login');
            } else if (err.status == 403) {
                return Promise.reject("Kirishga ruxsat yo'q");
            } else {
                return Promise.reject(err)
            }
        });
};

// function request() {
//     return axios.request('POST', 'path/point').then(res => res).catch(err => err)
//   }

//   function requestData(data) {
//     return axios.requestData('POST', 'path/point', data).then(res => res).catch(err => err)
//   }

export default {
    request,
    requestData,
};
