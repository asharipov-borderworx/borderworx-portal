'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypingAnimationProps {
  words: string[]
  className?: string
  finalText?: string
}

export default function TypingAnimation({ words, className = '', finalText }: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(50)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete) return

    const currentWord = finalText && currentWordIndex >= words.length ? finalText : words[currentWordIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1))
          setTypingSpeed(50)
        } else {
          // Finished typing
          if (finalText && currentWordIndex >= words.length) {
            // We've reached the final text, stop here
            setIsComplete(true)
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 500)
          }
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1))
          setTypingSpeed(50)
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) => prevIndex + 1)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, finalText, isComplete])

  return (
    <>
      {!isComplete ? (
        <span className={className}>
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        </span>
      ) : (
        <span className={className} style={{ textShadow: '0 0 20px rgba(237, 90, 40, 0.4), 0 0 40px rgba(255, 165, 0, 0.3)' }}>
          {displayedText}
          <motion.span
            animate={{ opacity: [1,0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        </span>
      )}
    </>
  )
}


