/*import dependencies*/
import axios from "axios";


const instance  = axios.create({
    /* production mode*/

    /* development mode*/
    baseURL: "http://localhost:8080/api",
    withCredentials: true
})

export default instance