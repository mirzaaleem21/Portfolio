import React from 'react'
import { FiLinkedin } from"react-icons/fi";
import {FaGithub} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
const Footer = () => {
  return (
    
    <footer className="py-6 dark:bg-gray-800 dark:text-gray-50 footer">
    <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
      
      <div className="grid justify-center pt-6 lg:justify-between">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2022 Mirza Abdul Aleem</span>
       
        </div>
        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
          <a rel="noopener noreferrer" href="mailto: typemirza@gmail.com" target={"_blank"} title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-white-400 dark:text-gray-900">
          <HiOutlineMail size={"1.5rem"}> </HiOutlineMail>

          </a>
          {/* <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
            </svg>
          </a> */}
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mirza-aleem-512634126/" title="Twitter" target={"_blank"} className="flex items-center justify-center w-15 h-15 rounded-full dark:bg-violet-400 dark:text-gray-900">
           <FiLinkedin size={"1.5rem"}> </FiLinkedin>
          </a>
          <a rel="noopener noreferrer" href="https://github.com/mirzaaleem21" target={"_blank"} title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
           <FaGithub size={"1.5rem"}></FaGithub>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer