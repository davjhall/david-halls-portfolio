import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/footer.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div className="footer d-flex justify-content-evenly">
    <a href="https://github.com/davjhall">
        <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://www.linkedin.com/in/d-hall2305/">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>    
  </div>
);

export default Footer;