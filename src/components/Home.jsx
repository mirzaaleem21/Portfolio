import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-16 bg-[#ffffff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#F24A72] sm:text-2xl font-semibold mb-5'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#113CFC] pb-4'>
          Mirza Aleem
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#09009B] pb-4'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#000000] py-4 font-semibold cmax-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m diving deep into web3 and blockchain development.
          I also have knack for designing beautiful User Interfaces.
        </p>
        <div>
          {/* <button className='text-[#F24A72] group font-semibold border-pink-600 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;