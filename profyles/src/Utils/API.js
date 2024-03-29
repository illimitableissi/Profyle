import axios from "axios";

export default {

getUsers: function() {
    return axios.get("/api/users")
},

getUserName: function(userName) {
    return axios.get("/api/users/" + userName)
},

createUser: function(userData) {
    return axios.post("/api/users", userData)
},

}