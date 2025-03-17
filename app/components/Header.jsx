import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2'>
      <motion.div
       initial={{ scale: 0 }}
       whileInView={{scale: 1}}
       transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32 mb-2'/>
      </motion.div>
      <motion.h3 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 0.6, delay : 0.3}}
      className='flex items-center gap-2 mb-3 text-xl md:text-2xl font-Ovo'>Hi ! I'm Vamsi <Image src={assets.hand_icon} alt='' className=' w-5'/></motion.h3>
      <motion.h1 
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 0.8, delay : 0.5}}
      className='text-3xl sm:text-4xl lg:text-[50px] font-Ovo'>A self-taught Software Developer, </motion.h1> 
      <br></br>
      <motion.h1 
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 0.8, delay : 0.5}}>with an interest in CS.</motion.h1>
      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay : 0.7}}
      className='max-w-2xl mx-auto mt-3 font-Ovo'>
        I am a Software Developer from Vizag, India with a knowledge to build softwares we use.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-7 '>
          <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y:0, opacity: 1 }}
          transition={{ duration: 0.6, delay : 1}}
          href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'> Say Hi ! <Image src={assets.arrow_icon_dark} alt='' className='w-2'/></motion.a>
          <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y:0, opacity: 1 }}
          transition={{ duration: 0.6, delay : 1.2}}
          href='https://drive.google.com/file/d/1Oos_R3QT0dhjDAH4fj_QzJD_b4uctT_2/view?usp=sharing' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume<Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
      </div>

    </div>
  )
}

export default Header
