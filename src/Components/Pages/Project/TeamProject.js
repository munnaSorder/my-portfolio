import React from 'react';

const TeamProject = (props) => {
    const {name, photo, github, liveSite, description, tools, about} = props.data;
    return (
        <div className="col-lg-6 col-md-6 mb-4  mx-auto col-container">
            <div className="card mt-5">
                <div>
                    <img width="100%" src={photo} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        {
                            tools.map(item => <a href="#" className="tools-item">{item}</a>)
                        }
                        {
                            about.map(item =>
                                <div className="about-card">
                                    <ul>
                                        <li>{item}</li>
                                    </ul>
                                </div>
                            )
                        }
                        <a  target="_blank" href={github}><img className="linkIcon" width="35px" src="https://i.ibb.co/ckLFVKn/github.png" alt=""/></a>
                        <a  target="_blank" href={liveSite}><img className="linkIcon" width="35px" align="right" src="https://i.ibb.co/g4Jq2Sj/icons8-website-50.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamProject;