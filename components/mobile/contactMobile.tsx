import { Easing, motion } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react';
import React from 'react'

function ContactMobile() {
    const elasticEase: Easing = [0.68, -0.55, 0.265, 1.55];

    const contactWays = [
        {
            name: 'DM',
            link: 'https://instagram.com/andresscasillas',
            desc: 'Send me a direct message on Instagram, I will answer as soon as possible. I am open to talk about any topic that you want to discuss. I am also open to collaborations and projects that you want to work on.',
            logo: <MessageCircle className='text-white flex h-8 w-8 items-center justify-center'/>
        },
        {
            name: 'Email',
            link: 'mailto:andres@casillas.dev',
            desc: 'Send me an email if you want to talk about something more formal or if you want to send me a message with more information. I will answer as soon as possible.',
            logo: <Send className='text-white flex h-8 w-8 items-center justify-center'/>
        },
    ]
  return (
    <div className='min-h-screen w-full bg-black'>
       <div className='p-12 flex flex-col'>
        <div className=' flex flex-col'>
                 <div className='mt-24 flex flex-col items-center justify-center'>
                     <motion.div
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{
                         duration: 0.8,
                         ease: elasticEase
                       }}
                     >
                       <h2 className='helvetica w-full text-white' style={{ fontSize: '5rem', letterSpacing: '-0.01em', lineHeight: '1' }}>
                         Contact
                       </h2>
                     </motion.div>
                     <div className='mt-2 flex flex-col'>
                   <p className='text-2xl font-bold helveticaL text-justify text-white'>
                     Feel free to contact me to work together. Or maybe you have an idea and you don't know how to ship it.
                   </p>
               </div>
                   </div>
        </div>
        <div className='flex mt-24 w-full items-center justify-center '>
            <div className='grid lg:grid-cols-2 lg:gap-x-24 grid-cols-1 gap-y-24'>
                {
                    contactWays.map((item, index) => (
                        <div key={index} className='flex max-w-sm flex-col items-center justify-start'>
                            <div className='flex items-center justify-center min-w-24 min-h-24 bg-black border border-white rounded-full'>
                                {item.logo}
                            </div>
                            <h2 className='helvetica w-full items-center justify-center text-center mt-12 text-white' style={{ fontSize: '4rem', letterSpacing: '-0.01em', lineHeight: '1' }}>
                                {item.name}
                              </h2>
                            <div className='mt-2 flex flex-col'>
                          <p className='text-2xl my-4 font-bold helveticaL text-justify text-white'>
                            {item.desc}
                          </p>
                      </div>
                          <div className='mt-4 h-full flex  items-end justify-end flex-col'>
                          <p    className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                          >
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                Contact now
                            </a>
                          </p>
                      </div>
                          </div>
                    ))
                }
            </div>
        </div>
       </div>
       <p className='text-sm helveticaNB w-full items-center justify-center flex text-white opacity-50 pt-24 pb-8'>
        All rights reserved 2025
       </p>
    </div>
  )
}

export default ContactMobile