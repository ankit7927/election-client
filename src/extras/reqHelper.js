import axios from "axios";



export default axios.create({
    baseURL: "http://localhost:4000"  /// this url may be changes
})

