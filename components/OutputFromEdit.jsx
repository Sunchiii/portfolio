"use client"

export default function OutputFromEdit({data}){
  return (
    <div>
      {
        data?.map((item,index)=>{
          if (item?.type === "paragraph"){
            return (
              <p key={index}>{item?.data?.text}</p>
            )
          }
          else{
            return <h1>not</h1>
          }
        })
      }
    </div>
  )
}
