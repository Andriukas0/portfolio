import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
    const [ref, InView] = useInView({
      threshold: 0.5,
    });
  return(
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*foto*/}
        <motion.div
         variants={fadeIn('right', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
         </motion.div>
        {/*text*/}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1'
        >
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
          Hello, I'm Andrius from Lithuania, 
          and currently I am studying at Vilnius SMK.
          </h3>
          <p className='mb-6'>
            In the past three years, I've honed my programming skills in C, C++, Java, Python, and C# languages and 
            delved into game development with Unity Engine. 
            I also have experience in building computers and video editing using Vegas Pro. 
          </p>
          <p className='mb-6'>  
             I'm passionate about technology and eager to learn more, offering a diverse skill set that adds value to any team.
          </p>
          {/*sugebejimai*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={30} duration={3} />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Made
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={8} duration={3} />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of  <br />
                video editing
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={4} duration={3} />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Coding
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={20} duration={3} />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Happy <br />
                clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <a href="mailto:andrius.z2000@gmail.com">
            <button className='btn btn-lg'>Message me</button>
            </a>
            <a href='https://www.facebook.com/andrius.globys.5' className='text-gradient btn-link'>
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;


