import React from 'react'
import './home.css';

import AboutMe from '../aboutme/AboutMe';
import Experience from '../experience/Experience';
import Projects from '../projects/Projects';

function Home() {
  return (
    <div className="background">
      <div>
        <p>Hi there!</p>
        <p>
          I’m <span>Celeste</span>, an aspiring software engineer with a goal to help the
          world.
        </p>
      </div>

      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default Home
