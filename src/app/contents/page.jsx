import ArticleCard from "../../../components/ArticleCard"
import CategorySelectTab from "../../../components/categoryTab"
import SearchBar from "../../../components/serachBar"
import Link from 'next/link'

export default function About(){
  return (
  <div style={{"paddingTop":'50px'}}>
      <div className="container">
        <h1 className="text-2xl text-[white]">ບົດຄວາມທັງຫມົດ</h1>
        <SearchBar />
        <CategorySelectTab />
        <div className="flex flex-wrap">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <Link href="/contents/article">
            <ArticleCard />
          </Link>
        </div>
      </div>
  </div>
  )
}
