import React from 'react'
import { BsFolderSymlink } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
export default function Work() {
    return (
      <section className='work'>
        <div className='text1'>Something I have build</div>
        <div className='project1'>
        <img className="workimage1" src="images/consultancy_front.JPG" alt="drink a coffee"/>
        <div className='worktext1'>
            <div className='wtext1'>
              <h4>CRM Web Application</h4>
            </div>
            <div  className='wtext2'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div  className='wtext3'>
              Duis aute irure dolor in reprehenderit
            </div>
            <div  className='wtext4'>
              <label className="red">
                <AiFillGithub />
              </label>
              <label className="red">
                <BsFolderSymlink />
              </label>
            </div>
          </div>
        </div>

        <div className='project2'>
        <img className="workimage2" src="images/consultancy_front.JPG" alt="drink a coffee"/>
        <div className='worktext2'>
            <div className='wtext1'>
              <h4>CRM Web Application</h4>
            </div>
            <div  className='wtext2'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div  className='wtext3'>
              Duis aute irure dolor in reprehenderit
            </div>
            <div  className='wtext4'>
              <label className="red">
                <AiFillGithub />
              </label>
              <label className="red">
                <BsFolderSymlink />
              </label>
            </div>
          </div>
        </div>
      </section>
    )
  }