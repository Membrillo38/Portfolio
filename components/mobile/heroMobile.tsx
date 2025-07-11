'use client';
import { motion, AnimatePresence, Easing } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const words = [
  'Coding',
  'Developing',
  'Debugging',
  'Creating',
  'Building',
  'Designing',
  'Prototyping',
  'Testing',
];


function HeroMobile() {
  const [current, setCurrent] = useState(0);
  const [wordWidth, setWordWidth] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  const sentence = ['In', 'Love'];
  const ending = ['New', 'Things'];

  // easing
  const smoothEase: Easing = [0.25, 0.46, 0.45, 0.94];
  const elasticEase: Easing = [0.68, -0.55, 0.265, 1.55];

  // Cada 2.5s actualiza la palabra y la anchura animada
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % words.length;

        // Mide la siguiente palabra usando el span oculto
        if (measureRef.current) {
          measureRef.current.innerText = words[next];
          const nextWidth = measureRef.current.getBoundingClientRect().width;
          setWordWidth(nextWidth);
        }

        return next;
      });
    }, 2500);

    // Inicializa ancho la primera vez
    if (measureRef.current) {
      measureRef.current.innerText = words[0];
      setWordWidth(measureRef.current.getBoundingClientRect().width);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="h-screen w-full  bg-black"
      >
        <motion.h1
          className="md:text-7xl text-6xl font-black flex flex-col items-center justify-center md:h-[100%] h-[90%] text-white flex-wrap"
          style={{ letterSpacing: '-0.05em', lineHeight: '1' }}
          layout
        >
          {sentence.map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: smoothEase,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              layout
              className="mx-1 helvetica inline-block"
              style={{ transformOrigin: 'center bottom', lineHeight: '1' }}
            >
              {word}
            </motion.span>
          ))}
      
          <motion.div
            className="px-3 cormorant relative flex items-center justify-center text-pink-500"
            initial={{ width: '100%', y: 100, opacity: 0, rotateX: -90, alignItems: 'center' }}
            animate={{ width: '100%', y: 0, opacity: 1, rotateX: 0, alignItems: 'center' }}
            transition={{
              delay: sentence.length * 0.15,
              duration: 0.6,
              ease: smoothEase,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                ref={wordRef}
                key={words[current]}
                initial={{
                  y: 10,
                  opacity: 0,
                  filter: 'blur(8px)',
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                exit={{
                  y: 0,
                  opacity: 0,
                  filter: 'blur(8px)',
                }}
                transition={{
                  duration: 0.7,
                  ease: elasticEase,
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.7 },
                }}
                layout
              >
                {words[current]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
      
          {ending.map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                delay: (sentence.length + 1 + i) * 0.15,
                duration: 0.8,
                ease: smoothEase,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              layout
              className="ml-1 helvetica inline-block"
              style={{ transformOrigin: 'center bottom', lineHeight: '1' }}
            >
              {word}
            </motion.span>
          ))}
      
          {/* Span oculto para medir ancho */}
          <span
            ref={measureRef}
            className="px-3 cormorant inline-block absolute invisible whitespace-nowrap"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
            aria-hidden="true"
          />
        </motion.h1>
      </div>
    </>
  );
}

export default HeroMobile;
