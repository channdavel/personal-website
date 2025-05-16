'use client'

import { useState } from 'react'
import Link from 'next/link'
import Cat from './components/Cat'

export default function Portfolio() {
  const [expanded, setExpanded] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [contactText, setContactText] = useState('Contact')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

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

  const toggleProject = (projectName: string) => {
    if (selectedProject === projectName) {
      setSelectedProject(null)
    } else {
      setSelectedProject(projectName)
    }
  }

  // Timeline data
  const timelineItems = [
    {
      company: "WebstaurantStore",
      position: "Software Engineer Intern",
      period: "2025 - 2025",
      details: "working on ...",
      color: "#1E88E5"
    },
    {
      company: "Epic Games",
      position: "Freelance Programmer",
      period: "2024 - 2025",
      details: "built Fortnite islands reaching 200k+ players with Unreal Editor",
      color: "#FFC107"
    },
  ]

  // Projects data
  const projects = [
    {
      name: "Trails",
      description: "Full-stack platform that matches oncology patients with clinical trials",
      technologies: ["React", "Next.js", "Node.js", "Flask", "Python"]
    },
    {
      name: "Eventify",
      description: "Full-stack app that converts multimodal input (image, audio, text) into .ics calendar events",
      technologies: ["React", "Next.js", "Flask", "Python", "Google Gemini API"]
    },
    {
      name: "IP Searcher",
      description: "Web app that allows a user to search for detailed information about an IP address",
      technologies: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Google Maps API"]
    }
  ]

  const techColors: {[key: string]: string} = {
    "TypeScript": "#3178C6",
    "React": "#61DAFB",
    "Next.js": "#000000",
    "Node.js": "#339933",
    "Express.js": "#F7DF1E",
    "AWS": "#FF9900",
    "JavaScript": "#F7DF1E",
    "Supabase": "#3ECF8E",
    "Spotify API": "#1DB954"
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
        .timeline-item {
          position: relative;
          padding-left: 30px;
          margin-bottom: 30px;
          transition: transform 0.2s;
          cursor: pointer;
        }
        .timeline-item:hover {
          transform: translateX(5px);
        }
        .timeline-item:before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .timeline-dot-blue:before { background-color: #F1DEDE; }
        .timeline-dot-yellow:before { background-color: #ddfff7; }
        .timeline-dot-green:before { background-color: #e3d7ff; }
        .timeline-dot-red:before { background-color: #e1d89f; }
        .timeline-item:not(:last-child):after {
          content: '';
          position: absolute;
          left: 5px;
          top: 20px;
          width: 2px;
          height: calc(100% + 15px);
          background-color: #555;
        }
        .project-item {
          cursor: pointer;
          margin-bottom: 24px;
          transition: transform 0.2s;
        }
        .project-item:hover {
          transform: translateX(5px);
        }
        .tech-text {
          margin-right: 12px;
          color: #818181;
          transition: color 0.3s ease;
        }
        .tech-text:hover {
          color: var(--hover-color) !important;
        }
        .project-name {
          color: var(--text-color);
          transition: color 0.3s ease;
        }
        .project-name:hover {
          color: var(--hover-color) !important;
        }
      `}</style>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
        <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col md:flex-row justify-start items-start">
          
          {/* Left Section */}
          <div className="w-full md:flex-1 mb-8 md:mb-0 md:px-4">
            <h1 className="heading-style mb-4">Channdavel</h1>
            {expanded && (
              <div className="mt-4 animate-fade-in">
                <p className="text-xl mb-4" style={{ color: '#818181' }}>
                  or CK
                </p>
              </div>
            )}
          </div>

          {/* Middle Section */}
          <div className="w-full md:flex-1 mb-8 md:mb-0 md:px-8">
            <h2 className="heading-style mb-4">I develop</h2>
            <ul className="text-xl font-normal mb-4 space-y-2" style={{ color: '#818181' }}>
              <li>full-stack applications designed for usability with a focus on user experience</li>
            </ul>
            <div className="text-xl font-normal mb-4 mt-8" style={{ marginTop: '3rem' }}>
              <button
                onClick={toggleInfo}
                className="focus:outline-none hover-text"
              >
                {expanded ? 'About -' : 'About +'}
              </button>
            </div>
            {expanded && (
              <div className="mt-4 animate-fade-in">
                <h2 className="heading-style mb-4">I study</h2>
                <p className="text-xl mb-4" style={{ color: '#818181' }}>
                  Information Science and Children&apos;s Literature at the University of Pittsburgh
                </p>
                
                <h2 className="heading-style mb-4">I work</h2>
                <div className="mb-8 max-w-full">
                  {timelineItems.map((item, index) => {
                    // Determine the CSS class based on the color
                    let dotClass = '';
                    if (item.color === '#1E88E5') dotClass = 'timeline-dot-blue';
                    else if (item.color === '#FFC107') dotClass = 'timeline-dot-yellow';
                    else if (item.color === '#4CAF50') dotClass = 'timeline-dot-green';
                    else if (item.color === '#E53935') dotClass = 'timeline-dot-red';
                    
                    return (
                      <div 
                        key={index} 
                        className={`timeline-item ${dotClass}`}
                      >
                        <div className="w-full flex flex-col">
                          <div className="flex justify-between items-start w-full">
                            <h3 className="text-xl font-medium" style={{ color: 'var(--text-color)' }}>{item.company}</h3>
                            <span className="text-lg whitespace-nowrap ml-4" style={{ color: '#818181' }}>{item.period}</span>
                          </div>
                          
                          <p className="text-xl w-full" style={{ color: '#818181' }}>{item.position}</p>
                          <p className="text-lg mt-2 w-full" style={{ color: '#818181' }}>{item.details}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <h2 className="heading-style mb-4">I build</h2>
                <div className="mb-8">
                  {projects.map((project, index) => (
                    <div key={index} className="mb-6">
                      <div 
                        className="project-item"
                        onClick={() => toggleProject(project.name)}
                      >
                        <h3 className="text-xl font-medium project-name">{project.name}</h3>
                        
                        {selectedProject === project.name && (
                          <div className="my-2">
                            <div className="flex flex-wrap">
                              {project.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex} 
                                  className="text-lg tech-text"
                                >
                                  {tech}{techIndex < project.technologies.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <p className="text-lg mt-1" style={{ color: '#818181' }}>{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full md:flex-1 mb-8 md:mb-0 md:px-12">
            <h2 className="heading-style mb-4">Let&apos;s connect</h2>
            <ul className="text-xl font-normal mb-4 space-y-2">
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
                  href="https://github.com/channdavel" 
                  className="focus:outline-none hover-text"
                >
                  <span className="hover-text">GitHub</span>
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
        
        {/* Fixed Cat Icon */}
        <div className="fixed top-20 right-8 hidden md:block">
          <Cat darkMode={darkMode} />
        </div>
      </div>
    </div>
  )
}