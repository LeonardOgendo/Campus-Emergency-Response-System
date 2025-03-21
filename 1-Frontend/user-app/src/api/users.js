import axios from "axios";

const UsersAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/api/users/",
    headers: {
        "Content-Type": "application/json"
    }
});

export default UsersAPI;
