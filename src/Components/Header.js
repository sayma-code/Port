import React from 'react'
import { BsGithub } from "react-icons/bs";
export default function Header() {
    return (
      <>
      <section className='head'>
        <div className='text1'>Hello, I am</div>
        <div className='text2'>Sayma Obaida</div>
        <div className='text3'>I build what interest me.</div>
        <div className='text4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        
      </section>
      <div className='contact-side'>
        <BsGithub  size={28}/>
        </div>
      </>
    )
  }
  
  