import axios from "axios";

const LOGIN = {
    auth: (data) =>axios.post('/users/login', data),
}

export  default LOGIN;