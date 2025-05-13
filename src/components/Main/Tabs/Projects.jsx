import React from 'react'
import thoughtNest from '../../../assets/images/ThoughtNestProject.png'
import bookNGo from '../../../assets/images/BookNGoProject.png'
import magadha from '../../../assets/images/magadhaProject.png'

const Projects = () => {
  return (
    <div id='project'>
      <section id="project-top">
        <h1>My Recent Works</h1>
        <p>Here are a few projects that I've worked on recently</p>
      </section>
      <section id="projects">
        <div className='project'>
          <img src={thoughtNest} alt="" />
          <h3>ThoughtNest - The Blogging Website</h3>
          <h4>Got thoughts? Turn 'em into blogs. Draft, polish, and publish—all in one cozy little corner of the internet made just for your words</h4>
          <div className='links'>
            <a href="https://github.com/hemeswar9849/ThoughtNst.git">github</a>
            <a href="">website</a>
          </div>
        </div>
        <div className='project'>
          <img src={bookNGo} alt="" />
          <h3>BookNGo - The Travel Booking Website</h3>
          <h4>Your one-stop platform to book or cancel tickets for trains, buses, and flights—fast, reliable, and hassle-free travel planning.</h4>
          <div className='links'>
            <a href="https://github.com/Daemon-Targaryen-Caraxes/BookNGo.git">github</a>
            <a href="">website</a>
          </div>
        </div>
        <div className='project'>
          <img src={magadha} alt="" />
          <h3>Magadha - The Banking System</h3>
          <h4>A secure and seamless banking system to deposit and withdraw your money anytime, with complete peace of mind</h4>
          <div className='links'>
            <a href="https://github.com/jagadeeshpj1610/bankProject.git">github</a>
            <a href="">website</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects