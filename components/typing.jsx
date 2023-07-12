"use client"
import React from 'react'
import Typingwriter from 'typewriter-effect'


export default function Typing({word}){
  return (
    <div>
      <Typingwriter
        onInit={(typewriter)=>{
          typewriter.typeString(word)
            .callFunction(()=>{
              console.log('String typed out!')
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(()=>{
              console.log("All String ware deleted")
            })
            .start()
        }}
        options={{
          loop:true
        }}
      />
    </div>  
  )
}
