import axios from "axios";

const LIST_API_URL = "http://localhost:8080/list";

class ApiService{
    fetchList(){
        return axios.get(LIST_API_URL);
    }
    fetchListBySeq(seq){
        return axios.get(LIST_API_URL + '/' + seq);
    }

    deleteList(list){
        return axios.post(LIST_API_URL, list);
    }
}

export default new ApiService();