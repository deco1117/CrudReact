import axios from '../servise/axios';

const LOGIN = {
    auth: (data) =>axios.requestData('POST','/users/login', data),
}

export  default LOGIN;