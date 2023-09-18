import React from 'react';

import Arduino from '../assets/Arduino.png';
import C_plus_plus from '../assets/C++.png';
import Django from '../assets/Django.png';
import ReactImg from '../assets/React.png';
import JavaScript from '../assets/javascript.png';
import OpenCV from '../assets/OpenCV.png';
import Python from '../assets/Python.png';
import Java from '../assets/Java_logo.png';
import ROS from '../assets/Ros_logo.png';

const Skills = () => {
  const skillsData = [
    { src: ROS, alt: 'ROS icon', width: '50%', height: '30%' },
    { src: Arduino, alt: 'Arduino icon', width: '40%', height: '40%' },
    { src: Django, alt: 'Django icon', width: '70%', height: '110px' },
    { src: ReactImg, alt: 'React icon', width: '50%', height: '50%' },
    { src: OpenCV, alt: 'OpenCV icon', width: '90%', height: '90%' },
    { src: Python, alt: 'Python icon', width: '40%', height: '40%' },
    { src: C_plus_plus, alt: 'C++ icon', width: '40%', height: '40%' },
    { src: Java, alt: 'Java icon', width: '70%', height: '60%' },
    { src: JavaScript, alt: 'JavaScript icon', width: '30%', height: '40%' },
  ];

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skillsData.map((item, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkpurple', // Add background color here
              }}
            >
              <img
                style={{ width: item.width, height: item.height }}
                src={item.src}
                alt={item.alt}
              />
              <p className='my-4' style={{ color: 'transparent' }}>{item.alt.replace(' icon', '')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;


/*
import React from 'react';
import Arduino from '../assets/Arduino.png';
import C_plus_plus from '../assets/C++.png';
import Django from '../assets/Django.png';
import ReactImg from '../assets/React.png';
import JavaScript from '../assets/JavaScript.png';
import OpenCV from '../assets/OpenCV.png';
import Python from '../assets/Python.png';
import Tailwind from '../assets/Java_logo.png';
import ROS from '../assets/Ros_logo.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
  
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={Arduino}
              alt="Arduino icon"
            />
            <p className='my-4'>Arduino</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={C_plus_plus}
              alt="C++ icon"
            />
            <p className='my-4'>C++</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={Django}
              alt="Django icon"
            />
            <p className='my-4'>Django</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={ReactImg}
              alt="React icon"
            />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '60%', maxHeight: '20%', width: '60%', height: '20%' }}
              src={ROS}
              alt="ROS icon"
            />
            <p className='my-4'>ROS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={Python}
              alt="Python icon"
            />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={OpenCV}
              alt="OpenCV icon"
            />
            <p className='my-4'>OpenCV</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ maxWidth: '50%', maxHeight: '50%', width: '50%', height: '50%' }}
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className='my-4'>JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
*/
