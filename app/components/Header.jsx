import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownloadBoth = (e) => {
    e.preventDefault();
    
    // Download DevOps Resume
    const link1 = document.createElement('a');
    link1.href = '/Bittu-DevOps-Engineer.pdf';
    link1.download = 'Bittu-DevOps-Engineer.pdf';
    document.body.appendChild(link1);
    link1.click();
    document.body.removeChild(link1);
    
    // Download MLOps Resume after a short delay to bypass pop-up blockers
    setTimeout(() => {
      const link2 = document.createElement('a');
      link2.href = '/Bittu-MLOps-LLMOPs.pdf';
      link2.download = 'Bittu-MLOps-LLMOPs.pdf';
      document.body.appendChild(link2);
      link2.click();
      document.body.removeChild(link2);
    }, 300);

    setIsDropdownOpen(false);
  };

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-24 pb-8'>
      <motion.div
       initial={{ scale: 0 }}
       whileInView={{scale: 1}}
       transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32 aspect-square object-cover object-top mb-2'/>
      </motion.div>
      <motion.h3 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 0.6, delay : 0.3}}
      className='flex items-center gap-2 mb-3 text-xl md:text-2xl font-Ovo'>Hi ! I'm Bittu <Image src={assets.hand_icon} alt='' className=' w-5'/></motion.h3>
      <motion.h1 
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 0.8, delay : 0.5}}
      className='text-3xl leading-tight sm:text-4xl/11 lg:text-[50px] font-Ovo'> AI Software Engineer, Building Intelligent Systems That Scale
      </motion.h1> 
      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay : 0.7}}
      className='text-lg mx-auto mt-3 font-Ovo'>
        I design and deploy AI-powered applications, autonomous agents, and cloud-native infrastructure—transforming complex challenges into intelligent, reliable, and production-ready solutions. 🚀 
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-7 '>
          <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y:0, opacity: 1 }}
          transition={{ duration: 0.6, delay : 1}}
          href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'> Say Hi ! &nbsp;&nbsp; <Image src={assets.arrow_icon_dark} alt='' className='w-2'/></motion.a>
          
          <div className="relative" ref={dropdownRef}>
            <motion.button 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{ duration: 0.6, delay : 1.2}}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:bg-darkHover dark:text-white dark:border-white/50 hover:bg-lightHover dark:hover:bg-darkHover/80 transition-all duration-300 shadow-sm'>
              My Resume <Image src={assets.download_icon} alt='' className='w-4 dark:invert'/>
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 left-0 sm:left-auto mt-3 w-64 rounded-2xl bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/10 shadow-2xl p-2 z-50 overflow-hidden font-Ovo"
                >
                  {/* DevOps Resume Item */}
                  <div className="flex flex-col gap-1 p-2 rounded-xl hover:bg-lightHover dark:hover:bg-darkHover/40 transition-all duration-200">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white/90 px-2 pt-1 text-left">🛠️ DevOps Resume</span>
                    <div className="flex items-center gap-2 mt-1 px-1">
                      <a 
                        href="/Bittu-DevOps-Engineer.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition-all font-medium"
                      >
                        👁️ View
                      </a>
                      <a 
                        href="/Bittu-DevOps-Engineer.pdf" 
                        download="Bittu-DevOps-Engineer.pdf"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-95 transition-all font-medium"
                      >
                        📥 Download
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-white/5 my-1"></div>

                  {/* MLOps & LLMOps Resume Item */}
                  <div className="flex flex-col gap-1 p-2 rounded-xl hover:bg-lightHover dark:hover:bg-darkHover/40 transition-all duration-200">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white/90 px-2 pt-1 text-left">🧠 MLOps & LLMOps Resume</span>
                    <div className="flex items-center gap-2 mt-1 px-1">
                      <a 
                        href="/Bittu-MLOps-LLMOPs.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition-all font-medium"
                      >
                        👁️ View
                      </a>
                      <a 
                        href="/Bittu-MLOps-LLMOPs.pdf" 
                        download="Bittu-MLOps-LLMOPs.pdf"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-95 transition-all font-medium"
                      >
                        📥 Download
                      </a>
                    </div>
                  </div>

                  <button 
                    onClick={handleDownloadBoth}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-xl text-white bg-red-500 hover:bg-red-600 transition-all duration-200 text-center font-medium mt-3 shadow-md"
                  >
                    <span>⚡ Download Both</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      </div>

    </div>
  )
}

export default Header
