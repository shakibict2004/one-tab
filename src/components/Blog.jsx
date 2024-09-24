import React from 'react'
import one from "../assets/aaa.jpg"
import two from "../assets/bbb.jpg"
import three from "../assets/ccc.jpg"

export const Blog = () => {
  return (
    <div className="">
        <div className="max-w-Container max-auto text-center pt-15 ">
            <h2 className=' text-[25px]'>Blog</h2>
            <h3 className='text-[50px] py-5'>Latest News</h3>
        </div>
        <div className=" flex max-w-Container mx-auto ">
        <div className="w-1/3 ">
        <img src={one} alt="" />
         <h2 className=' text-[23px] py-6'> The best of web design and web design inspiration</h2>
         <p className=' text-[17px]'>"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ..."</p>
         <div className=" flex ">
          <h5 className='text-[15px] pr-48 pt-6'>Read More</h5>
          <h6 className='pt-6'> 1/April/2024</h6>
         </div>
        </div>
        <div className="w-1/3 pl-5">
        <img src={two} alt="" />
         <h2 className='text-[23px] py-6'> The best of web design and web design inspiration</h2>
         <p className='text-[17px]'>"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ..."</p>
         <div className=" flex">
          <h5 className='text-[15px] pr-48 pt-5' >Read More</h5>
          <h6 className='pt-6'> 1/April/2024</h6>
         </div>
        </div>
        <div className="w-1/3 pl-5">
        <img src={three} alt="" />
         <h2 className='text-[23px] py-6'> The best of web design and web design inspiration</h2> 
         <p className='text-[17px]'>"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ..."</p>
         <div className=" flex">
          <h5 className='text-[15px] pr-48 pt-5'>Read More</h5>
          <h6 className=' pt-6'> 1/April/2024</h6>
         </div>
        </div>
        </div>
    </div>
  )
}
export default Blog
