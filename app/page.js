"use client"
  const metadata = {
  title: 'SHOW LOCAL TIME',
  description: 'YOU CAN SEE LOCAL TIME HERE',
}
import {React,useState} from 'react'


const page = () => {
  const [time,newtime] = useState(null)
  setInterval(()=>{

    newtime(new Date().toLocaleTimeString())
  },1000)

  return (
    <div className="main">
      <h1>
        live date
        
      </h1>
      <h1>
      {time}
      </h1>
    </div>
  )
}

export default page