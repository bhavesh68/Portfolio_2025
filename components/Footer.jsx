import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/> */}

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            bhaveshkhatwani999@gmail.com
        </div>
      </div>

    <div className='container mx-auto text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p></p>
        <ul className='flex justify-center gap-6'>
            <li><a target='_blank' href="https://github.com/bhavesh68">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/bhaveshkhatwani/">LinkedIn</a></li>
            {/* <li><a target='_blank' href="https://instagram.com/greatstackdev">Twitter</a></li> */}
        </ul>
    </div>

    </div>
  )
}

export default Footer
