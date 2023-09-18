import React, { useState, useEffect } from 'react';
import Aarush from "../assets/Aarush.jpg";
import './About.css';

const About = () => {
  const [text, setText] = useState("");
  const [fullText] = useState(
    "A lot of my work is centered around combining concepts of hardware and software to create robust " +
    "and effective robotics applications that can showcase my skillset. From tinkering with an Arduino or an EV3 " +
    "robotics kit to running simulations on CARLA, I can display the impact my software has on a variety of platforms. " +
    "I am actively seeking any available opportunities to become a robotics software developer or embedded systems developer from January - April 2024. " +
    "To learn more about my work, you can also visit my portfolio which displays and outlines the technical details/thought processes " +
    "behind my projects. Thanks for stopping by!"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (index < fullText.length) {
      timer = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    } else {
      // Reset animation after 10 seconds
      timer = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 10000);
    }

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [index, text, fullText]);

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='text-4xl font-bold mb-8'>
          <span className='border-b-4 border-pink-600'>About</span>
        </div>

        <div className='text-center'>
          <div className='circular-image'>
            <img src={Aarush} alt='Bio' className='w-40 h-40 rounded-full' />
          </div>
        </div>

        <div className="about-section1 mt-16">
          <p className="text-white font-bold max-w-[700px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

/*
import React from 'react';
import Aarush from "../assets/Aarush.jpeg";
import SLAM from "../assets/underwater_slam.jpeg";
import './About.css'; // Ensure the CSS file path is correct

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pr-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
    
          <div className='sm:text-left text-4xl font-bold'>
            <p>Bio</p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='circular-image'>
              <img src={Aarush} alt='Bio' className='max-w-xs' />
            </div>
          </div>
          <div>
            <p>A lot of my work is centered around combining concepts of hardware and software to create robust
                and effective robotics applications that can showcase my skillset...</p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
  
          <div className='sm:text-left text-4xl font-bold'>
            <p>Goals</p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='circular-image'>
              <img src={SLAM} alt='Goals' className='max-w-xs' />
            </div>
          </div>
          <div>
            <p>My overall goal is to harness technology to make people's lives easier. Currently I am exploring SLAM and Navigation robotics systems...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React from 'react';


import Aarush from "../assets/Aarush.jpeg";
import Cancer from "../assets/cancer.jpg";
import SLAM from "../assets/underwater_slam.jpeg";
import './About.css'; // Ensure the CSS file path is correct

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pr-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
  
          <div className='sm:text-left text-4xl font-bold'>
            <p>Bio</p>
          </div>
          <div>
            <p>A lot of my work is centered around combining concepts of hardware and software to create robust
                and effective robotics applications that can showcase my skillset...</p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='circular-image'>
              <img src={Aarush} alt='Bio' className='max-w-xs' />
            </div>
          </div>

          <div className='sm:text-left text-4xl font-bold'>
            <p>Goals</p>
          </div>
          <div>
            <p>My overall goal is to harness technology to make people's lives easier. Currently I am exploring SLAM and Navigation robotics systems...</p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='circular-image'>
              <img src={SLAM} alt='Goals' className='max-w-xs' />
            </div>
          </div>

          <div className='sm:text-left text-4xl font-bold'>
            <p>Hobbies</p>
          </div>
          <div>
            <p>At my core, I am somebody who loves to help other people...</p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='circular-image'>
              <img src={Cancer} alt='Hobbies' className='max-w-xs' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
*/


/*
import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
         
          <div className='sm:text-right text-4xl font-bold'>
            <p>Bio</p>
          </div>
          <div>
            <p>A lot of my work is centered around combining concepts of hardware and software to create robust
                and effective robotics applications that can showcase my skillset. From tinkering with an arduino or an ev3
                robotics kit to running sumulations on CARLA, I can display the impact my software has on a variety of platforms. I am actively seeking any available opportunities to become a robotics software developer or embedded systems developer from January - April 2024.
                To learn more about my work, you can also visit my portfolio which displays and outlines the technical details/thought processes
                behind my projects. Thanks for stopping by!</p>
          </div>

          
          <div className='sm:text-right text-4xl font-bold'>
            <p>Goals</p>
          </div>
          <div>
            <p>My overall goal is to harness technology to make people's lives easier. Currently I am exploring SLAM and Navigation robotics systems and the potential they possess to revolutionize our world. I have also started diving into embedded systems and am tinkering with micro controllers such as STM32 and ESP2866. My current goal is to implement advanced robotics systems powered by ROS onto powerful microcontrollers such as the STM32 and bring my ideas to fruition. My goal in the future is to explore underwater SLAM and navigation.</p>
          </div>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hobbies</p>
          </div>
          <div>
            <p>At my core, I am somebody who loves to help other people. This doesn't just apply to my technical side but also my humanitarian side. I am a strong supporter of cancer research and have been a member of my local cancer run commitee for the past 3 years. I have also joined my university's UW Cancer foundation to help raise money for cancer research and fund raise events to spread awareness of this growing threat. Another aspect of my personality is my love for the gym. I started working out consistently recently and it has been a big boost to my mental health. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
*/
