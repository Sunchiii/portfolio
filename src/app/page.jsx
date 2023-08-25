"use client"
import { useEffect, useState, useCallback } from "react"
import CategorySelectTab from "./components/categoryTab"
import SearchBar from "./components/serachBar"
import Link from 'next/link'
import ArticleCard from "./components/ArticleCard"
import { GetArticles } from "./api/article"
import { useSearchParams, useRouter } from "next/navigation"

export default function About() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [data, setData] = useState([])
  const [allData, setAllData] = useState({ articles: [], meta: {} })
  const [initLoading, setInitLoading] = useState(true)
  const [cateIndex, setCateIndex] = useState("all")

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
    setInitLoading(true)
    let limit = searchParams.get("limit")
    let page = searchParams.get("page")
    let article_type = "" 
    if (searchParams.has("article-type") === true){
      article_type = searchParams.get("article-type")
    }else{
      article_type = "all"
    }
    setCateIndex(article_type)
    const res = await GetArticles(limit, page,article_type)
    setAllData(res)
    setInitLoading(false)
  }
  async function PageCallApi(_page, _limit) {
    setInitLoading(true)
    let article_type = "" 
    if (searchParams.has("article-type")){
      article_type = searchParams.get("article-type")
    }else{
      article_type = "all"
    }
    const res = await GetArticles(_limit, _page,article_type)
    setAllData(res)
    setInitLoading(false)
  }

  async function ClickType(type){
    setInitLoading(true)
    let limit = searchParams.get("limit")
    let page = searchParams.get("page")
    router.push("?" + createQueryString("page", page) + "&" + createQueryString("limit", limit)+"&"+createQueryString("article-type", type))
    const res = await GetArticles(limit,page,type)
    setAllData(res)
    setInitLoading(false)
  }
  useEffect(() => {
    CallApi()
  }, [])
  useEffect(() => {
    setData(allData.articles)
  }, [allData])
  return (
    <div style={{ "paddingTop": '50px', }}>
      <div className="container">
        <h1 className="text-2xl text-[white]">ບົດຄວາມທັງຫມົດ</h1>
        <SearchBar />
        <CategorySelectTab onType={ClickType} nowValue={cateIndex} />
        {data && <div className="flex flex-wrap" style={{ display: initLoading ? "none" : "flex" }}>
          {
            data?.length === 0 ? <div className="h-[500px] w-full text-center pt-24">has no data in this page</div> :
              data?.map(e => (
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
        <div className="flex justify-center py-5 mt-36">
          <div className="join inline">
            <button onClick={()=>{
                                    let type = ""
                                    if (searchParams.has("article-type")){
                                      type = searchParams.get("article-type")
                                    }else{
                                      type = "all"
                                    }
              router.push("?" + createQueryString("page", 1) + "&" + createQueryString("limit", "10")+"&"+createQueryString("article-type",type))
              PageCallApi(1, 10)
            }} className="join-item btn">First page</button>
            {
              allData &&
              Array.from({ length: allData?.meta?.page_count }, (_, i) => i + 1).map((p) => {
                if (p >= 1 && p <= 3) {
                  return (
                    <button style={{opacity: p == searchParams.get("page") ? 0.7 : 1}} key={p} onClick={() => {
                      let type = ""
                      if (searchParams.has("article-type")){
                        type = searchParams.get("article-type")
                      }else{
                        type = "all"
                      }
                      router.push("?" + createQueryString("page", p) + "&" + createQueryString("limit", "10")+"&"+createQueryString("article-type",type))
                      PageCallApi(p, 10)
                    }} className="join-item btn">{p}</button>
                  )
                }
                else if (p >= length-3 && p <= length){
                  return (
                    <button style={{opacity: p == searchParams.get("page") ? 0.7 : 1}} key={p} onClick={() => {
                      router.push("?" + createQueryString("page", p) + "&" + createQueryString("limit", "10"))
                      PageCallApi(p, 10)
                    }} className="join-item btn">{p}</button>
                  )
                }
                else{
                  return
                }
              })
            }
            <button onClick={()=>{
                      let type = ""
                      if (searchParams.has("article-type")){
                        type = searchParams.get("article-type")
                      }else{
                        type = "all"
                      }
              router.push("?" + createQueryString("page", allData?.meta?.page_count) + "&" + createQueryString("limit", "10")+"&"+createQueryString("article-type",type))
              PageCallApi(allData?.meta?.page_count, 10)
            }} className="join-item btn">Last page</button>
          </div>
        </div>
      </div>
    </div>
  )
}
