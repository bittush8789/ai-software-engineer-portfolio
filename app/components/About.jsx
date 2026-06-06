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
                    
          className='w-full max-w-[350px] sm:max-w-[380px] lg:max-w-[420px] rounded-3xl'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl shadow-lg'/>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.6, delay: 0.8}}
          
          
          className='flex-1'>
            <div className='text-lg mb-10 max-w-2xl font-Ovo space-y-4 text-gray-700 dark:text-white/80'>
              <p>
                I'm an AI Software Engineer with 2+ years of experience in DevOps and MLOps, passionate about building intelligent, scalable, and production-ready applications. 🚀
              </p>
              <p>
                With expertise in Python, AWS, Docker, Kubernetes, CI/CD, and MLOps, I develop AI-powered solutions, automate ML workflows, and design cloud-native systems. Currently, I'm deepening my knowledge in AI Engineering, Agentic AI, LLMOps, RAG, and Multi-Agent Systems to create impactful real-world AI products. 🤖✨
              </p>
            </div>
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
                
                className='my-6 text-gray-700 font-Ovo  dark:text-white/80'>Technologies I use</motion.h4>

                  <motion.div 
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ delay: 1.5, duration: 0.6}}
                  className='flex items-center gap-3 flex-wrap max-w-2xl mt-4'>
                    {[
                      { name: 'Python', emoji: '🐍' },
                      { name: 'FastAPI', emoji: '⚡' },
                      { name: 'OpenAI', emoji: '🤖' },
                      { name: 'Gemini', emoji: '💎' },
                      { name: 'LangChain', emoji: '🦜' },
                      { name: 'LangGraph', emoji: '🕸️' },
                      { name: 'Hugging Face', emoji: '🤗' },
                      { name: 'Docker', emoji: '🐳' },
                      { name: 'Kubernetes', emoji: '☸️' },
                      { name: 'AWS', emoji: '☁️' },
                      { name: 'MLflow', emoji: '📊' },
                      { name: 'GitHub', emoji: '🐙' }
                    ].map((tech, index) => (
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-lightHover duration-300 dark:border-white/20 dark:hover:bg-darkHover/30 text-sm font-Ovo'
                        key={index}
                      >
                        <span>{tech.emoji}</span>
                        <span className="text-gray-700 dark:text-white/90 font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </motion.div> 
              
          </motion.div>
        </motion.div>


    </motion.div>
  )
}

export default About
