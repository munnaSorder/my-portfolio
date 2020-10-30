import React from 'react';
import logo from '../../../image/logo.jpg'
import play from '../../../image/icon/play.png'
import './Middel.css'
import { Link } from 'react-router-dom';
const Middel = () => {
    return (
        <div className="container-fluid sdm-bg">
          <div className="overlay"></div>
            <img src={logo} class="margin-top-76 img-circle center-block profile_picture" alt="" />
          <h1 class="text-capitalize text-center">Munna Islam</h1>
          <h3 class="text-capitalize text-center">Front End Developer</h3>
          <h4 class="text-center font-style">I am a frontend web developer. I can provide clean code <br/> and pixel perfect design. I also make website more & more interactive <br/> with web animations.</h4>
          <hr/>
          <div class="text-center margin-bottom-135">
            <ul class="social-networks spin-icon">
              <li><a href="https://www.facebook.com/sorder.m/" target="_blank" class="icon-facebook">Facebook</a></li>
              <li><a href="https://twitter.com/munnasorder" target="_blank" class="icon-twitter">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/munnasorder/" target="_blank" class="icon-linkedin">LinkedIn</a></li>
              <li><a href="https://github.com/munnaSorder" target="_blank" class="icon-git">GitHub</a></li>
              <li><a href="https://www.instagram.com/munna_tunna/" target="_blank" class="icon-instagram">Instagram</a></li>
            </ul>
          </div>
        </div>
    );
};

export default Middel;