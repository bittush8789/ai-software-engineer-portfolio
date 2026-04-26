import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{ duration: 1 }}
    
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h2 
      initial={{ opacity: 0 , y : -20}}
      whileInView={{opacity: 1, y:0}}
      transition={{ duration: 0.5, delay: 0.5}}
      
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.8}}      
        
        className='flex w-full flex-col items-center lg:flex-row lg:items-start gap-20 my-5'>

          <motion.div 
          initial={{ opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ duration: 0.6}}
                    
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl '/>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.6, delay: 0.8}}
          
          
          className='flex-1'>
            <p className=' text-lg mb-10 max-w-2xl font-Ovo'>
              A dedicated programmer with a strong interest in AI and ML. 🚀 I'm passionate about problem-solving and first-principle thinking, with a solid foundation in Python, Java, JavaScript, and AWS. Having built ML models from scratch, I'm committed to making a positive impact through technology. An avid learner and explorer, I'm always seeking new opportunities to grow. 🚀
            </p>
            <motion.ul
            initial={{ opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.8, delay: 1}}
            
            
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>

                    {infoList.map(({icon, iconDark, title, description},index)=>(
                        <motion.li
                        whileHover={{scale: 1.05}}
                        
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                        hover:-translate-y-1 duration-500
                        hover:shadow-myblack dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                          key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' suppressHydrationWarning/>
                            <h3 className='my-1 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}

                </motion.ul>
                
                <motion.h4 
                initial={{ y:20,  opacity: 0}}
                whileInView={{ y : 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 1.3}}
                
                className='my-6 text-gray-700 font-Ovo  dark:text-white/80'>Tools I use</motion.h4>

                  <motion.ul 
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ delay: 1.5, duration: 0.6}}
                  
                  className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                        key={index}>
                          <Image src={tool} alt='Tool' className='w-7 sm:w-7'/> 

                        </motion.li>
                      
                      ))}
                  </motion.ul> 
              
          </motion.div>
        </motion.div>


    </motion.div>
  )
}

export default About
