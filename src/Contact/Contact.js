import React, { Component } from 'react';
import "./Contact.css";
import pic from "./Pic.jpg";
import LinkedInIcon from "./LINKEDINICON.png";
import GitHubLogo from "./GITHUBLOGO.png";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      
        <div>
          <img src={pic} height="450px" alt="AmarBatPic"/>
        </div>

        <div className="ContactContent">
          <div className="name">
            Amar Bat
          </div>
          <div>
            amarbat@gmail.com
          </div>
          <div>
            +1 (703) 485 7504
          </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amar-bat-37490594">
              <img src={LinkedInIcon} alt="LinkedInIcon" height="30px"/>
            </a>
          </div>
          <div>
            <img src={GitHubLogo} alt="githubLogo" height="30px" />
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;