import React, { useRef } from 'react'
import Card from './Card'


function Foregrond() {

  const ref = useRef(null)

  const Data =
    [
      {
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id?",
        fileSize: "0.03md",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
      },
      {
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id?",
        fileSize: "0.03md",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
      },
      {
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id?",
        fileSize: "0.03md",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
      }
    ]
  return (
    <>
      <div ref={ref}className=' w-full h-screen fixed bg-sky-800/200 z-[3] flex gap-5 flex-wrap'>
        {Data.map((item , index) => (
          <Card Data = {item} reference ={ref}/>
        ))}
      </div>

    </>
  )
}

export default Foregrond