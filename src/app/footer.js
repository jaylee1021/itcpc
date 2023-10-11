'use client';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../app/css/globals.css';
import '../app/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {


    return (
        <footer>
            <nav className="navbar sticky-bottom footer-style" >
                <div className='footer-group'>
                    <div className='footer-section'>
                        <p>
                            253-589-8990
                            <br />
                        </p>
                        <p>
                            <a href='mailto:office@itcpc.org'>office@itcpc.org</a>
                        </p>
                        <p>
                            10002 59th Ave SW
                            <br />
                            Lakewood, WA 98499
                        </p>
                        <p>
                            <a href='https://www.facebook.com/itgroup.tcpc' target='_blank'>
                                <img src='/facebook.png' className='social-icon' />
                            </a>

                            <a href='https://www.youtube.com/@TCPCTV' target='_blank'>
                                <img src='/youtube.png' className='social-icon' />
                            </a>
                        </p>
                        <p>
                            Copyright(c) 2023.
                            <br />
                            Tacoma Central Presbyterian Church.
                            <br />
                            All rights reserved.
                        </p>
                    </div>
                    <div className='footer-section'>
                        <p>
                            About
                        </p>
                    </div>
                    <div className='footer-section'>
                    <p>
                            Sermon
                        </p>
                    </div>
                    <div className='footer-section'>
                    <p>
                            교회학교
                        </p>
                    </div>
                </div>
            </nav >
        </footer >
    );
}