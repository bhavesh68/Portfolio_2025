// This is the correct code for the Services component:

// import { assets, serviceData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import { motion } from "motion/react"

// const Services = () => {
//   return (
//     <motion.div 
//     initial={{ opacity: 0 }} 
//     whileInView={{ opacity: 1 }} 
//     transition={{ duration: 1 }}
//     id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

//        <motion.h4 
//        initial={{ y: -20, opacity: 0 }} 
//        whileInView={{ y: 0, opacity: 1 }} 
//        transition={{ delay: 0.3, duration: 0.5 }}
//        className='text-center mb-2 text-lg font-Ovo'>
//        What I offer</motion.h4>

//       <motion.h2 
//       initial={{ y: -20, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.5 }}
//       className='text-center text-5xl font-Ovo'>
//       My Services</motion.h2>

//       <motion.p 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.7, duration: 0.5 }}
//       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//         I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</motion.p>

//         <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.6 }}
//         className='grid grid-cols-auto gap-6 my-10'>
//             {serviceData.map(({icon, title, description, link}, index)=>(
//                 <motion.div 
//                 whileHover={{scale: 1.05}}
//                 key={index}
//                 className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
//                     <Image src={icon} alt='' className='w-10'/>
//                     <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
//                     <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
//                         {description}
//                     </p>
//                     <a href={link} className='flex items-center gap-2 text-sm mt-5'>
//                         Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
//                     </a>
//                 </motion.div>
//             ))}
//         </motion.div>

//     </motion.div>
//   )
// }

// export default Services



// The below is the correct code for components/MiniProjects.jsx:


// import React from 'react'
// import { motion } from "motion/react"
// import { assets, workData } from '@/assets/assets'
// import Image from 'next/image'
// import '../app/MiniProjects.css'

// const MiniProjects = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id='miniprojects' className='w-full px-[10%] py-10 scroll-mt-20'>
      
//       <motion.h4 
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className='text-center mb-2 text-lg font-Ovo'>
//         Mini Projects
//       </motion.h4>

//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className='text-center text-3xl font-Ovo'>
//         A Collection of Small Projects
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//         Check out these smaller projects that demonstrate my abilities in various aspects of development.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.6 }}
//         className='grid grid-cols-auto my-10 gap-5'>
//         {workData.map((project, index) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group mini-card'
//             style={{ backgroundImage: `url(${project.bgImage})` }}>
//             <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
//               <div>
//                 <h2 className='font-semibold'>{project.title}</h2>
//                 <p className='text-sm text-gray-700'>{project.description}</p>
//               </div>
//               <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
//                 <Image src={assets.send_icon} alt='send icon' className='w-5'/>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//     </motion.div>
//   )
// }

// export default MiniProjects
