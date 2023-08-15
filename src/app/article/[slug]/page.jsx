"use client"
import { useState,useEffect } from "react"
import OutputFromEdit from "../../components/OutputFromEdit"
import { GetArticle } from "@/api/article"
import {useParams} from 'next/navigation'

export default function Article(){
  const params = useParams()
  const [data,setData] = useState({blocks:[]})
  const [allData,setAllData] = useState({})
  async function CallApi(){
    const res = await GetArticle(params?.slug)
    if (res !== Error){
      setData(res?.data)
      setAllData(res)
      return
    }
    console.log("error")
  }

  useEffect(()=>{
    CallApi()
  },[])
  const fakedata = {
    blocks:[
      {
        id:"mhTl6ghSkV",
        type:"paragraph",
        data:{
          text:"Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓"
        }
      }
    ]
  }
  return(
    <div className="pt-[100px] text-[white]">
      {data && <div className="container">
        <h1 className="text-3xl">{allData?.title}</h1>
        <p>{allData?.description}</p>
        <OutputFromEdit data={data} />
      </div>}
    </div>
  )
}
