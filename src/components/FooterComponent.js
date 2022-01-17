import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
function Footer(props) {
    return (
        <footer className="site-footer bg-dark mt-4" id="footer">
            <div className="container-fluid bg-dark text-white border-top pt-1">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Habiliti</h5>
                        <p>A simple Habit Tracker</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Useful Links</h5>
                        <ul className="list-unstyled text-white">
                            <li><Link to='/faqs'>FAQs</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/features'>Features</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Media</h5>
                        <ul className="list-unstyled text-white">
                            <li>
                                <a href="#!" className="link-light"><FontAwesomeIcon icon={faFacebook} size='lg' /> Facebook</a>
                            </li>
                            <li>
                                <a href="#!" className="link-light"><FontAwesomeIcon icon={faTwitter} size='lg' /> Twitter</a>
                            </li>
                            <li>
                                <a href="#!" className="link-light"><FontAwesomeIcon icon={faLinkedin} size='lg' /> Linkedin</a>
                            </li>
                            <li>
                                <a href="#!" className="link-light"><FontAwesomeIcon icon={faGithub} size='lg' /> GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 bg-dark text-white border-top">© 2022 Copyright: Habiliti</div>
        </footer>
    );
}

export default Footer;