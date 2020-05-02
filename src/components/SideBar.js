import React from 'react';

function SideBar() {
  return (
    <>
      <div className="sideDiv my-5">
        <h3>Hi, I am </h3>
        <h1>Daniel Wesego</h1>
        <div className="text-center">
          <h3 className="mt-4">Full Stack Developer</h3>
          <p>Ruby on Rails | React | Redux</p>
          <br />
          <a target="_blank" rel="noopener noreferrer" href="mailto: wedanielmitiku@gmail.com"><i className="fas fa-envelope fa-2x mx-2" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-wesego/"><i className="fab fa-linkedin fa-2x mx-2" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielMitiku"><i className="fab fa-github fa-2x mx-2" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/daniel_wesego"><i className="fab fa-twitter fa-2x mx-2" /></a>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default SideBar;
