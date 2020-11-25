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
const About = () => {
    return (
        <div>
            <section class="container" id="about_me">
                <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12">
                    <div class="row">
                    <div class="col-md-5 col-sm-4 col-xs-12">
                        <h2 style={{color:"orange"}}><i class="mr-2 fa fa-user"></i>About me</h2>
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
                        <h2 style={{color:"orange"}}><i class="mr-2 fa fa-building"></i>Technology</h2>
                        <div class="block">
                        <ul class="">
                            <li><h4>HTML</h4></li>
                            <li><h4>CSS</h4></li>
                            <li><h4>SASS</h4></li>
                            <li><h4>Bootstrap</h4></li>
                            <li><h4>JavaScript</h4></li>
                            <li><h4>JQuery</h4></li>
                            <li><h4>ReactJS</h4></li>
                            <li><h4>NodeJS</h4></li>
                            <li><h4>MongoDB</h4></li>
                            <li><h4>Express</h4></li>
                            <li><h4>FireBase</h4></li>
                        </ul>
                        </div>  
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-6">
                        <h2 style={{color:"orange"}}><i class="mr-2 fa fa-book"></i>Tools</h2>
                        <div class="block">
                        <ul class="">
                            <li><h4>Git</h4></li>
                            <li><h4>Webpack</h4></li>
                            <li><h4>VS Code</h4></li>
                            <li><h4>Extension</h4></li>
                            <li><h4>JavaScript</h4></li>
                            <li><h4>Chrome Dev Tool</h4></li>
                            <li><h4>Netlify</h4></li>
                            <li><h4>Heroku</h4></li>
                            <li><h4>Jasmine</h4></li>
                            <li><h4>Karma</h4></li>
                            <li><h4>Jenkins</h4></li>
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