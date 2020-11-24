import React from 'react';
import ProjectList from './ProjectList';
import './Projects.css';
import TeamProject from './TeamProject';
const projectList = [
    {
        name: 'Creative Agency',
        photo: 'https://i.ibb.co/C5Qqhw3/Creative-Agency.png',
        github: 'https://github.com/munnaSorder/creative-agency-client',
        liveSite: 'https://festive-lalande-52b402.netlify.app/',
        description: 'A full-stack Services app You can do many types of courses from here. There is an option to give client reviews and many advantages',
        tools: ['JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
        about:['Order Option', 'Reviews', 'Delete & add Service', 'Admin Panel']
    },
    {
        name: 'Volunteer Network',
        photo: 'https://i.ibb.co/WpKvtQ8/Volunteer-Network.png',
        github: 'https://github.com/munnaSorder/volunteer-network',
        liveSite: 'https://kind-goldberg-1cc346.netlify.app/',
        description: 'A full-stack Services app Here you can register as a volunteer through which you can serve And you can play a big role in the world',
        tools: ['JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
        about:['Registration', 'Calender', 'Sign Up', 'Admin Panel']
    },
    {
        name: 'Travel Grue',
        photo: 'https://i.ibb.co/dtHrb8P/Travel-Grue.png',
        github: 'https://github.com/munnaSorder/travel-grue',
        liveSite: 'https://jovial-mcclintock-b0aef3.netlify.app/',
        description: 'It is a fully responsive web site and it is a service app. From here you can book various tourist place hotels in advance at a low cost.',
        tools: ['JavaScript', 'ReactJS', 'Bootstrap', 'Firebase'],
        about:['Booking Option', 'Log In', 'Router', 'Sign Up']
    },
    {
        name: 'Social Buddy',
        photo: 'https://i.ibb.co/74FvkVV/Social-Buddy.png',
        github: 'https://github.com/munnaSorder/social-buddy',
        liveSite: 'https://frosty-ride-a7aef2.netlify.app/',
        description: 'There is information given to many users here, if you want you can see the details of all of them in different ways. See their posts and comments. This project is done entirely with JavaScript.',
        tools: ['JavaScript', 'HTML', 'CSS'],
        about:['User Information', 'Comment', 'Photo']
    },
    
];
const teamProject = [
    {
        name: 'Apartment Hunt',
        photo: 'https://i.ibb.co/xqmC481/Apartment-Hunt.png',
        github: 'https://github.com/munnaSorder/apartment-hunt-server',
        liveSite: 'https://apartment-hunt-20cec.web.app/',
        description: 'This is a fully responsive site. Here you can find out with any house search. From here you can buy an apartment. Separate features are provided for admin and normal users.',
        tools: ['JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
        about:['Search', 'Booking', 'Add Service', 'Admin Panel']
    },
    {
        name: 'Athena Design',
        photo: 'https://i.ibb.co/NYb7jrD/Athena-Design.png',
        github: 'https://github.com/munnaSorder/athena-design',
        liveSite: 'https://sayemsarkar123.github.io/athena-design/?fbclid=IwAR1_V5PgoTuMdLvWlv2l-srSuIawwZZpt-bOvREWqZ8wtfzIpr-hBpdhZEY#',
        description: "This site is a fully responsive site. Its design can win the hearts of any user. It's just that we've completed the design part. We will make it a function in the next update",
        tools: ['HTML', 'CSS', 'Bootstrap'],
        about:['Awesome Design', 'Responsive']
    },
];
const Project = () => {
    return (
       <div className="container-fluid sdm-bg">
           <div className="overlay"></div>
           <div className="container">
               <div className="row mx-auto row-container">
                   {
                       projectList.map(data => <ProjectList data={data} />)
                   }
               </div>
               <div className="row mx-auto row-container">
                    <div className="team-container">
                    <h1 className="team-title">Team Project</h1>
                    <hr/>
                    </div>
                        {
                            teamProject.map(data => <TeamProject data={data} />)
                        }
               </div>
           </div>
       </div>   
    );
};

export default Project;