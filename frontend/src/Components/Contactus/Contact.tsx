import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

const Contact = () => {
  const words = ["Hello", "Hola"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Changes every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100vw] h-full mt-[30vh]">
      {/* About Us */}
      <div className="px-[6%] md:px-[10%] mb-[15vh]">
        {/* Contact Us Text with Arrow */}
        <motion.div
          className="flex w-full items-end justify-end text-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>Contact Us</p>
          <ArrowUpRight size={24} strokeWidth={2} />
        </motion.div>

        {/* Animated Headline */}
        <motion.h1
          className="border-b border-gray-500/30 text-[#333333] text-4xl md:text-[7vw] font-bold w-[90%] py-[2vh] md:pb-[2vh] md:leading-[100px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {"Stay Connected".split("").map((char, index) => (
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
          className="tetx-xl md:text-3xl mt-[2vh] text-[#004aad] font-semibold w-[90%] leading-tight"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          Stay connected with our team and never miss a design update, industry
          news, or special offers. Join our community of design enthusiasts.
        </motion.h1>
      </div>

      {/* Parallax Section */}
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
        <div className="overflow-hidden w-full flex flex-col justify-center items-center">
          <motion.div
            className="relative h-[70vh] flex flex-col gap-[2vh] justify-center items-center text-white text-lg p-20 min-w-[200vw]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.p
              className="font-light text-2xl md:text-[6vw] text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Have a project in mind?
            </motion.p>

            {/* Rotating Text */}
            <motion.p
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Do not hesitate to say{" "}
              <motion.span
                key={index} // Key change triggers re-animation
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[#a6a4a4]"
              >
                {words[index]}
              </motion.span>
            </motion.p>

            {/* Button */}
            <motion.button
              className="px-[3vw] hover:border-none hover:bg-[#fff] hover:text-black py-[2vh] rounded-3xl border-2 border-white-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default Contact;
