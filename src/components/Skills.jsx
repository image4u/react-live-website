import React from 'react'


import aws from '../assets/aws.png'
import css from '../assets/css.webp'
import github from '../assets/github.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import linux from '../assets/linux.webp'
import nodejs from '../assets/nodejs.png'
import reac1t from '../assets/reac1t.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div >
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the Technologies i've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={html} alt="HTML" />
            <p className='my-4'>HTML </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={css} alt="CSS" />
            <p className='my-4'>CSS </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={js} alt="JS" />
            <p className='my-4'>JS </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={github} alt="github" />
            <p className='my-4'>GITHUB </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={nodejs} alt="NODEJS" />
            <p className='my-4'>NODE.JS </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={reac1t} alt="
                REACT" />
            <p className='my-4'>REACT.JS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={linux} alt="LINUX" />
            <p className='my-4'>LINUX </p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={aws} alt="Aws" />
            <p className='my-4'>AWS </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;