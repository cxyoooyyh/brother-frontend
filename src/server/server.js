import axios from "../request/request";


export const getCurrentUser = async () => {
    return await axios.get("/user/current");
}