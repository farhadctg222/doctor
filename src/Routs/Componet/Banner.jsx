import React from 'react';
import imag1 from '../../assets/1.jpg'
import imag2 from '../../assets/2.jpg'
import imag3 from '../../assets/3.jpg'
import imag4 from '../../assets/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imag1} className="w-full" />
          <div className="absolute flex  -translate-y-1/2 left-5 right-6 top-1/2">
         
          <div className='space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
            <h1 className='text-6xl text-white'>Affortable Price </h1>
            <p className=' text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid, libero quo consequatur amet labore beatae excepturi nostrum veritatis, ab distinctio mollitia repellat nobis cumque, nemo provident doloremque id vero!</p>
            <button className='btn mr-4 btn-primary'>Discover</button>
            <button className='btn btn-secondary'>Latest Project</button>
          </div>
           
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
           
          </div>
          
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imag2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">


          <div className='space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] '>
            <h1 className='text-6xl text-white'>Affortable Price </h1>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid, libero quo consequatur amet labore beatae excepturi nostrum veritatis, ab distinctio mollitia repellat nobis cumque, nemo provident doloremque id vero!</p>
            <button className='btn mr-4 btn-primary'>Discover</button>
            <button className='btn btn-secondary'>Latest Project</button>
          </div>
           
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={imag3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={imag4} className="w-full" />
          <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 top-1/2">


          <div className='space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
            <h1 className='text-6xl text-white'>Affortable Price </h1>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid, libero quo consequatur amet labore beatae excepturi nostrum veritatis, ab distinctio mollitia repellat nobis cumque, nemo provident doloremque id vero!</p>
            <button className='btn mr-4 btn-primary'>Discover</button>
            <button className='btn btn-secondary'>Latest Project</button>
          </div>
           
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;