import './compostyle.css'

export default function Timeline({timelineData}){
  return (
    <div>
      <div className="timeline-area">
  <div className="container">
    <div className="all-timelines">

      {
        timelineData?.map(item=>(
          <div className="single-timeline d-flex-2">
            <div className="timeline-blank"></div>
            <div className="timeline-text d-flex-2">
              <span>
                <h6>{item?.Time}</h6> — {item?.Description}
              </span>
              <div className="t-square"></div>
          </div>
      </div>

        ))
      }
    </div>
  </div>
    </div>
    </div>
  ) 
}
