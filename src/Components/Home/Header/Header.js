import React from 'react';
import Particles from 'react-particles-js';
import Footer from '../../Footer/Footer';
import Carousels from '../Home/Carousel/Carousel';
import Middel from '../Middel/Middel';
import './Header.css';

const Header = () => {
    const bubblesPreset = {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
              }
          }
      }

    return (
        <div style={{animation: 'fade 0.3s linear', zIndex: '1'}} className="h-100 d-flex flex-column justify-content-center text-center position-relative">
            <Middel></Middel>
            <Carousels></Carousels>
            <Footer></Footer>
            <div style={{top: '0', left: '0', width: '100%', height: '100%', zIndex: '-1'}} className="position-absolute">
            <Particles params={bubblesPreset} />
            </div>
        </div>
    );
};

export default Header;