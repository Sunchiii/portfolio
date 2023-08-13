import Link from "next/link"
import './compostyle.css'
import { primaryColor } from "@/app/constants"

export default function Navigation(){
  return (
    <div className="Navbar bg-[black]">
      <div className="container">
        <div className="navbar">
      <div>
        Sunfolio
      </div>
      <div >
        <Link style={{'color':primaryColor,'textDecoration':'none'}} href="/">Article</Link>
        <Link style={{'margin':'0 20px','color':primaryColor,'textDecoration':'none'}} href="/about">AboutMe</Link>
      </div>
        </div>
      </div>
    </div>
  )
}
