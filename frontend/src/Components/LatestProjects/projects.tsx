import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// import Bg1 from "../../assets/office.jpg";
// import Bg2 from "../../assets/bg2.jpg";
// import Bg3 from "../../assets/bg3.jpg";
// import { useEffect, useState } from 'react';

// const slides = [
//     {
//       image: Bg2,
//       quote: "Coming Soon",
     
//     },
//     {
//       image: Bg2,
//       quote: "Coming Soon",
    
  
//     },
//     {
//       image: Bg2,
//       quote: "Coming Soon",
    
  
//     }
//   ];


const projects = () => {


    // const [currentIndex, setCurrentIndex] = useState(0);
    
      // useEffect(() => {
      //   const interval = setInterval(() => {
      //     nextSlide();
      //   }, 5000);
      //   return () => clearInterval(interval);
      // }, []);
    
      // const nextSlide = () => {
      //   setCurrentIndex((prevIndex: number) => (prevIndex + 1) % slides.length);
      // };
    
      // const prevSlide = () => {
      //   setCurrentIndex((prevIndex: number) =>
      //     prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      //   );
      // };
      
  return (
    <div id='our-work' className="w-[100vw] h-full  mt-[10vh]">
    {/* About Us */}
    <div className=' px-[6%] md:px-[10%]'>
    <motion.div 
      className="flex w-full items-end justify-end text-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Latest Projects</p>
      <ArrowUpRight size={24} strokeWidth={2} />
    </motion.div>

    {/* Animated Headline */}
    <motion.h1
      className="border-b border-gray-500/30 text-[#333333] text-4xl md:text-[6vw] font-bold w-[100%] md:w-[90%] pb-[4vh] md:leading-[100px]"
    >
      {"Building a legacy & Driving Business Growth, One Solution at a Time".split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 2 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>

    {/* Subheading */}
    <motion.h1
      className="md:text-xl text-lg mt-[2vh] text-[#004aad] font-semibold w-[90%] leading-tight"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
At Clavistra Consulting, we go beyond strategy—we deliver tailored solutions that drive measurable business outcomes. From Growth Strategy and Brand Positioning to Digital Marketing, Brand Awareness, and End-to-End IT Solutions, our team blends insight, creativity, and execution to help you scale with impact    </motion.h1>

    </div>
   



{/* <div className="relative w-[100vw] h-[60vh] mt-[10vh]  overflow-hidden"> */}



   {/* Background Images */}
   {/* {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>
      ))} */}

  
      {/* Quote Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center pr-16 text-white z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute pl-[20vw] md:pl-[0vw] text-5xl md:text-8xl font-bold w-[100vw] md:w-[60vw] text-center transition-all duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
            }`}
          >
            {slide.quote}
          </div>
        ))}
      </div> */}

      {/* Navigation Arrows */}
    

{/* <div className='w-[60vw]  bg-[#000] h-[20vh]'>


   

      </div> */}
{/* </div> */}
    </div>
  )
}

export default projects


