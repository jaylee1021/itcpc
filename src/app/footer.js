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
    const linkedinTooltip = (props) => (
        <Tooltip id="tooltip-id" {...props}>
            LinkedIn
        </Tooltip>
    );

    const githubTooltip = (props) => (
        <Tooltip id="tooltip-id" {...props}>
            GitHub
        </Tooltip>
    );

    const emailTooltip = (props) => (
        <Tooltip id="tooltip-id" {...props}>
            Email
        </Tooltip>
    );

    return (
        <nav class="navbar sticky-bottom bg-body-tertiary" style={{ position: 'absolute', bottom: '0', width: '100%' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">© 2023 Jay Lee</a>
                <div >
                    <ul className="navbar-nav footer-space">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/jayjonglee" target='_blank' >
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={linkedinTooltip}>
                                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                                </OverlayTrigger>

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/jaylee1021" target='_blank'>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={githubTooltip}>
                                    <FontAwesomeIcon icon={faSquareGithub} size='lg' />
                                </OverlayTrigger>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:leejayjong@gmail.com">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={emailTooltip}>
                                    <FontAwesomeIcon icon={faSquareEnvelope} size='lg' />
                                </OverlayTrigger>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}