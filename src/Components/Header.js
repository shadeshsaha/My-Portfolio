import React from "react";
import { MdFileDownload } from 'react-icons/md';

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap" className="py-3">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text" 
          data-aos="fade-right"
          data-aos-duration="2500">
          <h1 className="responsive-headline">
            <h1> {name}</h1>
          </h1>
          <h3>
            <span>{occupation}</span> <br/>{description}
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
          <div className="flex justify-center">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1v5H7lTHWuJ-aobR64bA7wIlBZTK-jc3u/view" className="bg-primary flex items-center space-x-3 text-white px-8 py-4 rounded-full text-2xl " style={{color:"white", fontSize:"15px"}}>
              <MdFileDownload/>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
