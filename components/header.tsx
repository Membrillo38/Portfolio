'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Youtube, Instagram, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledMobile, setIsScrolledMobile] = useState(false);
  const [DrawerOpen, setDrawerOpen] = useState(false);

  const targetDate = new Date('August 13, 2025 00:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  
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



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
      setIsScrolledMobile(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Me', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' }
  ];

  const navLinksSmall = navLinks.slice(0, 3);

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <>
    <motion.div
      initial={{ y: -220, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25, duration: 0.5, delay: 1 }}
    >
    <motion.header
      initial={false}
      animate={{
        width: isScrolled ? '100%' : '400px',
        height: !isScrolled ? "48px" : "64px",
        borderRadius: isScrolled ? 0 : 100,
        top: isScrolled ? 0 : 16,
        left: isScrolled ? 0 : '50%',
        x: isScrolled ? 0 : '-50%',
        backgroundColor: isScrolled ? '#ffffff' : '#ffffff'
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 0.5 }}
      className="fixed z-50 backdrop-blur-md h-full shadow-2xl overflow-hidden hidden md:block"
    >
      {/* 1. Animación hacia arriba */}
      <motion.div
        initial={{ y: 20, opacity: 0, x: 0 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="flex items-center justify-center px-6 min-w-0 h-full "
      >

        {/* 2. Animación expansión */}
        <motion.div
          initial={{ width: '400px' }}
          animate={{ width: isScrolled ? '100%' : '400px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.6 }}
          className="flex flex-1 min-w-0 items-center"
        >
          {/* 3. Texto a la izquierda (navegación) */}
          <motion.nav
            className={`gap-6 flex flex-1 h-full items-center min-w-0 ${isScrolled ? 'justify-start' : 'justify-center'}`}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={cn("relative  transition-colors items-center justify-center duration-300 text-sm font-medium group whitespace-nowrap", isScrolled ? 'text-black' : 'text-black')}
                whileHover={{ scale: 1.15 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              key={'myplan'}
              href={"/26"}
              className={cn("relative text-black transition-colors items-center justify-center duration-500 text-sm font-medium group whitespace-nowrap", !isScrolled && 'hidden')}
              whileHover={{ scale: 1.15 }}
              whileTap={{ y: 0 }}
            >
              {!timeLeft ? "26'" : "?" }
            </motion.a>
          </motion.nav>



          {/* 4. Aparece texto a la derecha (botones + redes) */}
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.div
                key="right-content"
                initial={{ opacity: 0, x: 30, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: 30, width: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.6 }}
                className="flex items-center gap-6 overflow-hidden"
              >
                {/* Botones */}
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <motion.a
                    href='https://feedyform.com/submit/workwithandrews'
                    target='_blank'
                    className="text-black text-sm font-medium transition-colors duration-300 group flex items-center gap-2"
                    whileHover={{ x: 1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Work with me
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>

                  <motion.a
                    href='https://feedyform.com/submit/letstalkandrews'
                    target='_blank'
                    className="bg-black/10 hover:bg-black/20 border border-black/30 hover:border-black/50 text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"

                    whileHover={{ scale: 0.90 }}
                    whileTap={{ scale: 1 }}
                  >
                    Let's talk
                  </motion.a>
                </div>

                {/* Divisor */}
                <div className="w-px h-6 bg-black/30 flex-shrink-0" />

                {/* Redes sociales */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      className="text-black/80 hover:text-black transition-colors duration-300 p-1.5 rounded-full hover:bg-black/10"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        type: 'spring',
                        stiffness: 400,
                        damping: 20
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 5,
                        y: -2
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.header>
    </motion.div>
    
    {/* mobil */}
    <motion.div
      initial={{ y: -220, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25, duration: 0.5, delay: 1 }}
    >
     <motion.header
       initial={false}
       animate={{
         width: isScrolledMobile ? '100%' : '0%',
         height: !DrawerOpen ? "64px" : "100%",
         borderRadius: 0,
         top: 0,
         left:0,
         x: 0,
         backgroundColor: '#ffffff',
         opacity: 1
       }}
       transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 0.5 }}
       className={`fixed z-50 backdrop-blur-md h-full  shadow-2xl overflow-hidden bg-red-500 block md:hidden ${DrawerOpen ? 'flex-col' : 'flex'} h-full flex items-center justify-center`}
     >
         {/* 1. Animación hacia arriba */}
       
          
             {/* 3. Texto a la izquierda (navegación) */}
             <motion.nav
               className={`gap-6 flex  ${DrawerOpen ? 'pb-20' : 'pb-0'} z-40 ${DrawerOpen ? 'flex-col' : 'flex-row'} flex-1 items-center min-w-0 ${isScrolledMobile ? !DrawerOpen ? 'justify-start pl-6' : 'justify-center' : 'justify-center'}`}
             >
               {!DrawerOpen ? navLinksSmall.map((link) => ( 
                 <motion.a
                   key={link.name}
                   href={link.href}
                   className={cn("relative  transition-colors items-center justify-center duration-300 text-sm font-medium group whitespace-nowrap", isScrolledMobile ? 'text-black' : 'text-black')}
                   whileHover={{ scale: 1.15 }}
                   whileTap={{ y: 0 }}
                 >
                   {link.name}
                 </motion.a>
               )) : navLinks.map((link) => (
                 <motion.a
                   key={link.name}
                   href={link.href}
                   className={cn("relative  transition-colors items-center justify-center duration-300 text-sm font-medium group whitespace-nowrap", isScrolledMobile ? 'text-black' : 'text-black')}
                   whileHover={{ scale: 1.15 }}
                   whileTap={{ y: 0 }}
                 >
                   {link.name}
                 </motion.a>
               ))}
               {DrawerOpen && <motion.a
              key={'myplan'}
              href={"/26"}
              className={cn("relative text-black transition-colors items-center justify-center duration-500 text-sm font-medium group whitespace-nowrap", !DrawerOpen && 'hidden')}
              whileHover={{ scale: 1.15 }}
              whileTap={{ y: 0 }}
            >
              {!timeLeft ? "26'" : "?" }
            </motion.a>}
             </motion.nav>
    
             <motion.nav
               className={`gap-6 items-center z-50 absolute bottom-6  min-w-0 ${DrawerOpen ? 'justify-end' : 'justify-end'} ${DrawerOpen ? 'flex' : 'hidden'}`}
               initial={{ x: 50, opacity: 0,}}
               animate={{ x: 0, opacity: 1,  flexDirection: DrawerOpen ? 'column' : 'row'  }}
               transition={{ type: 'spring', stiffness: 400, damping: 25 }}
             >               {/* Botones */}

 <motion.a
   target='_blank'
                   href='https://feedyform.com/submit/letstalkandrews'
   className="bg-black/10 hover:bg-black/20 border border-black/30 hover:border-black/50 text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"

   whileHover={{ scale: 0.90 }}
   whileTap={{ scale: 1 }}
 >
   Let's talk
 </motion.a>

{/* Divisor */}
<div className="w-24 h-px bg-black/30 flex-shrink-0" />

{/* Redes sociales */}
<div className="flex items-center gap-3 flex-shrink-0">
 {socialLinks.map((social, index) => (
   <motion.a
     key={social.label}
     target='_blank'
                   href={social.href}
     className="text-black/80 hover:text-black transition-colors duration-300 p-1.5 rounded-full hover:bg-black/10"
     aria-label={social.label}
     initial={{ opacity: 0, scale: 0 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{
       delay: 0.1 + index * 0.05,
       type: 'spring',
       stiffness: 400,
       damping: 20
     }}
     whileHover={{
       scale: 1.2,
       rotate: 5,
       y: -2
     }}
     whileTap={{ scale: 0.9 }}
   >
     <social.icon size={18} />
   </motion.a>
 ))}
</div>
            </motion.nav>
    
    
             {/* 4. Aparece texto a la derecha (botones + redes) */}
             <AnimatePresence mode="wait">
               {isScrolledMobile && (
                 <motion.div
                   key="right-content"
                   initial={{ opacity: 0, x: 30, width: 0 }}
                   animate={{ opacity: 1, x: 0, width: 'auto' }}
                   exit={{ opacity: 0, x: 30, width: 0 }}
                   transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.6 }}
                   className="flex items-center gap-6 overflow-hidden z-50"
                 >
                  <motion.button
                    onClick={() => setDrawerOpen(prev => !prev)}
                    className="p-1 rounded-full absolute pr-6 right-0 top-4.75 hover:bg-black/10 transition-colors duration-300"
                  >
                    {!DrawerOpen ? <Menu size={18} color='black' /> : <X size={18} color='black' />}
                  </motion.button>
                 </motion.div>
               )}
             </AnimatePresence>
       </motion.header>
   </motion.div>
      </>
  );
}


