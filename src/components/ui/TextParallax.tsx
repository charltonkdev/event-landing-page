'use client'
import styles from './text.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function TextParallax({ 
  text1 = "Summertime Music Festival 2024",
  text2 = "Summertime Music Festival 2024",
  speed = 0.05, // Control the speed of the scrolling animation
  endScroll = window.innerHeight, // Control the end of the scroll animation
}) {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: endScroll,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-800px",
    })
    requestAnimationFrame(animate);
  }, [endScroll]);

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent});
    gsap.set(secondText.current, {xPercent: xPercent});
    requestAnimationFrame(animate);
    xPercent += speed * direction;
  }

  return (
    <div className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>{text1}</p>
          <p ref={secondText}>{text2}</p>
        </div>
      </div>
    </div>
  )
}
