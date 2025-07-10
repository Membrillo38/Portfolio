import { cn } from '@/lib/utils';
import { Easing, motion } from 'framer-motion'
import { Brain, Hammer, LucideSquareTerminal, Timer } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export const IconsProjects = [
  {
      label: 'Currently working on',
      icon: <Hammer className='text-white flex items-center justify-center'/>,
      project: 'FeedyForm',
      web: 'https://feedyform.com'
  },
  {
      label: 'Latest Project',
      icon: <LucideSquareTerminal className='text-white flex items-center justify-center'/>,
      project: 'FeedyForm',
      web: 'https://feedyform.com'
  },
  {
      label: 'Longest Project',
      icon: <Timer className='text-white flex items-center justify-center'/>,
      project: 'FeedyForm',
      web: 'https://feedyform.com'
  },
  {
      label: 'Thinking of working on',
      icon: <Brain className='text-white flex items-center justify-center'/>,
      project: 'Folio.so',
      web: null
  }
]


export const projects = [
{
  name: 'Feedyform',
  web: 'https://feedyform.com',
  starterDate: '2024',
  finishDate: '2025',
  smallDescription: 'Feedyform is a form builder built in the perspective that conversational forms convert better than normal forms. Feedyform has multiple features like theme personalization and conditional responses, always trityng to innovate and implement new features.',
  finished: true
},
]


const animations = [
  { y: -10, scale: 1.2, rotate: 0 },
  { y: 0, scale: 1.3, rotate: 5 },
  { y: -5, scale: 1.1, rotate: -10 },
  { y: 10, scale: 1.2, rotate: 15 },
  { y: -15, scale: 1, rotate: 10 },
  { y: 5, scale: 1.05, rotate: -5 },
  { y: 0, scale: 1.4, rotate: 0 },
];


function StartupTitle({
  name,
  web,
  starterDate,
  finishDate,
  smallDescription,
  finished,
  index
}: {
  name: string;
  web: string;
  starterDate: string;
  finishDate: string;
  smallDescription: string;
  finished: boolean;
  index: number
}) {

    const smoothEase: Easing = [0.25, 0.46, 0.45, 0.94];
    const elasticEase: Easing = [0.68, -0.55, 0.265, 1.55];


  return (
      <div className='flex flex-col items-start group justify-between lg:p-12 p-2 py-4'>
       <div className='flex lg:hidden items-center justify-center'>
                 <h2
                 className={cn('helvetica pr-2 cursor-default text-white flex', !finished && 'opacity-65')}
                 style={{ fontSize: '2rem', letterSpacing: '-0.01em' }}
                 >
                     {index + 1}.
                 </h2>
                 <h3
                     className={cn('helvetica  cursor-default text-white flex', !finished && 'opacity-65')}
                     style={{ fontSize: '2rem', letterSpacing: '-0.01em' }}
                     >
                     {name.split('').map((letter, i) => {
                         const animation = animations[Math.floor(Math.random() * animations.length)];
                         return (
                         <motion.span
                             key={i}
                             whileHover={{
                             ...animation,
                             transition: { type: 'spring', stiffness: 300, damping: 10 },
                             }}
                             className='inline-block'
                         >
                             {letter === ' ' ? '\u00A0' : letter}
                         </motion.span>
                         );
                     })}
                     </h3> 
       </div>
      
       <div className='hidden lg:flex items-center w-full justify-between'>
                <div className='flex items-center'>
                     <h2
                     className={cn('helvetica pr-6 cursor-default text-white flex', !finished && 'opacity-65')}
                     style={{ fontSize: '5rem', letterSpacing: '-0.01em' }}
                     >
                         {index + 1}.
                     </h2>
                     <h3
                         className={cn('helvetica  cursor-default text-white flex', !finished && 'opacity-65')}
                         style={{ fontSize: '5rem', letterSpacing: '-0.01em' }}
                         >
                         {name.split('').map((letter, i) => {
                             const animation = animations[Math.floor(Math.random() * animations.length)];
                             return (
                             <motion.span
                                 key={i}
                                 whileHover={{
                                 ...animation,
                                 transition: { type: 'spring', stiffness: 300, damping: 10 },
                                 }}
                                 className='inline-block'
                             >
                                 {letter === ' ' ? '\u00A0' : letter}
                             </motion.span>
                             );
                         })}
                         </h3> 
                </div>

                       <p
            className='hover:helveticaL transition-all opacity-40 group-hover:opacity-100 duration-300 text-white'
            style={{ letterSpacing: '-0.01em' }}
          >
            {finished ? `${starterDate} - ${finishDate}` : `${starterDate} - ${finishDate}`}
          </p>
       </div>
      
        <div className='md:flex flex-col items-end hidden justify-end'>
          <p
            className='hover:helveticaL transition-all text-justify opacity-40 group-hover:opacity-100 duration-300 text-white'
            style={{ letterSpacing: '-0.01em' }}
          >
            {smallDescription}
          </p>
          
        </div>
      </div>
  );
}



function Projects() {
    const smoothEase: Easing = [0.25, 0.46, 0.45, 0.94];
    const elasticEase: Easing = [0.68, -0.55, 0.265, 1.55];

    
  return (
    <div className='min-h-screen w-full bg-black' id='projects'>
        <div className='p-12 grid grid-cols-2'>
            <div className=' flex flex-col'>
                <div className='mt-24 flex flex-col items-start justify-center'>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: elasticEase
                      }}
                    >
                      <h2 className='helvetica w-full text-white' style={{ fontSize: '12rem', letterSpacing: '-0.01em', lineHeight: '1' }}>
                        Projects
                      </h2>
                    </motion.div>
                    <div className='mt-2 flex flex-col'>
                  <p className='text-2xl font-bold helveticaL text-justify text-white'>
                    At the moment, I&apos;m working on a few projects, but I&apos;ll be adding more soon.
                  </p>
              </div>
                  </div>
                  <div className='mt-12 grid grid-cols-2 '>
  {
    IconsProjects.map((item, index) => (
        <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.8,
                        ease: elasticEase
                      }}
                    >
      <div key={index} className='flex items-start justify-start flex-col px-4 py-8'>
        <div className='flex  items-center w-full justify-start'>
          <div className='w-12 h-12 rounded-full bg-black border-white border flex items-center justify-center'>
            {item.icon}
          </div>
          <div className='ml-4'>
            <h4 className='text-xl font-bold helveticaL text-justify text-white' style={{ fontSize: '1.5rem', letterSpacing: '-0.01em', lineHeight: '1.5' }}>
              {item.label}
            </h4>
          </div>
        </div>
        <div className='mt-6  flex'>
          <h3 className='text-6xl font-bold helveticaNB text-justify text-white'>
            {item.project}
          </h3>
        </div>
        {
          item.web &&
          <div className='mt-2 flex'>
            <Link href={item.web} target='_blank' className='bg-white/10 w-full mt-0 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm'>
              Visit Website
            </Link>
          </div>
        }

{
          item.web === null &&
          <div className='mt-2 flex'>
            <div className='bg-white/10 w-full mt-0 opacity-65 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm'>
              Website not available
            </div>
          </div>
        }
      </div>
                          </motion.div>

    ))
  }
</div>

            </div>
            <div className='flex flex-col mt-12'>
            {projects.map((startup, index) => (
                <>
                <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: smoothEase
                }}
              >
                {
                  startup.finished ? (
                    <Link href={startup.web}>
                      <StartupTitle key={index} index={index} name={startup.name} web={startup.web} starterDate={startup.starterDate} finishDate={startup.finishDate} smallDescription={startup.smallDescription} finished={startup.finished} />
                    </Link>
                  ) : (
                    <StartupTitle key={index} index={index} name={startup.name} web={startup.web} starterDate={startup.starterDate} finishDate={startup.finishDate} smallDescription={startup.smallDescription} finished={startup.finished} />
                  )
                }
                </motion.div>
                
               <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{
                 delay: index * 0.22,
                 duration: 0.5,
                 ease: smoothEase
               }}
             >
                 <div className='w-full h-px bg-white/30' />
               </motion.div>
                </>
            ))}
         </div>
        </div>
    </div>
  )
}

export default Projects