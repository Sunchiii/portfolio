"use client"
import { useEffect, useState,useCallback } from "react"
import CategorySelectTab from "./components/categoryTab"
import SearchBar from "./components/serachBar"
import Link from 'next/link'
import ArticleCard from "./components/ArticleCard"
import { GetArticles } from "./api/article"
import {useSearchParams, useRouter} from "next/navigation"

export default function About() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [data, setData] = useState([])
  const [allData,setAllData] = useState({articles:[],meta:{}})
  const [initLoading, setInitLoading] = useState(true)

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams()
      // clear old params
      params.delete(name)
      // set new params
      params.set(name, value)

      // return new params
      return params.toString()
    },
    [searchParams]
  )
  async function CallApi() {
    let limit = searchParams.get("limit")
    let page = searchParams.get("page")
    const res = await GetArticles(parseInt(limit),parseInt(page))
    setAllData(res)
    setInitLoading(false)
  }
  async function PageCallApi(_page,_limit) {
    const res = await GetArticles(_limit,_page)
    setAllData(res)
    setInitLoading(false)
  }
  useEffect(() => {
    CallApi()
  }, [])
  useEffect(()=>{
    setData(allData.articles)
  },[allData])
  return (
    <div style={{ "paddingTop": '50px', }}>
      <div className="container">
        <h1 className="text-2xl text-[white]">ບົດຄວາມທັງຫມົດ</h1>
        <SearchBar />
        <CategorySelectTab />
        {data && <div className="flex flex-wrap" style={{ display: initLoading ? "none" : "flex" }}>
          {
            data?.length === 0 ? <div className="h-[500px] w-full text-center pt-24">has no data in this page</div>:
            data?.map(e=> (
              <Link href={`/article/${e?.id}`} key={e?.id}>
                <ArticleCard image_exam={e?.image_exam} title={e?.title} description={e?.description} created_at={e?.created_at} article_type={e?.article_type} />
              </Link>
            ))
          }
        </div>}
        <div style={{
          display: initLoading ? "flex" : "none"
        }} className="flex justify-center items-center h-[600px] w-full">
          <span className="loading loading-infinity loading-lg scale-[3]"></span>
        </div>
        <div className="flex justify-center py-5">
          <div className="join inline">
            <button className="join-item btn">«</button>
            {
              allData &&
              Array.from({length:allData?.meta?.page_count}, (_, i) => i + 1).map((p)=>(
                <button key={p} onClick={()=>{
                  router.push("?"+createQueryString("page",p)+"&"+createQueryString("limit","10"))
                  PageCallApi(p,10)
                }} className="join-item btn">{p}</button>
              ))
            }
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  )
}
