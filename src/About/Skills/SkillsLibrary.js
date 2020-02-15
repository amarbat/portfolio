import React, {Component} from 'react';
import HTML5Logo from "./HTML5.png"
import CSS3Logo from "./CSS3.png";
import Java from "./JAVA.png"
import JavaScript from "./JAVASCRIPT.png";
import NodeJS from "./NODEJS.png";
import ReactLogo from "./REACT.png";
import Rest from "./REST.png";
import MongoDB from "./MONGO.png";
import Skill from "./Skill.js";
import "./SkillsLibrary.css"

class SkillsLibrary extends Component {
  render () {
    return (
      <div>
        <h3>Skills</h3>
        <div className="SkillsLibrary">
          <Skill src={HTML5Logo} alt="Html5Logo"/>
          <Skill src={CSS3Logo} alt="CSS3Logo"/>
          <Skill src={Java} alt="JavaLogo"/>
          <Skill src={JavaScript} alt="JavaScriptLogo"/>
          <Skill src={NodeJS} alt="NodeJSLogo"/>
          <Skill src={ReactLogo} alt="ReactLogo"/>
          <Skill src={Rest} alt="RestLogo"/>
          <Skill src={MongoDB} alt="MongoDBLogo"/>
        </div>
      </div>
    );
  }
}

export default SkillsLibrary;