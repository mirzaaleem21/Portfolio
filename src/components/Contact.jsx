import React from 'react'
import { MdEmojiPeople } from 'react-icons/md';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[##ffff] flex justify-center items-center p-4 contact'>
        <form method='POST' action="https://getform.io/f/a3c89fc2-fe86-42f9-a2b5-f2fa70a51ab5" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Contact</p>
                <p className='py-4'>Submit the form below or shoot me an email - typemirza@gmail.com</p>
            </div>
            <input className='bg-[#ffff] p-3 m-3 border-2 border-indigo-800' type="text" placeholder='Name' name='name'  />
            <input className='bg-[#ffff] p-3 m-3 border-2 border-indigo-800' type="email" placeholder='Email' name='Email'  />
            <textarea className='bg-[#e3e9f9] p-3  m-3 border-2 border-indigo-800'  name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#F24A72] group font-semibold border-pink-600 border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white'>
            Let's Collaborate
            <span className='group-hover:rotate-90 duration-300'>
              <MdEmojiPeople className='ml-3 ' />
            </span>
          </button>
        </form>
    </div>
  )
}

export default Contact