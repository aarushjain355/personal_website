import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import Photo from "../assets/Aarush.jpeg";

const Home = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "I'm a second year mechatronics engineering student at the University of Waterloo passionate about building software applications for robotics systems. Feel Free to check out some of my projects!"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    } else {
      // Reset animation
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000); // Adjust the delay before starting again (in milliseconds)
    }
  }, [index, text, fullText]);
 

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex items-center'>
          <div>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
              Aarush Jain
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
              I'm a Robotics Engineer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              {text}
            </p>
            
          </div>
          <div className='ml-12'> {/* Increased margin from ml-8 to ml-12 */}
            <img
              src={Photo} // Assuming Photo contains the path to your image
              alt='Aarush Jain'
              className='w-40 h-40 rounded-full' // Adjusted image size
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


/*
import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import Photo from "../assets/Aarush.jpeg";

const Home = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "I'm a second year mechatronics engineering student at the University of Waterloo passionate about building software applications for robotics systems. Feel Free to check out some of my projects!"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    } else {
      // Reset animation
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000); // Adjust the delay before starting again (in milliseconds)
    }
  }, [index, text, fullText]);
 

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Aarush Jain
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Robotics Engineer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          {text}
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


 useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);
*/