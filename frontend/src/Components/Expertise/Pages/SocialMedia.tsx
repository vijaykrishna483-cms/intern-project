

import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';
import { useState } from 'react';
import { X, PhoneCall } from 'lucide-react';

const Socialmedia = () => {

  const [showPopup, setShowPopup] = useState(false);
  const clickHdnler=()=>{
    setShowPopup(true);
  
  }

  
  const cardData = [
    { title: 'Social Media Strategy & Management', text: 'Develop and execute data-driven strategies to enhance engagement and brand presence.', imgSrc: 'https://images.unsplash.com/vector-1741695667949-5b89ed5c65be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: ' Creative Design & Branding Assets', text: 'Craft visually compelling graphics that strengthen brand identity and recognition.', imgSrc: 'https://images.unsplash.com/vector-1741240041535-9a1d6d945c93?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Community Engagement & Growth Strategies', text: 'Foster meaningful interactions and build loyal online communities', imgSrc: 'https://images.unsplash.com/vector-1741097263399-022b8b0f776f?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Social Media Analytics & Reporting', text: 'Track performance insights to optimize social media impact and effectiveness.', imgSrc: 'https://images.unsplash.com/vector-1739128047872-a82f4cced174?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Video Editing & Motion Graphics', text: 'Create high-quality videos and animations that captivate and engage audiences.', imgSrc: 'https://images.unsplash.com/vector-1739888378580-3b955e960ab2?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Paid Social Media Campaigns', text: ' Implement targeted ads that maximize reach, conversions, and ROI.', imgSrc: 'https://images.unsplash.com/vector-1739893035686-c6a3318fb500?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Storytelling Through Visual Content', text: 'Transform ideas into visually stunning content that resonates and inspires action.', imgSrc: 'https://images.unsplash.com/vector-1740057539117-42cb2c6da083?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];



  return (
      <div className='w-[100vw] min-h-screen overflow-hidden'>
   <Navbar />
      <div className='w-[100vw] h-full'>

      <div className='w-full pt-[30%] md:pt-[7%] md:h-[45vh] bg-[#858484]'>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[100vw]  md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
      >
        <h1 className=" py-[2vh] text-[#fff] w-[100%] text-4xl md:text-4xl md:text-[5vw] font-bold md:w-[60%] leading-tight">
        Social Media & Design Solutions
        </h1>
      </motion.div>



      </div>



      <div className='w-[100vw] md:h-[45vh]'>




      <div className='flex flex-col md:flex-row items-center ] md:px-[10%]  py-0 gap-10'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='md:w-1/2 w-[100vw] md:px-[0] px-[5%] text-left'
        >
          {/* <h2 className='text-3xl md:text-4xl font-semibold text-[#333]'>Drive Results with Performance Marketing</h2> */}
          <p className='text-gray-600 md:text-xl mt-4 '>
          Social media is where your brand comes to life, and design is how it speaks without words. We help you craft a powerful online presence that’s visually compelling, strategically engaging, and true to your brand’s voice. From eye-catching designs to meaningful interactions, we create content that not only stops the scroll but sparks connections. Whether it’s storytelling, branding, or audience growth, we bring creativity and strategy together to make your brand shine in the digital world. Let’s turn every post into an opportunity and every interaction into impact.
          </p>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src='https://i.pinimg.com/736x/df/81/ff/df81ff756d7b232bf5e54a82e9fb3243.jpg' 
          alt='Performance Marketing' 
          className='md:absolute relative md:ml-[46vw] w-[95vw]  backdrop-shadow md:w-[40vw] md:mb-[20vh] rounded-lg md:h-[55vh] shadow-blue-500/50'
        />
      </div>




      </div>





      </div>



















      {/* Cards Section */}
      <div className='px-[5%] md:px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardData.slice(0, 4).map((card, index) => (
          <motion.div 
            key={index} 
            onClick={clickHdnler}

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'
          >
            <img src={card.imgSrc} alt={card.title} className='w-40 h-40 mb-4 rounded-2xl' />
            <h3 className='text-xl font-semibold text-[#333]'>{card.title}</h3>
            <p className='text-gray-600 mt-2'>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className='px-[5%] md:flex-row flex-col flex justify-center  gap-[3vw] md:px-[10%] py-10'>
        {cardData.slice(4).map((card, index) => (
          <motion.div 
            key={index} 
            onClick={clickHdnler}

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-lg   md:w-[20vw] flex flex-col items-center text-center'
          >
            <img src={card.imgSrc} alt={card.title} className='w-40 h-40 mb-4' />
            <h3 className='text-xl font-semibold text-[#333]'>{card.title}</h3>
            <p className='text-gray-600 mt-2'>{card.text}</p>
          </motion.div>
        ))}
      </div>




      {showPopup && (
        <div className=" fixed  w-[100vw] h-[100vh] inset-0 flex items-center justify-center bg-[#1b1616c1] bg-opacity-50 z-50">
        
          <article className="md:w-[40vw] w-[90vw] cards py-[6vh]  bg-[#c9c7c7f7]">
            <div className="flex flex-col justify-center items-center gap-[2vh]">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setShowPopup(false)}
              >
                <X size={40} />
              </button>

              <img src="thefinal.png" className="w-[18vw]" />
              <h2 className="text-3xl md:text-6xl font-bold mb-1 text-[#000]">
                Sign Up Now!
              </h2>
              <p className="text-md text-center md:text-2xl text-[#3a3838] font-lighter">
                For exclusive marketing news 
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[83%] text-[#000] pl-[15px] p-2 border-b-2 bg-[#ffffff13] border-blue-700 rounded-2xl mb-2"
              />
              <button className="bg-[rgb(46,49,146)] text-xl md:text-3xl font-light shadow-2xl text-white px-[3vw] py-[2vh] rounded-4xl hover:bg-[#2e3192]">
                Subscribe
              </button>
              <div className="w-[100%] md:ml-[9vh] flex flex-row align-middle justify-center items-center gap-[10px]">
                <button className="md:w-[90%] md:h-[50px] w-[80%] px-[2%] text-black rounded-3xl bg-transparent border-2 border-[#6c6969] text-center font-extralight align-middle ">
                  Book A call With Us..!
                </button>
                <div className="bg-[#179e17] rounded-full p-[15px]">
                  <PhoneCall size={24} />
                </div>
              </div>
            </div>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </article>
        </div>
      )}


      
    </div>
  );
};

export default Socialmedia;
