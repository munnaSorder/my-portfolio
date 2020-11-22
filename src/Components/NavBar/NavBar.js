import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import resume from '../../ArifurRahmanMunnaResume.pdf'


const NavBar = () => {
    return (
     <div className="container-fluid sdm-bg">
       <ul class="nav nav-pills menu-center margin-top-30 scroll-nav">
            <li role="presentation" ><Link to="/" className="text-white items">Portfolio</Link></li>
            <li role="presentation" ><Link to="/blog" className="text-white items">Blog</Link></li>
            <li role="presentation" ><Link to="/project" className="text-white items">Projects</Link></li>
            <li role="presentation" ><a  href={resume} download="ArifurRahmanMunnaResume.pdf">Resume</a></li>
            <li role="presentation" ><Link to="/about" className="text-white items">About</Link></li>
            <li role="presentation" ><Link to="/contact" className="text-white items">Contact</Link></li>
            <li role="presentation" ><Link to="/intro" className="play-btn"></Link></li>
          </ul>
     </div>
    );
};

export default NavBar;