import axios from "../servise/axios";

const API = {
  create(data) {
    return axios.post("/reles", data, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} });
  },
  getStore: function () {
    return axios.get("/reles/store", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },
  getActive: function () {
    return axios.get("/reles/active", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },
  getRepair: function () {
    return axios.get("/reles/repair", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },
  editActivation(id, address) {
    return axios.put(
      "/reles/activation?id=" + id,
      { address },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
  },
  editRepair(id) {
    return axios.put("/reles/Repair?id=" + id, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },
  editStore(id) {
    return axios.put("/reles/Store?id=" + id, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },
};

export default API;
