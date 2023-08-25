import axios from "axios"

var API_URL = "http://localhost:8080/v1";

export const GetArticles = async (limit,page,type) => {
    const url = `${API_URL}/articles?page=${page}&limit=${limit}&article_type=${type}`
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