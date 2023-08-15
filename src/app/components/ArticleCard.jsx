"use client"
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

export default function ArticleCard({title,description,image_exam, created_at, article_type}){
  const defaultImageUrl = '/assets/images/sunchi.jpeg';
  const imageUrl = image_exam !== "" | undefined ? image_exam : defaultImageUrl;
  return (
    <div className="w-[280px] relative m-5">
        <div className='w-full h-40 overflow-hidden'>
        <img src={imageUrl} alt="img" />
      </div>
      <div className='bg-[white] text-[black] pb-20 p-3'>
        <p className='text-xs '>{moment(created_at).format("MMM Do YY")}</p>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='text-sm fifty-words'>{description}</p>

        <h1 className='absolute top-3 left-3 text-[#f7c618] bg-[white] p-1'>{article_type}</h1>
        <Link className='text-[#f7c618] absolute bottom-2 left-3' href="/">click to read more..</Link>
      </div>
    </div>
  )
}
