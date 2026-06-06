import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
              <div className="text-3xl font-bold font-Ovo tracking-wide text-black dark:text-white mx-auto mb-2" suppressHydrationWarning>
                Bittu<span className="text-red-500">.</span>
              </div>

              <div className='w-max flex items-center gap-2 mx-auto'>
                 <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Mail icon' className='w-6 '/>
                 <p>vamsiindugu@gmail.com</p>
              </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 mt-12'>
            <p>© 2026 Bittu Sharma. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href='https://www.linkedin.com/in/vamsi-indugu/'>LinkedIn</a></li>
                <li><a target='_blank'href='https://github.com/Vamsiindugu/'>Github</a></li>
                <li><a target='_blank'href='https://x.com/vamsiindugu'>X</a></li>
            </ul>


        </div>



    </div>
  )
}

export default Footer
