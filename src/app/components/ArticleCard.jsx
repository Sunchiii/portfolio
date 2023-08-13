"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function ArticleCard(){
  return (
    <div className="w-[280px] relative m-5">
        <div className='w-full h-40 overflow-hidden'>
        <Image className='object-cover' src="/assets/images/sunchi.jpeg" width={500} height={500} />
      </div>
      <div className='bg-[white] text-[black] pb-20 p-3'>
        <p className='text-xs '>March 20 2015</p>
        <h1 className='text-xl font-bold'>What happened in Thailand?</h1>
        <p className='text-sm fifty-words'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

        <h1 className='absolute top-3 left-3 text-[#f7c618] bg-[white] p-1'>Tech</h1>
        <Link className='text-[#f7c618] absolute bottom-2 left-3' href="/">click to read more..</Link>
      </div>
    </div>
  )
}
