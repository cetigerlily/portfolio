import React from 'react'
import './home.css';
import AboutMePanel from '../panels/AboutMePanel';
import ExperiencePanel from '../panels/ExperiencePanel';
import ProjectsPanel from '../panels/ProjectsPanel';

function Home() {
  return (
    <div className='homeContainer'>
        <div className='introductionContainer'>
          <h1>Hi there!</h1>
          <p>
            I’m <span className='highlight'>Celeste</span>, an aspiring software engineer with a goal to help the
            world.
          </p>
        </div>
        
        <div className='panelContainer'>
          <AboutMePanel />
          <ExperiencePanel />
          <ProjectsPanel />
        </div>
        
    </div>
    
  );
}

export default Home
