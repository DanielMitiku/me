import React from 'react';
import ProjectList from './ProjectList';
import Contact from './Contact';
import About from './About';


function MainBar() {
  return (
    <div>
      <ProjectList />
      <About />
      <Contact />
    </div>
  );
}

export default MainBar;
