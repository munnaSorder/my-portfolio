import React from 'react';
import { Carousel } from 'react-bootstrap';
import project1 from '../../../image/projects/Creative-Agency.png'
import project2 from '../../../image/projects/Creative-Agency2.png'
import project3 from '../../../image/projects/Travel-Grue.png'
import project4 from '../../../image/projects/Volunteer-Network.png'
import './Projects.css'
const Project = () => {
    return (
       
        <div className="container-fluid sdm-bg ">
        <div className="row m-auto container">
            <div className="col-md-4 blog-container">
                 <div class="card card-container">
                     <img class="card-img-top" height="300px" src={project2} alt="blog" />
                     <div class="card-body">
                         <h1 class="card-title text-dark">Creative Agency</h1>
                         <p className="card-text text-dark">
                         A full-stack Services app You can do many types of courses from here. There is an option to give client reviews and many advantages
                         </p>
                         <a style={{marginRight:'200px'}} href="https://festive-lalande-52b402.netlify.app/user/review" target="_blank" class="btn btn-primary">Live Site</a>
                         <a href="https://github.com/munnaSorder/creative-agency-client" target="_blank" class="btn btn-primary">Git Hub</a>
                     </div>
                 </div>
            </div>
            <div className="col-md-4 blog-container">
                 <div class="card card-container">
                         <img class="card-img-top" height="300px" src={project3} alt="blog" />
                         <div class="card-body">
                             <h1 class="card-title text-dark">Volunteer Network</h1>
                             <p class="card-text text-dark">A full-stack Services app Here you can register as a volunteer through which you can serve And you can play a big role in the world.</p>
                             <a style={{marginRight:'200px'}} href="https://kind-goldberg-1cc346.netlify.app/" target="_blank" class="btn btn-primary">Live Site</a>
                             <a href="https://github.com/munnaSorder/volunteer-network" target="_blank" class="btn btn-primary">Git Hub</a>
                         </div>
                 </div>
            </div>
            <div className="col-md-4 blog-container">
                 <div class="card card-container">
                             <img class="card-img-top" height="300px" src={project4} alt="blog" />
                             <div class="card-body">
                                 <h1 class="card-title text-dark">Travel Grue</h1>
                                 <p class="card-text text-dark">It is a fully responsive responsive web site and it is a service app. From here you can book various tourist place hotels in advance at a low cost </p>
                                 <a style={{marginRight:'200px'}} href="https://jovial-mcclintock-b0aef3.netlify.app/" class="btn btn-primary" target="_blank">Live Site</a>
                                 <a href="https://github.com/munnaSorder/travel-grue" class="btn btn-primary" target="_blank">Git Hub</a>
                             </div>
                         </div>
                 </div>
        </div>
     </div>
              
    );
};

export default Project;