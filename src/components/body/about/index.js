import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import Typical from 'react-typical'
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Halo✋, Saya  
        <span className="info-name"> Taufiqur Rohman</span>.
         <br /> Lulusan Teknik Informatika UPN Veteran Jawa Timur, tertarik dengan banyak hal seperti:
         <p style={{ color: 'rgb(96, 96, 192)', fontSize: '40px'}}>
          <Typical
            loop={Infinity}
            wrapper="i"
            steps={[
              'Data analyst',
              2000,
              'Data Science',
              2000,
              'Machine Learning',
              2000,
              'Python Programming',
              2000,
              'Web Programming',
              2000
            ]}
          />
        </p>
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;