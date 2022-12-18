import React from 'react'
import { FiFolder } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
// Font awesome pixel sizes relative to the multiplier. 
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px
export default function OtherProject() {
    return (
      <section className='other'>
        <div className='other-text'>Other Projects</div>
        <div className="row">
        <div className='card other-project'>
            <div className='card-header other-project-header'>
            <span><FiFolder size={42}/></span><span><BsGithub  size={28}/><FiExternalLink size={28}/></span>
            <div className='card-header other-project-header1'>Cleaning Robot</div>
            </div>
            <div className='card-body other-project-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam
            </div>
            <div className='card-footer other-project-body'>
            <span>C++</span><span>XML</span><span>ROS</span><span>Gazebo</span>
            </div>
        </div>
        <div className='card other-project'>
            <div className='card-header other-project-header'>
            <span><FiFolder size={42}/></span><span><BsGithub  size={28}/><FiExternalLink size={28}/></span>
            <div className='card-header other-project-header1'>Image to App</div>
            </div>
            <div className='card-body other-project-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam
            </div>
            <div className='card-footer other-project-body'>
            <span>Flutter</span><span>Python</span><span>SQLite</span>
            </div>
        </div>
        <div className='card other-project'>
            <div className='card-header other-project-header'>
            <span><FiFolder size={42}/></span><span><BsGithub  size={28}/><FiExternalLink size={28}/></span>
            </div>
            <div className='card-header other-project-header1'>To-do App</div>
            <div className='card-body other-project-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam
            </div>
            <div className='card-footer other-project-body'>
            <span>Sprimgboot</span><span>Html</span><span>PostgreSQL</span>
            </div>
        </div>
        </div>
      </section>
    )
  }