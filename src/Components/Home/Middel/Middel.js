import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.jpg';
import './Middel.css';
const Middel = () => {
    return (
        <div>
            <section className="container-fluid sdm-bg">
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
          </section>
          <section class="container" id="hire_me"> 
            <div class="row">
              <div class="col-sm-12 text-center">
                <h1>Need Any Help?</h1>
                <h3><i class="fa fa-thumbs-up fa-2x mr-3"></i> I am available for freelance hire</h3>

                <nav class="cl-effect-2">
                  <Link to="/contact" className="btn  btn-hire">Hire Me</Link>
                </nav>
              </div>
            </div>
          </section>
      </div>
    );
};

export default Middel;