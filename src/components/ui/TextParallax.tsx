'use client';
import styles from './text.module.css';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface TextParallaxProps {
  text1?: string;
  text2?: string;
  speed?: number;
  endScroll?: number; // Updated to optional
}

const TextParallax: React.FC<TextParallaxProps> = ({ 
  text1 = "Summertime Music Festival 2024",
  text2 = "Summertime Music Festival 2024",
  speed = 0.05,
  endScroll: propEndScroll
}) => {

  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  const [endScroll, setEndScroll] = useState<number>(0); // Local state for endScroll
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the endScroll value based on window height or provided prop
      setEndScroll(propEndScroll || window.innerHeight);

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          end: propEndScroll || window.innerHeight, // Use state value here
          onUpdate: e => direction = e.direction * -1,
        },
        x: "-800px",
      });

      requestAnimationFrame(animate);
    }
  }, [propEndScroll]);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += speed * direction;
  };

  return (
    <div className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>{text1}</p>
          <p ref={secondText}>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default TextParallax;
