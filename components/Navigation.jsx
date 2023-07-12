import Link from "next/link"
import './compostyle.css'
import { primaryColor } from "@/app/constants"

export default function Navigation(){
  return (
    <div className="Navbar">
      <div className="container">
        <div className="navbar">
      <div>
        Sunfolio
      </div>
      <div >
        <Link style={{'margin':'0 20px','color':primaryColor,'textDecoration':'none'}} href="/">Portfolio</Link>
        <Link style={{'color':primaryColor,'textDecoration':'none'}} href="/contents">Article</Link>
      </div>
        </div>
      </div>
    </div>
  )
}
