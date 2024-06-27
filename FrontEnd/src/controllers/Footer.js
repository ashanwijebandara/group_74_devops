import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div >
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-content text-center">
              <div className="footer-logo mb-4">
                <h2>LP GAS</h2>
              </div>
              <div className="social">
                <a href="https://www.facebook.com" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://whatsapp.com" className="social-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://linkdin.com" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-contact">
              <div className="contact-item d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>  gascenterhapugala@gmail.com</span>
              </div>
              <div className="contact-item d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+94-11-030-0989</span>
              </div>
              <div className="contact-item d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+94-81-101-6908</span>
              </div>
              <div className="contact-item d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span>110, Hapugala, Galle</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <div className="footer-copyright text-center">
              &copy; {new Date().getFullYear()} Hapugala Gas App. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

 
export default Footer

