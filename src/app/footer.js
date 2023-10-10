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
                    <div className='footer-logo-position'>
                        <a className="" href="#"><img className='logo-dark' src='/itcpc-logo-dark.png' /></a>
                    </div>
                    <div className='copywrite'>
                        Tacoma Central Presbyterian Church
                        <br />
                        8001 Pine St. S. Lakewood, WA 98499 / TEL: 253-589-8900, 6873, 6874
                        FAX: 253-589-6875 / E-mail : <a href='mailto: office@itcpc.org'>office@itcpc.org</a>
                        <br />
                        Copyright(c) 2015. Tacoma Central Presbyterian Church . All rights reserved.
                    </div >
                </div>
            </nav >
        </footer >
    );
}