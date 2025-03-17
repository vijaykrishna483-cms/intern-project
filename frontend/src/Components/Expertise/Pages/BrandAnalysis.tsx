

import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';

const BrandAnalysis = () => {

  const cardData = [
    { title: 'Brand Strategy Development', text: 'Craft a strategic roadmap to define your brand’s vision, mission, and long-term goals.', imgSrc: 'https://images.unsplash.com/vector-1741695667949-5b89ed5c65be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Competitor & Market Analysis', text: ' Gain insights into your market landscape and competition to position your brand effectively.', imgSrc: 'https://images.unsplash.com/vector-1741240041535-9a1d6d945c93?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Brand Identity & Positioning', text: 'Establish a distinct identity and market positioning that aligns with your target audience.', imgSrc: 'https://images.unsplash.com/vector-1741097263427-f83d88ebfb0a?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Customer Personal Development', text: 'Build detailed audience personas to enhance brand communication and engagement.', imgSrc: 'https://images.unsplash.com/vector-1739803880192-a247d1337285?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Rebranding & Brand Refresh', text: ' Revitalize your brand’s look, feel, and messaging to stay relevant and impactful.', imgSrc: 'https://images.unsplash.com/vector-1739128047872-a82f4cced174?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Brand Messaging & Storytelling', text: 'Develop compelling narratives that authentically connect with your audience.', imgSrc: 'https://images.unsplash.com/vector-1739647326715-454fb6be54be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Brand Audit & Performance Review', text: 'Assess your brand’s strengths, weaknesses, and opportunities for growth.', imgSrc: 'https://images.unsplash.com/vector-1740057539117-42cb2c6da083?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];



  return (
    <div className='w-[100vw] pt-[10vh] min-h-screen b'>
      {/* Heading Section */}
      <Navbar/>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[100vw] md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
      >
        <h1 className="border-b py-[2vh] border-gray-500/30 text-[#333333] text-4xl md:text-[5vw] font-bold md:w-[60%] leading-tight">
        Brand Building & Analysis
        </h1>
      </motion.div>

      {/* Text and Image Section */}
      <div className='flex flex-col md:flex-row items-center px-[5%] md:px-[10%] py-0 gap-10'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='md:w-1/2 text-left'
        >
          {/* <h2 className='text-3xl md:text-4xl font-semibold text-[#333]'>Drive Results with Performance Marketing</h2> */}
          <p className='text-gray-600 text-xl mt-4'>
          Your brand is more than just a logo or a tagline—it’s the heart of your business, the story you tell, and the feeling you leave behind. We’re here to help you shape that story with clarity, purpose, and impact. Through deep analysis and thoughtful strategy, we uncover what makes you unique, refine your message, and create a brand that not only stands out but truly connects. Whether you’re building from the ground up or redefining your presence, we’re your partners in bringing your vision to life—authentically, powerfully, and with purpose.
          </p>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src='https://wallpaperbat.com/img/418492-six-industries-that-have-benefited-by-big-data-analytics.jpg' 
          alt='Performance Marketing' 
          className=' md:w-[40vw] mb-[10vh] rounded-lg h-[55vh] shadow-lg'
        />
      </div>

      {/* Cards Section */}
      <div className='px-[5%] md:px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardData.slice(0, 4).map((card, index) => (
          <motion.div 
            key={index} 
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

      <div className='px-[5%] flex md:flex-row flex-col justify-center  gap-[3vw] md:px-[10%] py-10'>
        {cardData.slice(4).map((card, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-lg  w-[90vw] md:w-[20vw] flex flex-col items-center text-center'
          >
            <img src={card.imgSrc} alt={card.title} className='w-40 h-40 mb-4' />
            <h3 className='text-xl font-semibold text-[#333]'>{card.title}</h3>
            <p className='text-gray-600 mt-2'>{card.text}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default BrandAnalysis;
