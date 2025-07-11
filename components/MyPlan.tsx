'use client'
import { cn } from '@/lib/utils';
import { Easing, motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-[20%]">
      <div className="">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -10, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0}}
            transition={{ duration: 0.3}}
            className="helvetica text-7xl lg:text-9xl font-bold"
            style={{
              letterSpacing: '-0.01em',
              lineHeight: '1'
            }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="lg:text-5xl text-2xl helveticaNB flex justify-center items-center opacity-60">{label}</span>
    </div>
  );
}


const animations = [
  { y: -10, scale: 1.2, rotate: 0 },
  { y: 0, scale: 1.3, rotate: 5 },
  { y: -5, scale: 1.1, rotate: -10 },
  { y: 10, scale: 1.2, rotate: 15 },
  { y: -15, scale: 1, rotate: 10 },
  { y: 5, scale: 1.05, rotate: -5 },
  { y: 0, scale: 1.4, rotate: 0 },
];
const startups = [
    {
      name: 'Feedyform',
      web: 'https://feedyform.com',
      starterDate: '2024',
      finishDate: '2025',
      smallDescription: 'Feedyform is a form builder built in the perspective that conversational forms convert better than normal forms. Feedyform has multiple features like theme personalization and conditional responses, always trityng to innovate and implement new features.',
      finished: true
    },
    {
      name: '@#*%$^!',
      web: 'https://xq@#*%$^!.com',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '_><|~?#',
      web: 'https://_><|~?#.dev',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '!&^%+=]',
      web: 'https://!&^%+=].net',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '{*>@#~}',
      web: 'https://{*>@#~}.io',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '[$!_&^%]',
      web: 'https://[$!_&^%].tech',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '`^+%|*#',
      web: 'https://`^+%|*#.world',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '#!@~&*%',
      web: 'https://#!@~&*%.xyz',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '><!?_*%',
      web: 'https://><!?_*%.co',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '{|@!*&]',
      web: 'https://{|@!*&].app',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '+$%&*?!',
      web: 'https://+$%&*?!.life',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '^`&[@+]',
      web: 'https://^`&[@+].pro',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '~|%*!$#',
      web: 'https://~|%*!$#.site',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '[#@$*%&]',
      web: 'https://[#@$*%&].page',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '#%~!^&*',
      web: 'https://#%~!^&*.store',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '!>@_#|%',
      web: 'https://!>@_#|%.biz',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '*#@!+%^',
      web: 'https://*#@!+%^.link',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '><|@#~!',
      web: 'https://><|@#~!.one',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '@!%#&^*',
      web: 'https://@!%#&^*.zone',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '%*&^@#!',
      web: 'https://%*&^@#!.ai',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '!@#^%*+',
      web: 'https://!@#^%*+.cloud',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '^&*#@!~',
      web: 'https://^&*#@!~.systems',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '[#%&*!]',
      web: 'https://[#%&*!].studio',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '|_+@#!%',
      web: 'https://|_+@#!%.team',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '*~^!@&#',
      web: 'https://*~^!@&#.design',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    },
    {
      name: '@#*%$^!',
      web: 'https://xq@#*%$^!.com',
      starterDate: '202%',
      finishDate: '202%',
      smallDescription: '',
      finished: false
    }
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
      <div className='flex items-center group justify-between lg:p-12 p-2 py-4'>
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
      
       <div className='hidden lg:flex items-center justify-center'>
                 <h2
                 className={cn('helvetica pr-6 cursor-default text-white flex', !finished && 'opacity-65')}
                 style={{ fontSize: '8rem', letterSpacing: '-0.01em' }}
                 >
                     {index + 1}.
                 </h2>
                 <h3
                     className={cn('helvetica  cursor-default text-white flex', !finished && 'opacity-65')}
                     style={{ fontSize: '8rem', letterSpacing: '-0.01em' }}
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
      
        <div className='md:flex flex-col items-end hidden justify-end max-w-lg'>
          <p
            className='hover:helveticaL transition-all text-justify opacity-40 group-hover:opacity-100 duration-300 text-white'
            style={{ letterSpacing: '-0.01em' }}
          >
            {smallDescription}
          </p>
          <p
            className='hover:helveticaL transition-all opacity-40 group-hover:opacity-100 duration-300 text-white'
            style={{ letterSpacing: '-0.01em' }}
          >
            {finished ? `${starterDate} - ${finishDate}` : `${starterDate} - ${finishDate}`}
          </p>
        </div>
      </div>
  );
}


function MyPlan() {
  const targetDate = new Date('August 13, 2025 00:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  const smoothEase: Easing = [0.25, 0.46, 0.45, 0.94];
  const elasticEase: Easing = [0.68, -0.55, 0.265, 1.55];
  
  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) return null;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeLeft();
      if (!updated) {
        clearInterval(interval);
      }
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className='w-full pt-32 bg-black' id='myplan'>
       <div className=' flex-col p-6'>
         <div className='flex flex-col lg:p-12 p-2 pb-12 lg:pb0'>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: elasticEase
              }}
            >
              <h2 className='helvetica text-white' style={{ fontSize: '12rem', letterSpacing: '-0.01em', lineHeight: '0.6'}}>
                  26'
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: elasticEase
              }}
            >
              <p className='text-2xl font-bold helveticaL text-white' style={{ letterSpacing: '-0.01em'}}>
                  Always wanted to create 
                  <span className='text-2xl px-2 font-bold helvetica text-white' style={{ letterSpacing: '-0.01em'}}>
                      new products
                  </span>
                  that help people, and why I created the 26'.<br /> 26 startups before 2026 ends
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: elasticEase
              }}
            >
              <p className='text-base helveticaNB text-white opacity-50' style={{ letterSpacing: '-0.01em'}}>
                  Click on the startups to learn more
              </p>
            </motion.div>
         </div>
         <div className='flex flex-col'>
            {startups.map((startup, index) => (
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

       <p className='text-sm helveticaNB w-full items-center justify-center flex text-white opacity-50 p-12'>
        All rights reserved 2025
       </p>
    </div>
    );
  }

  return (
    <div className='w-full bg-black min-h-screen' id='myplan'>
     <div className='min-h-screen  flex flex-col items-center justify-center w-full '>
       <div className="text-white lg:h-screen h-[90vh] lg:h-fit w-full flex flex-col lg:flex-row items-center justify-center">
           <TimeUnit value={timeLeft.days} label="Days" />
           <TimeUnit value={timeLeft.hours} label="Hours" />
           <TimeUnit value={timeLeft.minutes} label="Minutes" />
           <TimeUnit value={timeLeft.seconds} label="Seconds" />
       </div>
       <form className='flex flex-col w-full px-12 lg:px-0 lg:w-1/6 items-center pb-8 lg:pb-0 justify-center pt-6' action="https://submit-form.com/64z7dNXS7">
       <label className='text-white text-base helveticaNB opacity-75 mt-6 text-start items-start justify-start flex w-full'>Stay in the loop</label>
       <input type="email" id="email" name="email" placeholder="Email" required className='bg-white/10 w-full mt-1 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm'/>
       <button type="submit" className='bg-white/10 w-full mt-6 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm'>Send</button>
       <label className='text-white text-xs opacity-50 mt-2'>By submitting you agree to receive emails</label>
       </form>
     </div>
    </div>
  );
  
  
}

export default MyPlan



