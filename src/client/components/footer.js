import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const Footer = () => {

    return (
        <footer>
            <div className="wrap">
                <div className="clearFloat">
                    <div className="left">
                        <div className="copyright">
                            &copy; 2019 NATION MEDIA. All Rights Reserved.
                        </div>
                    </div>
                    <div className="right">
                        <div className="footer_nav">
                            <ul>
                                <li>
                                    <Link to="/policies/terms">Terms and conditions</Link>
                                </li>
                                <li>
                                    <Link to="/policies/privacy">Privacy policy</Link>
                                </li>
                                <li>
                                    <Link to="/policies/cookies">Cookies policy</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="social_icons">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/raj.ratn" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/raj-ratn-pranesh-382155172" target="_blank">
                                        <i className="fa fa-linkedin-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Rajratnpranesh" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
