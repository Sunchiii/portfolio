"use client"
import { useEffect, useState } from "react"
import CategorySelectTab from "./components/categoryTab"
import SearchBar from "./components/serachBar"
import Link from 'next/link'
import ArticleCard from "./components/ArticleCard"
import { GetArticles } from "@/api/article"

export default function About() {
  const [data, setData] = useState([])
  const [initLoading, setInitLoading] = useState(true)

  async function CallApi() {
    const res = await GetArticles(12, 1)
    setData(res?.articles)
    setInitLoading(false)
  }
  useEffect(() => {
    CallApi()
    console.log(data)
  }, [])
  return (
    <div style={{ "paddingTop": '50px', }}>
      <div className="container">
        <h1 className="text-2xl text-[white]">ບົດຄວາມທັງຫມົດ</h1>
        <SearchBar />
        <CategorySelectTab />
        <div className="flex flex-wrap" style={{ display: initLoading ? "none" : "flex" }}>
          {
            data?.map(()=> (
              <Link href="/article">
                <ArticleCard />
              </Link>
            ))
          }
        </div>
        <div style={{
          display: initLoading ? "flex" : "none"
        }} className="flex justify-center items-center h-[600px] w-full">
          <span className="loading loading-infinity loading-lg scale-[3]"></span>
        </div>
      </div>
    </div>
  )
}
