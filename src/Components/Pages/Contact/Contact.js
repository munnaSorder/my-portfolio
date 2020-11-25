import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [userMessage, setUserMessage] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleBluer = (e) => {
    const eName = e.target.name;
    const eValue = e.target.value;
    const newObject = {...userMessage};

    if(eName === 'name'){
        newObject.name = eValue;
    }
    else if(eName === 'email'){
      newObject.email = eValue;
    }
    else if (eName === 'message'){
      newObject.message = eValue;
    }
    setUserMessage(newObject)
  }

  const handleFormSubmit = (e) => {
    console.log(userMessage);
    e.preventDefault();
  }

    return (
        <section className="container-fluid sdm-bg" id="contact_me">
        <div className="row">
          <div className="overlay"></div>
          <div className="col-sm-12 text-center text-capitalize">
            <h1>want to discuss a project?</h1>
            <h4>just drop a message below and i'll get in touch!</h4>
            <hr style={{width: '325px', backgroundColor: '#fbff00'}} className="border-control"/>
          </div>
        </div>
        <div className="row">
          <section className="col-sm-10 col-sm-offset-1">
            <div className="row text-center">
              <div className="col-sm-4 col-xs-12">
                <div className="block">
                  <i className="fa fa-envelope fa-2x"></i>
                  <h2 className="text-uppercase mt-2">Queries</h2>
                  <ul className="list-unstyled">
                    <li className="info-text">info@mywebsite.com</li>
                    <li className="info-text">munnaislam9925@gmail.com</li>
                  </ul>
                </div> 
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-phone fa-2x"></i>
                  <h2 className="text-uppercase mt-2">Call Us</h2>
                  <ul className="list-unstyled">
                    <li className="info-text">info@mywebsite.com</li>
                    <li className="info-text">+88 01791719824</li>
                  </ul>
                </div> 
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-home fa-2x"></i>
                  <h2 className="text-uppercase mt-2">Office</h2>
                  <ul className="list-unstyled">
                    <li className="info-text">info@mywebsite.com</li>
                    <li className="info-text">developermunnaa@gmail.com</li>
                  </ul>
                </div> 
              </div>
            </div>
            <form onSubmit={handleFormSubmit} className="row">
              <div className="col-sm-6 col-xs-12">
               <div className="form-group">
                 <label className="header-form-text" for="your_name">Your Name</label>
                 <input onBlur={handleBluer} name="name" type="text" className="form-control" id="your_name" placeholder="Write Your Name" />
               </div>
               <div className="form-group">
                <label className="header-form-text" for="your_email">Email</label>
                <input onBlur={handleBluer} name="email" type="email" className="form-control" id="your_email" placeholder="Enter Your Email" />
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <label className="header-form-text" for="your_message">Your Message</label>
                <textarea onBlur={handleBluer} name="message" className="form-control text-size-cn" rows="5" placeholder="Write Your Message"></textarea>
              </div>
            </div>
            <div className="col-sm-12 text-center margin-top-55 margin-bottom-55">
              <button type="submit" className="btn btn-contact">Send Message</button>
            </div>
          </form>

          <div className="text-center row">
            <div className="col-sm-12">
                <ul class="social-networks spin-icon">
                <li><a href="https://www.facebook.com/sorder.m/" target="_blank" class="icon-facebook">Facebook</a></li>
                <li><a href="https://twitter.com/munnasorder" target="_blank" class="icon-twitter">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/munnasorder/" target="_blank" class="icon-linkedin">LinkedIn</a></li>
                <li><a href="https://github.com/munnaSorder" target="_blank" class="icon-git">GitHub</a></li>
                <li><a href="https://www.instagram.com/munna_tunna/" target="_blank" class="icon-instagram">Instagram</a></li>
                </ul>
              <p className="text-center margin-top-30">
              &copy; 2020 Munna Islam. All rights reserved.
             </p>
           </div>
         </div>
       </section>
     </div>
   </section>
    );
};

export default Contact;