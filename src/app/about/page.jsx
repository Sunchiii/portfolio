import { primaryColor } from "../constants"
import Image from 'next/image'
import Timeline from "../components/timeline"
import Typing from "../components/typing"
import Link from 'next/link'



export default function Home() {

  const style = {
    'position':'absolute',
    'paddingTop':'50px',
    'width':'100%',
    'color':'white'
  }


  const profileData = [
    {
      Title:"Fullname",
      Value:"Lasun vongveodee"
    },
    {
      Title:"Age",
      Value:"22"
    },
    {
      Title:"Phone",
      Value:"+8562054134808"
    },
    {
      Title:"Address",
      Value:"Laos, Khammouan."
    },
    {
      Title:"Educate",
      Value:"Bachelor"
    },

  ]

  const TimelineExperiance = [
    {
      Time:"December 2019",
      Description:"Participate and find a solution to the problem of importing goods(YSEALI YOUnified Design for Change workshop)."
    },
    {
      Time:"June 2020",
      Description:"The training was conducted by ASEAN Foundation in Partnership with Microsoft."
    },
    {
      Time:"July 2019",
      Description:"Join and Completition for Hacking workshop(CQ CO.,Ltd)"
    },
    {
      Time:"October 2019",
      Description:"Join to Member Robotics maker club(Champamaker club)."
    },
    {
      Time:"December 2020",
      Description:"The Winner of Web Design Contest in FEN-NUOL."
    },
    {
      Time:"Jenuary 2021",
      Description:"Front-End developer(Internship) at Retech Sole Co.,Ltd."
    },
    {
      Time:"Jenuary 2022",
      Description:"Front-End developer at Lailaolab ICT Solution."
    },
    {
      Time:"Jenuary 2023",
      Description:"Back-End developer at Lao IT Dev Co.,Ltd."
    },
    {
      Time:"July 2023",
      Description:"joid and completition WildLife Heroes Cross - Border Youth Innovation Callenge to Combat Illegel WildLife Trade."
    },
  ]
    
  return (
    <main>
      <div style={style}>
        <header>
          <div className="container">
            <div className="heroBanner">
            <p>Hi There.</p>
            <h1 className="heroTitle font-bold"><Typing word={"IAm Software Developer"} /></h1>
            <p>i'm a Back-end developer with extansive experiance for over 3 years.</p>
            <p>its to create and develop application service, robotics and many more...</p>
              <Link href={"/"}>
                <button className="text-[black]" style={{'padding':'10px 20px','margin':'20px 0','borderRadius':'15px','backgroundColor':primaryColor}} type="button">my article</button>
              </Link>
            </div>
          </div>
        </header>
        
        <article className="fadeIn">
          <div className="container">
            
            <div className="aboutMeContainer">
              
          <div className="aboutLeft">
            <Image className="profileImage" alt="profile image" style={{'border':`5px solid ${primaryColor}`}} src={'/assets/images/sunchi.jpeg'} width={500} height={500} />
          </div>
          <div className="aboutRight">
            <h1 className="text-lg font-bold leading-3">ABOUT</h1>
            <h1 className="text-lg font-bold" style={{'color':primaryColor}}>ME</h1>
            <br/>
            <p>Hi, my name is Lasun and I’m a back-end programmer with a passion for creating efficient and scalable service applications. I’m 22 years old and I taught myself HTML, CSS and JavaScript. </p>
            <br/>
            <p>Since then, I have learned various programming languages and frameworks, such as Python, Golang, Node.js and more. I have also completed several online courses to improve my skills and knowledge.</p>
            <br/>
            <p>I enjoy working on challenging projects that require problem-solving, creativity and collaboration.</p>
            {
                  profileData?.map((e)=>(
                    <div style={{'display':'flex','margin':'10px 0'}}>
                      <h3 className="aboutTitle">{e?.Title}</h3>
                      <h3 className="aboutColon">:</h3>
                      <h3 style={{'color':primaryColor}}>{e?.Value}</h3>
                    </div>
                  ))
                }
          </div>
            </div>
          </div>
        </article>

        <article style={{'marginTop':'100px'}}>
          <div className="container">
              <h1 className="text-2xl font-bold" style={{'textAlign':'center'}}>My Programming Languages Skills</h1>
              <div  style={{'display':'flex','flexWrap':'wrap','alignItems':'center', 'justifyContent':'space-evenly'}} className="langContainer">
                <Image className="langScale" alt="glang" src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Yellow.svg" width={150} height={150} />
                <Image className="langScale" alt="cpp" src="/assets/images/c++image.png" width={60} height={60} />
                <Image className="langScale" alt="javascript" src="/assets/images/java-script-logo.png" width={60} height={60} />
                <Image className="langScale" alt="python" src="/assets/images/python.png" width={60} height={60} />
             </div>
          </div>
        </article>

        <article>
          <div className="container">
            <h1 className="text-2xl font-bold" style={{'textAlign':'center','margin':'30px 0'}}>My Experaince</h1>
            <Timeline timelineData={TimelineExperiance} />
          </div>
        </article>

        <article className="fadeIn" style={{'margin':'70px 0'}}>
          <div className="container">
            <h1 style={{'textAlign':'center','margin':'20px 0'}}>My Contact</h1>
            <div className="contactContainer">
              <span style={{'display':'flex','alignItems':'center'}}>
                <span style={{'width':'25px','height':'25px'}} className="material-symbols-outlined">call</span>: <span style={{'color':primaryColor}}>+8562054134808</span>
              </span>
              <span style={{'display':'flex','alignItems':'center'}}>
                <span style={{'width':'25px','height':'25px'}} className="material-symbols-outlined">mail</span>: <span style={{'color':primaryColor}}>rachanlamoolphal@gmail.com</span>
              </span>
              <span style={{'display':'flex','alignItems':'center'}}>
                <span style={{'width':'25px','height':'25px'}} ><Image src="/assets/images/facebook.png" width={20} height={20} /></span>: <a style={{'color':primaryColor}} href="https://www.facebook.com/profile.php?id=100009633273493" target="_blank">Lasun Lmp</a>
              </span>
              <span style={{'display':'flex','alignItems':'center'}}>
                <span style={{'width':'25px','height':'25px'}} ><Image src="/assets/images/linkedIn.png" width={25} height={25} /></span>: <a style={{'color':primaryColor}} href="https://www.linkedin.com/in/lasun-vongveodee-310b731b7/" target="_blank">Lasun Vongveodee</a>
              </span>
            </div>
          </div>
        </article>

      </div>
    </main>
  )
}
