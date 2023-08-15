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
      console.log(res)
      return
    }
    console.log("error")
  }

  useEffect(()=>{
    CallApi()
  },[])
  return(
    <div className="pt-[100px] text-[white]">
      {data && <div className="container">
        <h1 className="text-3xl">{allData?.title}</h1>
        <p>{allData?.description}</p>
        <img src={allData?.image_exam} alt="" />
        <OutputFromEdit data={data} />
      </div>}
    </div>
  )
}
