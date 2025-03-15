
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false)

  const sideMenuRef = useRef();

  const openMenu = ()=> {

    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
 
  const closeMenu = ()=> {

    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  
  useEffect(() => {
    window.addEventListener('scroll',()=>{
        if(scrollY > 50){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }

    })

  }, [])  

  return (
    <>
    
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-mywhite/2" : ""}`}>

        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-28 alt="" cursor-pointer mr-14'/>
        </a>    

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent "}`}>
            <li><a  className='font-Ovo' href="#top" >Home</a></li>
            <li><a  className='font-Ovo' href="#about" >About me</a></li>
            {/* <li><a  className='font-Ovo' href="#services" >Services</a></li> */}
            <li><a  className='font-Ovo' href="#work" >My&nbsp;Work</a></li>
            <li><a  className='font-Ovo' href="#contact" >Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'> 
            <button onClick={()=> setIsDarkMode(prev => !prev)} >
                <Image src={isDarkMode ?  assets.sun_icon : assets.moon_icon} alt="" className='w-6'/>
            </button>
            <a href="https://www.linkedin.com/in/vamsi-indugu/" target="_blank" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
            
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 2.5rem',
                border: '2px solid transparent',
                borderRadius: '9999px',
                fontFamily: 'Ovo, serif',
                color: isDarkMode ? 'white' : 'black',
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                animation: 'spin 2.5s infinite linear paused',
                backgroundImage: `
                  linear-gradient(
                    to bottom,
                    ${isDarkMode ? 'rgba(16, 16, 16, 0.95)' : 'rgba(255, 255, 255, 0.95)'},
                    ${isDarkMode ? 'rgba(16, 16, 16, 0.95)' : 'rgba(255, 255, 255, 0.95)'}
                  ) padding-box,
                  conic-gradient(
                    from var(--bg-angle, 0deg) in oklch longer hue,
                    oklch(0.85 0.37 0) 0 0
                  ) border-box
                `,
                border: '2px solid transparent',
                transition: '--bg-angle 2.5s linear',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('--bg-angle', '360deg');
                e.currentTarget.style.animationPlayState = 'running';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--bg-angle', '0deg');
                e.currentTarget.style.animationPlayState = 'paused';
              }}
            
            >Connect<Image src={ isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
                            <span
                    style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '-1',
                    
                    borderRadius: '9999px',
                    border: '2px solid transparent',
                    background: `
                        linear-gradient(
                        to bottom,
                        ${isDarkMode ? 'rgba(16, 16, 16, 0.95)' : 'rgba(255, 255, 255, 0.95)'},
                        ${isDarkMode ? 'rgba(16, 16, 16, 0.95)' : 'rgba(255, 255, 255, 0.95)'}
                        ) padding-box,
                        conic-gradient(
                        from var(--bg-angle, 0deg) in oklch longer hue,
                        oklch(0.85 0.37 0) 0 0
                        ) border-box
                    `,
                    transition: '--bg-angle 2.5s linear',
                    }}
                ></span>
        </a>

            <button className='block md:hidden ml-3'onClick={openMenu}>
                <Image src={ isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6'/>  
            </button> 
        </div>

        {/*-------------- mobile menu ----------------------*/}
        <ul ref ={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>  
            
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src ={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>
            
            
            <li><a  className='font-Ovo'onClick={closeMenu} href="#top" >Home</a></li>
            <li><a  className='font-Ovo'onClick={closeMenu} href="#about" >About me</a></li>
            <li><a  className='font-Ovo'onClick={closeMenu} href="#services" >Services</a></li>
            <li><a  className='font-Ovo'onClick={closeMenu} href="#work" >My Work</a></li>
            <li><a  className='font-Ovo'onClick={closeMenu} href="#contact" >Contact me</a></li>
        </ul>

    </nav> 
    </>
  )
}

export default Navbar
