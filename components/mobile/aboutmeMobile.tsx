'use client'
import { Easing, motion } from 'framer-motion'
import React from 'react'

function AboutMeMobile() {
  const smoothEase: Easing = [0.25, 0.46, 0.45, 0.94];
  const elasticEase: Easing = [0.68, -0.55, 0.265, 1.55];

  const [largeversion, setLargeVersion] = React.useState(true);

  return (
    <>
      <div className='min-h-screen block w-full bg-black' id='about'>
        <div className='p-8 flex flex-col'>
          <div className='mt-24 w-full flex flex-col items-start justify-center'>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: elasticEase
              }}
            >
              <h2 className='helvetica w-full text-white' style={{ fontSize: '5rem', letterSpacing: '-0.01em', lineHeight: '1' }}>
                About Me
              </h2>
            </motion.div>
            <p className='text-xl font-bold helveticaL text-justify text-white' onClick={() => setLargeVersion(!largeversion)}>
              See {!largeversion ? 'Short' : 'Full'} version
            </p>
          </div>
          <div className='mt-24 flex flex-col'>
            {largeversion ? (
              <p className='text-2xl font-bold helveticaL text-justify text-white'>
                I’m <strong className='helveticaNB'>Andrés</strong> from Barcelona. I started building apps with Flutter, but after Google rejected my developer account, I shifted toward design.
                <br /><br />
                Years later, I returned to web development, aiming to create products that blend <strong className='helveticaNB'>great design and strong functionality</strong>.
                <br /><br />
                I believe in <strong className='helveticaNB'>learning from mistakes and from others</strong> — that’s what drives my growth.
              </p>
            ) : (
              <p className='text-2xl font-bold helveticaL text-justify text-white'>
                I’m <strong className='helveticaNB'>Andrés</strong>, from Barcelona. I’ve always been passionate about designing and building products that help people.
                <br /><br />
                When I was younger, I discovered Flutter and started building cross-platform apps. But my plans fell apart when Google rejected my developer account and I couldn’t publish any apps.
                <br /><br />
                After that, I stepped away from programming and focused more on design.
                <br /><br />
                Years later, I returned to web development with a clear goal: to build products that combine <strong className='helveticaNB'>great design with strong functionality</strong>.
                <br /><br />
                My drive to learn and grow has taught me that in this world, you either evolve or fall behind. That’s why I believe that <strong className='helveticaNB'>learning from mistakes and from others</strong> is one of my greatest strengths.
              </p>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutMeMobile
