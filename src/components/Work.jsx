import React, { useState, useEffect } from 'react';
import { data } from "../data/data.js";
import '../styles/work.css';

const Work = () => {
    const projectData = data;
    const [selectedProject, setSelectedProject] = useState(null);

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (selectedProject && index < selectedProject.description.length) {
            setTimeout(() => {
                setText(text + selectedProject.description[index]);
                setIndex(index + 1);
            }, 15);
        }
    }, [index, text, selectedProject]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setText(""); // Reset text for new animation
        setIndex(0); // Reset index for new animation
    }

    const handleCloseDescription = () => {
        setSelectedProject(null);
        setText(""); // Reset text after closing description
        setIndex(0); // Reset index after closing description
    }

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Projects
                    </p>
                    <p className='py-6'>Check out some of my recent Projects! If you would like to learn more in depth about them, please visit my portfolio!</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projectData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleProjectClick(item)}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                            }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                            flex justify-center text-center items-center mx-auto content-div "
                        >
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font-bold text-darkBlue tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className={`bg-white p-4 rounded-md mt-8 project-description open description-writing`}>
                        <h2 style={{ color: 'green', marginBottom: '2rem' }} className="text-2xl font-bold">
                            {selectedProject.name}
                        </h2>
                        <p style={{ color: 'blue' }}>{text}</p>
                        <button onClick={handleCloseDescription} style={{ backgroundColor: '#008000', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginTop: '2rem' }}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Work;


/*

import React, { useState } from 'react';
import { data } from "../data/data.js";
import '../styles/work.css';

const Work = () => {
    const projectData = data;
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    }

    const handleCloseDescription = () => {
        setSelectedProject(null);
    }

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent Projects! If you would like to learn more in depth about them, please visit my portfolio!</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projectData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleProjectClick(item)}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                            }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                            flex justify-center text-center items-center mx-auto content-div "
                        >
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className={`bg-white p-4 rounded-md mt-8 project-description open description-writing`}>
                        <h2 style={{ color: 'green', marginBottom: '2rem' }} className="text-2xl font-bold">
                            {selectedProject.name}
                        </h2>
                        <p style={{ color: 'blue' }}>{selectedProject.description}</p>
                        <button onClick={handleCloseDescription} style={{ backgroundColor: '#008000', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginTop: '2rem' }}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Work;

*/
