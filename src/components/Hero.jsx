import React,{useEffect} from 'react'
import './Hero.css'
import {motion,useAnimation} from 'framer-motion'
import Img from '../assets/img3.svg'
import Img2 from '../assets/img2.svg'
import { useInView } from 'react-intersection-observer';






const Hero = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    // Start the animation when the component enters the viewport
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div>
      <nav>
  <label htmlFor="name" id="logo-text">
    <a href="/">Portfolio</a>
  </label>
  <ul>
      <li><a href="https://www.linkedin.com/in/arpan-chowdhury-9b546b203/" class="active"><i class="fa-brands fa-linkedin"></i></a></li>
      <li><a href="/"> <i class="fa-brands fa-twitter"></i></a></li>
      <li><a href="https://github.com/Arpan1908"> <i class="fa-brands fa-github"></i></a></li>
      
    </ul>
 
  <div id="account-container">
    <a href="https://drive.google.com/file/d/1FGd8uRvyJvbV6oRwMIekzrJvFQlkIKvN/view?usp=sharing">Resume</a>
    
  </div>
</nav>
{/* <header>
  <div id="header-container">
    <div id="header-page-title">
      <h1>
        Hello, I am <br /> Arpan Chowdhury
      </h1>
      <p>
      Full Stack Web Developer
        <br /> Feel Free to contact me
      </p>
      <div id="header-subscribe-form">
        <input type="email" name="" id="" placeholder="Enter your email" />
        <input type="submit" defaultValue="Subscribe" />
      </div>
    </div>
    <div id="header-page-image">
      <img
        src={Img}
        alt=""
      />
    </div>
  </div>
</header> */}
 <header>
      <motion.div
        id="header-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        <div id="header-page-title">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hello, I am <br /> Arpan Chowdhury
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Full Stack Web Developer
            <br /> Feel Free to contact me
          </motion.p>
          <div id="header-subscribe-form">
            <motion.input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.input
              type="submit"
              value="Subscribe"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1, delay: 2 }}
            />
          </div>
        </div>
        <div id="header-page-image">
          <motion.img
            src={Img}
            alt=""
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </header>
<section className="awesome-feature">
  <div id="feature-text">
    <h1>About Me</h1>
  
  </div>
</section>
<motion.section id="creativity-features"
  ref={ref}
  animate={controls}
  initial="hidden"
  variants={animationVariants}
>
  <div id="creativity-features-image">
    <img
      src={Img2}
      alt=""
    />
  </div>
  <div id="creativity-features-text">
    <h1>What I Do?</h1>
    <h3>
    Turning Digital Dreams into Reality <br />
    One Line of Code at a Time
    </h3>
    <p>
    I firmly believe that the web is an ever-evolving canvas where innovation meets functionality. My goal is to create seamless, efficient, and interactive web solutions that not only meet but exceed your expectations. I'm dedicated to writing clean, scalable code that powers exceptional online experiences.


    </p>
  
  </div>
</motion.section>


    </div>
  )
}

export default Hero