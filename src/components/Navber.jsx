import React from 'react'

const Navber = () => {
  return (
    <section className='bg-hero-pattern bg-cover bg-no-repeat bg-fixed bg-center h-[500px]'>
      <div className="max-w-Container mx-auto">
        <div className='flex'>
          <div>
            <p className='text-white font-semibold hover:text-[#282828] duration-300 pt-20'>SHAKIB</p>
          </div>
          <div className="pl-[700px]">
            <ul className='flex gap-5 justify-end pt-20'>
              {['Home', 'About', 'Services', 'Works', 'Blog', 'Contact'].map(item => (
                <li key={item} className='text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out'>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className='text-white font-black hover:text-[#282828] duration-300 text-[75px]'>Hi! I'm Shakib.</h3>
          <h4 className='text-white font-bold hover:text-[#282828] duration-300 text-[20px]'>
            Creative Designer & Developer located in New York. <br />
            Specialized in Creating Websites. Designing Logo. Designing UI/UX.
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Navber;
