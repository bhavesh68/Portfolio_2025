import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' priority />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Bhavesh Khatwani  <Image src={assets.hand_icon} alt='' className='w-6' priority /></motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-xl sm:text-3xl lg:text-[36px] font-Ovo'>
        A Web Developer skilled in both front-end and back-end technologies</motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'>
        I completed an intensive, hands-on Full Stack Web Development certification from the University of Toronto, where I gained practical experience building scalable, user-focused applications using modern technologies like JavaScript, React, Node.js, and SQL. My training, combined with a strong passion for continuous learning and real-world project work, has equipped me with the skills and mindset needed to thrive in the tech industry and contribute effectively from day one.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >contact me <Image src={assets.right_arrow_white} alt='' className='w-4' priority /></motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="https://drive.google.com/file/d/1FnL09_KZU5nR0srdxHSk4jZOk6eBOPY6/view?usp=sharing" target="_blank" download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          my resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
      </div>
    </div>
  )
}

export default Header
