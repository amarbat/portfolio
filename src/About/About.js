import React, {Component} from 'react';
import ImageLibrary from "./ImageLibrary";
import SkillsLibrary from "./Skills/SkillsLibrary";
import "./About.css";

class About extends Component {
  render () {
    return (
      <div className="About">
        <ImageLibrary/>
        <div className="even-content">
          <h1>About Amar</h1>
          <div className="left-align">
            <div className="educationAboutAmar">
              <h2>Education</h2>
              <section>
                George Mason University - Bachelor of Science<br/>
                <strong>Computer Science</strong> 2017 - 2019
              </section>
              <section>
                Norhern Virginia Community College - Associate of Science <br/>
                <strong>Computer Science</strong> 2014 - 2016
              </section>
            </div>
            <div className="workHistoryAboutAmar">
              <h2>Work History</h2>
              <section>
                <strong>CodeBroker LLC</strong><br/>
                Full Stack Java Engineer<br/>
                2019 - Present
              </section>

              <section>
                <strong>Il Canale</strong><br/>
                Server<br/>
                2014-2019
              </section>
            </div>
          </div>
        </div>
        <div className="skillsAboutAmar">
          <SkillsLibrary/>
        </div>
      </div>
    );
  }
}
export default About;