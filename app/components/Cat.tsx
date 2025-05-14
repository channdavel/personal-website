'use client';

import { useEffect, useRef } from 'react';
import '../styles/cat.css';

interface CatProps {
  darkMode: boolean;
}

export default function Cat({ darkMode }: CatProps) {
  const catRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const tongueRef = useRef<HTMLDivElement>(null);
  const eyeRef = useRef<NodeListOf<HTMLDivElement> | null>(null);

  useEffect(() => {
    if (catRef.current) {
      const cat = catRef.current;
      const heart = heartRef.current;
      const tongue = tongueRef.current;
      eyeRef.current = cat.querySelectorAll('.eye');

      const heartFunc = () => {
        tongue?.classList.add("ta");
        heart?.classList.add("ha");
        eyeRef.current?.[0]?.classList.add("ea");
        eyeRef.current?.[1]?.classList.add("ea");

        setTimeout(() => {
          heart?.classList.remove("ha");
          tongue?.classList.remove("ta");
          eyeRef.current?.[0]?.classList.remove("ea");
          eyeRef.current?.[1]?.classList.remove("ea");
        }, 1000);
      };

      cat.addEventListener("click", heartFunc);
      
      return () => {
        cat.removeEventListener("click", heartFunc);
      };
    }
  }, []);

  return (
    <div className="main">
      <div 
        className={`cat ${darkMode ? 'dark-cat' : ''}`} 
        id="cat" 
        ref={catRef}
        style={
          darkMode ? 
          {
            '--text-color': 'var(--text-color)',
            '--bg-color': 'var(--bg-color)'
          } as React.CSSProperties : 
          {
            '--text-color': 'var(--text-color)',
            '--bg-color': 'var(--bg-color)'
          } as React.CSSProperties
        }
      >
        <div className="eye-l eye"></div>
        <div className="eye-r eye"></div>
            
        <div className="cheeks-l cheeks"></div>
        <div className="cheeks-r cheeks"></div>
    
        <div className="motches">
          <div className="motche"></div>
          <div className="motche"></div>
          <div className="motche"></div>
          <div className="motche"></div>
        </div>
        
        <div className="ear-l ear"></div>
        <div className="ear-r ear"></div>
            
        <div className="mouth">
          <div className="nose"></div>
          <div className="tongue" id="tongue" ref={tongueRef}></div>
          <div className="circle-l circle"></div>
          <div className="circle-r circle"></div>
        </div>
                
        <div className="heart" id="heart" ref={heartRef}></div>
      </div>
    </div>
  );
} 