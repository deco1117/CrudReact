import axios from '../servise/axios';

const API = {
    create(data) {
        return axios.post('/reles', data);
    },
    getStore: function(){
        return axios.get('/reles/store');
    },
    getActive: function(){
        return axios.get('/reles/active');
    },
    getRepair: function(){
        return axios.get('/reles/repair');
    },
    editActivation(id, address) {
        return axios.put('/reles/activation?id=' + id, address);
    },
    editRepair(id) {
        return axios.put('/reles/Repair?id=' + id);
    },
    editStore(id) {
        return axios.put('/reles/Store?id=' + id);
    }
}

export default API;