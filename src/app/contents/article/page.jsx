import OutputFromEdit from "../../../../components/OutputFromEdit"

export default function Article(){
  const data = {
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
    <div className="pt-[50px] text-[white]">
      <div className="container">
        <h1 className="text-3xl">ບົດຄວາມ</h1>
        <OutputFromEdit data={data.blocks} />
      </div>
    </div>
  )
}
