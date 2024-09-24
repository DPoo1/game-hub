import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'bf521420c25c45fc8b73aa1a02b937af'
    }
})