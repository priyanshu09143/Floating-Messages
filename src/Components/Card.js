import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ Data , reference}) {
  return (
    <>
      <motion.div drag dragConstraints = {reference} className=" relative flex-shrink-0 w-56 h-64 bg-gray-900/90 rounded-[40px] text-white overflow-hidden">
        <div className='p-5'>
          <FaRegFileAlt className='text-xl' />
          <p className='text-sm mt-5 font-semibold'>{Data.text}</p>
        </div>


        <div className="foot absolute w-full bottom-0 left-0 text-center font-semibold  text-white text-sm">
          <div className='flex items-center justify-between mb-2 py-3 px-7 '>
            <span >{Data.fileSize}</span>
            <span className='bg-gray-800 rounded-full p-1 ' >
              {Data.close ? <IoMdClose/> : <MdFileDownload /> }      
              </span>
          </div>

        {Data.tag.isOpen && <div className='tag bg-sky-400 w-full p-4 text-xs font-semibold'>
          {Data.tag.tagTitle}
        </div> }
        
        </div>

      </motion.div>
    </>
  )
}

export default Card