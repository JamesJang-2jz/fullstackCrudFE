import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/users");
    }

    get(id){
        return http.get(`/user/${id}`);
    }

    create(data){
        return http.post("/user", data);
    }

    update(id, data){
        return http.put(`/user/${id}`, data);
    }

    delete(id){
        return http.delete(`/user/${id}`);
    }

    deleteAll(){
        return http.delete("/user");
    }

    findByEmail(email) {
        return http.get(`/users?email=${email}`);
    }
}

export default new UserDataService();