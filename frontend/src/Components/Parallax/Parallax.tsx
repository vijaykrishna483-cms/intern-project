import { Parallax } from "react-parallax";
import './Parallax.css'
const CustomParallax = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden  flex items-center">
      <Parallax
        strength={500}
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageStyle={{
          height: "70vh",
          width: "100vw", 
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overflow-hidden">
      <div className="relative h-[70vh] flex space-x-10 text-white text-lg p-20 min-w-[200vw] animate-scroll">
        <p  style={{ WebkitTextStroke: "2px white" }} className='border-b border-gray-500/30 font-bold  text-[6vw] text-transparent'>Custom background component</p>
                <p  style={{ WebkitTextStroke: "2px white" }} className='border-b border-gray-500/30 font-bold  text-[6vw] text-transparent'>Custom background component</p>

        
      </div>
    </div>
      </Parallax>
    </div>
  );
};

export default CustomParallax;
