'use client';

import { useState } from 'react';
import Sidebar from './sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3 },
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#4E7796] z-50 lg:hidden flex justify-between items-center px-4 py-3 shadow-md">
        <div className="text-white text-xl font-bold">Ghoona</div>
        <button className="text-white" onClick={() => setIsOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="2x" />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 z-50 h-screen w-[220px] lg:hidden"
            >
              <Sidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
