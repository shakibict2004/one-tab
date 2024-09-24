import React from 'react'

const Contact = () => {
  return (
  <div className=" bg-slate-200 h-[400px]">
    <div className="max-w-Container mx-auto">
        <div className=" text-center pt-5">
            <h2 className='text-[20px]'>Contact</h2>
            <h4 className=' text-[45px]'>Get In Touch</h4>
        </div>
        <div className=" flex gap-96 p-10">
            <input className='h-[40px] w-96 bg-gray-900 text-white pl-4' type="text" placeholder='Name:' />
            <input className='h-[40px] w-96 bg-gray-900 text-white  pl-4' type="text" placeholder='Emali:' />
        </div>
        <div className=" pl-10 text-center">
        <input className='h-[50px] w-[500px]  pl-4 bg-gray-900 text-whitepl-5' type="text" placeholder='How can we help you :' />  
        </div>
        <div className=" pt-5 text-center ">
            <button className='mt-4 px-5 py-2  bg-gray-900 text-white rounded-md hover:bg-blue-700 transition'> Send Message</button>
        </div>
    </div>
  </div>
  )
}

export default Contact