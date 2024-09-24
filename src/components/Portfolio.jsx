import React from 'react'
import one from "../assets/img-1.jpg"
import two from "../assets/img-2.jpg"
import three from "../assets/img-3.jpg"
import four from "../assets/img-4.jpg"
import five from "../assets/img-5.jpg"
import six from "../assets/img-6.jpg"

const Portfolio = () => {
  return (
    <div className=" max-w-Container mx-auto py-20">
        <div className="text-center">
         <h2 className=' text-[20px] font-bold'>Portfolio </h2>
         <h4 className='text-[40px] font-bold pb-10'>Work I Have Done </h4>
         <h5 className='text-[20px] font-normal pb-10'> All/  Web Design / Applications / Development</h5>
        </div>
<div className=" flex gap-5">
     
<div className="w-full">
<img src={one} alt="" />
</div>
<div className="w-full">
<img src={two} alt="" />
</div>
<div className="w-full">
<img src={three} alt="" />
</div>
</div>  


<div className=" flex gap-5 pt-5">
<div className="w-full">
<img src={four} alt="" />
</div>
<div className="w-full">
<img src={five} alt="" />
</div>
<div className="w-full">
<img src={six} alt="" />
</div>
        </div>
    </div>
  )
}

export default Portfolio