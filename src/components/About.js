import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/*foto*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/*text*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">Hello, I'm Andrius from Lithuania.</h3>
            <p className="mb-6">
              I have a passion for building computers and, I have gained a lot
              of experience in fixing and creating computer systems from
              scratch. I have a strong background in video editing and I've been
              fortunate enough to work on some exciting projects using Vegas
              Pro.
            </p>
            <p className="mb-6">
              Over the past three years, I have honed my programming skills and
              worked with programming languages like C, C++, Java, python, and
              C#. I'm passionate about technology and always eager to learn
              more. I believe my diverse skill set and curiosity makes me a
              valuable addition to any team.
            </p>
            {/*sugebejimai*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Made
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  video editing
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Coding
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={20} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Happy <br />
                  clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a href="mailto:andrius.z2000@gmail.com">
                <button className="btn btn-sm">Message me</button>
              </a>
              <a
                href="https://www.facebook.com/andrius.globys.5"
                className="text-gradient btn-link"
              >
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
