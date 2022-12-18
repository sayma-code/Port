import React from 'react'
import { BsFolderSymlink } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import {useState} from 'react';

export default function Work() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (
      <section className='work' id='work'>
        <div className='text1'>Something I have build</div>
        <div className='project'>
          <div className='project1'>
            <div className="workimage1">
            <div className={isHovering ? '' : 'workimage1-overlay'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}></div>
            </div>
          {/* <img className="workimage1" src="images/consultancy_front.JPG" alt="drink a coffee"/> */}
          <div className='worktext1'>
              <div className='wtext1'>
                CRM Web Application
              </div>
              <div  className='wtext2'>
                A Customer Relation Management(CRM) website for student <span className='pinktext'>counciling</span> company with <span className='pinktext'>admin, employee and student panel</span>.
              
              </div>
              <div  className='wtext3'>
                <p>Laravel<span>Bootstrap</span><span>Javascript</span></p>
              </div>
              <div  className='wtext4'>
                <label className="red">
                  <BsFolderSymlink />
                </label>
              </div>
            </div>
          </div>

          <div className='project2'>
          <div className='worktext2'>
              <div className='wtext1'>
                MCQ Web Application
              </div>
              <div  className='wtext2'>
                A website for giving quize. Add friends to take group exam, get personalized profile with target exams, build your CV.
              </div>
              <div  className='wtext3' >
                <p>Laravel<span>Bootstrap</span><span>Javascript</span></p>
              </div>
              <div  className='wtext4'>
                <label className="red">
                  <BsFolderSymlink />
                </label>
              </div>
          </div>
          <img className="workimage2" src="images/bcs.JPG" alt="drink a coffee"/>
          </div>


          <div className='project3'>
          <img className="workimage3" src="images/ss.JPG" alt="drink a coffee"/>
          <div className='worktext3'>
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
        </div>
      </section>
    )
  }