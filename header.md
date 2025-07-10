'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Youtube, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <motion.header
      initial={false}
      animate={{
        width: isScrolled ? '100%' : '400px',
        borderRadius: isScrolled ? 0 : 9999,
        top: isScrolled ? 0 : 16,
        left: isScrolled ? 0 : '50%',
        x: isScrolled ? 0 : '-50%',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 0.5 }}
      className="fixed z-50 bg-black/95 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden"
    >
      {/* 1. Animación hacia arriba */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: isScrolled ? 0 : 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={cn("flex items-center px-6 min-w-0", !isScrolled ? "h-12" : "h-16")}
      >
        {/* 2. Animación expansión */}
        <motion.div
          initial={{ width: '400px' }}
          animate={{ width: isScrolled ? '100%' : '400px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.6 }}
          className="flex flex-1 min-w-0"
        >
          {/* 3. Texto a la izquierda (navegación) */}
          <motion.nav
            className={`flex gap-6 flex-1 min-w-0 ${isScrolled ? 'justify-start' : 'justify-center'}`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative text-white transition-colors duration-300 text-sm font-medium group whitespace-nowrap"
                whileHover={{ scale: 1.15 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
              </motion.a>
            ))}
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
                  <motion.button
                    className="text-white text-sm font-medium transition-colors duration-300 group flex items-center gap-2"
                    whileHover={{ x: 1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Work with me
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 0.85 }}
                    whileTap={{ scale: 1 }}
                  >
                    Let's talk
                  </motion.button>
                </div>

                {/* Divisor */}
                <div className="w-px h-6 bg-white/30 flex-shrink-0" />

                {/* Redes sociales */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 p-1.5 rounded-full hover:bg-white/10"
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
  );
}
