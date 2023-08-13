import axios from "axios"
import { API_URL } from "."

export const GetArticles = async (limit,page) => {
    const url = `${API_URL}/articles?page=${page}&limit=${limit}`
    const res = await axios.get(url)

    if (res.status === 200 ){
        return res.data
    }else{
        throw new Error(res.statusText)
    }
}

export const GetArticle = async (_id)=>{
    const url = `${API_URL}/article/${_id}`
    const res = await axios.get(url)

    if (res.status === 200 ){
        return res.data
    }else{
        throw new Error(res.statusText)
    }
}