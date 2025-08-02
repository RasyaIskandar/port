'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TextType from "@/components/file/TextType/TextType";

export default function Intro({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <AnimatePresence>
        {show && (
          <motion.div
            key="intro"
            className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold"
            >
            <TextType
          text={["Welcome To My Portfolio"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ini selalu ditampilkan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 0 : 1 }}
        transition={{ delay: show ? 0 : 0.3, duration: 0.7 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
