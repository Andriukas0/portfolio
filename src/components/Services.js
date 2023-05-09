import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';


const services = [
  {
    name:'UI/UX design',
    descripton: 'Creating visually appealing interfaces for digital products such as websites and mobile applications. This involves designing wireframes and prototypes.',
    link: 'Learn more',
  },
  {
    name:'Developer',
    descripton: 'Creating, testing, and maintaining software programs and applications using programming languages such as Java, Python, or C++.',
    link: 'Learn more',
  },
  {
    name:'Video Editor',
    descripton: 'Editing video content for various platforms such as social media and websites.',
    link: 'Learn more',
  },
   {
    name:'Designer',
    descripton: 'Creating visual concepts and designs for various products such as logos, websites, packaging, and advertisements. ',
    link: 'Learn more',
  },
];

const Services = () => {
  return(
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text*/}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'
         >
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I am a reliable, hardworking, passionate programmer and designer. 
          </h3>
        </motion.div>
        {/*services*/}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}
          className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, descripton, link } = service;
                return( 
                  <div 
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='tex-[20px] tracking-wider font-primary 
                      font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-serif leading-tight'>
                        {descripton}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='https://www.linkedin.com/in/andrius-globys-03242a1aa/' 
                      className='btn w-9 h-9 mb-[42px] flex justify-center items-center'> 
                      <BsArrowUpRight/>
                      </a>
                      <a href='https://www.linkedin.com/in/andrius-globys-03242a1aa/'
                      className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
