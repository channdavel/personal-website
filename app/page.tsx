'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Portfolio() {
  const [expanded, setExpanded] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [contactText, setContactText] = useState('Contact')

  const toggleInfo = () => {
    setExpanded(!expanded)
    setDarkMode(!darkMode)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('channdavel@gmail.com')
      setContactText('Email copied')

      setTimeout(() => {
        setContactText('Contact')
      }, 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : 'light'}`}>
      <style jsx global>{`
        .dark {
          --bg-color: #222222;
          --text-color: white;
          --hover-color: #eedb46;
        }
        .light {
          --bg-color: #f5f5f5;
          --text-color: #333333;
          --hover-color: #FCCCE2;
        }
        .hover-text {
          color: #818181 !important;
          transition: color 0.3s ease;
        }
        .hover-text:hover {
          color: var(--hover-color) !important;
        }
      `}</style>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
        <main className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start">
          
          {/* Left Section */}
          <div className="flex-1 mb-8 md:mb-0 px-4">
            <h1 className="text-lg font-normal mb-4">Hello, I'm Channdavel</h1>
            {expanded && (
              <div className="mt-4 animate-fade-in">
                <p className="mb-4" style={{ color: '#818181' }}>
                  or CK
                </p>
              </div>
            )}
          </div>

          {/* Middle Section */}
          <div className="flex-1 mb-8 md:mb-0 px-8">
            <p className="text-lg font-normal mb-4">I develop</p>
            <ul className="text-lg font-normal mb-4 space-y-2" style={{ color: '#818181' }}>
              <li>full-stack applications and data-driven visualizations for others</li>
            </ul>
            <button
              onClick={toggleInfo}
              className="text-lg font-normal mb-4 focus:outline-none hover-text"
            >
              {expanded ? 'About -' : 'About +'}
            </button>
            {expanded && (
              <div className="mt-4 animate-fade-in">
                <p className="text-lg font-normal mb-4">I learn</p>
                <p className="mb-4" style={{ color: '#818181' }}>
                  I'm currently pursuing a Bachelor's Degree in Information Science and a Certificate in Children's Literature at the University of Pittsburgh. I have a passion for coding, learning, and building. 
                </p>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="flex-1 mb-8 md:mb-0 px-12">
            <h2 className="text-lg font-normal mb-4">Let's connect</h2>
            <ul className="text-lg font-normal mb-4 space-y-2">
              <li>
                <Link 
                  href="https://linkedin.com/in/channdavel" 
                  className="focus:outline-none hover-text"
                >
                  <span className="hover-text">LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.channdavel.me/Channdavel_Kong.pdf" 
                  className="focus:outline-none hover-text"
                >
                  <span className="hover-text">Resume</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={copyEmail} 
                  className="focus:outline-none hover-text"
                >
                  {contactText}
                </button>
              </li>
            </ul>
          </div>
        </main>
        
        {/* Fixed Flower Icon */}
        <div className="fixed top-8 right-8 w-1000 h-1000">
          <ul className={`petals ${darkMode ? 'dark' : ''}`} style={{ transform: 'scale(0.16)' }}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}