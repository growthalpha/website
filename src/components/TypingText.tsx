
import React, { useEffect, useState, useRef } from 'react';

interface TypingTextProps {
  words: string[];
  speed?: number;
  delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  words,
  speed = 100, // milliseconds per character
  delay = 2000, // milliseconds to wait after typing a word
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Use ref to track if component is mounted
  const isActive = useRef(true);

  useEffect(() => {
    // Set isActive to false when component unmounts
    return () => {
      isActive.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isActive.current) return;
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      
      return () => clearTimeout(pauseTimer);
    }

    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
        
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText === currentWord) {
        setIsPaused(true);
      } else {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, speed);
        
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, speed, delay]);

  return <span className="shimmer-text">{currentText}</span>;
};

export default TypingText;
