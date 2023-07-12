import './compostyle.css'

export default function Timeline({timelineData}){
  return (
    <div>
      <div class="timeline-area">
  <div class="container">
    <div class="all-timelines">

      {
        timelineData?.map(item=>(
          <div class="single-timeline d-flex-2">
            <div class="timeline-blank"></div>
            <div class="timeline-text d-flex-2">
              <span>
                <h6>{item?.Time}</h6> — {item?.Description}
              </span>
              <div class="t-square"></div>
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
