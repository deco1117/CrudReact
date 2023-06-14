import axios from "../servise/axios";

const API = {

  getUsers() {
    return axios.request("GET", "/users");
  },
  createUser(data) {
    return axios.requestData("POST", "/users/create", data);
  },
  editUser(id, data) {
    return axios.requestData("PUT", "/users/update?id="+ id, data);
  },
  deleteUser(id, data) {
    return axios.requestData("DELETE", "/users/"+ id, data);
  },
  activationUser(id,  data) {
    return axios.requestData("PUT", "/users/Activation?id="+ id, data);
  },

  stations() {
    return axios.request("GET", "/Stations");
  },

  status() {
    return axios.request("GET", "/reles");
  },
  getById(id) {
    return axios.request("GET", "/reles/" +id);
  },
  create(data) {
    return axios.requestData("POST", "/reles", data);
  },
  edit(id, data) {
    return axios.requestData("PUT", "/reles/"+id, data);
  },
  delete(id) {
    return axios.request("DELETE", "/reles/"+id);
  },
  getStore: function () {
    return axios.request("GET", "/reles/store");
  },
  getActive: function () {
    return axios.request("GET", "/reles/active");
  },
  getRepair: function () {
    return axios.request("GET", "/reles/repair");
  },
  getRepair2: function () {
    return axios.request("GET", "/reles/repair2");
  },
  editActivation(id, address) {
    return axios.requestData("PUT", "/reles/activation?id=" + id, { address });
  },
  editRepair(id) {
    return axios.request("PUT", "/reles/Repair?id=" + id);
  },
  editStore(id) {
    return axios.request("PUT", "/reles/Store?id=" + id);
  },
};

export default API;
