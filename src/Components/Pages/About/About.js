import React from 'react';
import resume from '../../../ArifurRahmanMunnaResume.pdf';
import './About.css';
import ServiceList from './ServiceList';
const provideService = [
    {
        icon: 'fa fa-code fa-3x mt-2',
        name: 'Web Development',
        about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        icon: 'fa fa-code fa-3x mt-2',
        name: 'Web Design',
        about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        icon: 'fa fa-magic fa-3x mt-2',
        name: 'UI/UX Design',
        about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        icon: 'fa fa-camera fa-3x mt-2',
        name: 'Photography',
        about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        icon: 'fa fa-lightbulb-o fa-3x mt-2',
        name: 'Brand Identity',
        about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        icon: 'fa fa-user-secret fa-3x mt-2',
        name: 'analytics',
        about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    }
]
const technology = ['HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'JQuery', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Firebase'];
const tools = ['Git', 'Webpack', 'VS Code', 'Extension', 'Chrome Dev Tool', 'Netlify', 'Heroku', 'Jasmine', 'Karma', 'Jenkins', 'JIRA']
const About = () => {
    return (
        <div>
            <section class="container" id="about_me">
                <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12">
                    <div class="row">
                    <div class="col-md-5 col-sm-4 col-xs-12">
                        <h2 style={{color:"orange"}}><i style={{marginRight:"8px"}} class="fa fa-user"></i>About me</h2>
                        <div class="block">
                        <p>
                        I am a frontend web developer. I can provide clean code
                        and pixel perfect design. I also make website more & more interactive
                        with web animations.
                        </p>
                        <p>
                            You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!
                        </p> 
                        <a className="btn download-btn" href={resume} download="ArifurRahmanMunnaResume.pdf">Download Resume</a>                
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-6">
                        <h2 style={{color:"orange"}}><i style={{marginRight:"5px"}} className="fa fa-building"></i>Technology</h2>
                        <div className="block">
                        <ul class="">
                           {
                               technology.map(technology => <li>
                                   <h4>{technology}</h4>
                               </li>)
                           }
                        </ul>
                        </div>  
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-6">
                        <h2 style={{color:"orange"}}><i style={{marginRight:"8px"}} className="fa fa-book"></i>Tools</h2>
                        <div class="block">
                        <ul class="">
                            {
                                tools.map(tools => <li>
                                    <h4>{tools}</h4>
                                </li>)
                            }
                        </ul>
                        </div> 
                    </div>
                    
                    </div>
                </div>
                </div>
         </section>
        <section class="container-fluid sdm-bg" id="expertness">
                <div class="row">
                <div class="overlay"></div>
                <div class="col-sm-12">
                    <h3 class="text-center"><i class="fa fa-bookmark"></i>What I Do</h3>
                </div>
                </div>
                <section class="container">
                <div class="row">
                   {
                       provideService.map(data => <ServiceList data={data} />)
                   }
                </div>
                </section>
        </section>
    </div>
    );
};

export default About;