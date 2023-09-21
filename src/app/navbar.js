'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../app/css/globals.css';
import React from 'react';
import '../app/css/navbar.css';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuOpen = (

        <ul className="navbar-nav">
            <hr></hr>
            <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회소개</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">설교와 찬양</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회학교</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">선교와 공동체</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회소식</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">English Ministry</a>
            </li>
        </ul>
    );

    const menuClosed = (<ul className="navbar-nav hidden">
        <li className="nav-item dropdown dropdowns">
            <a class="nav-link" href="./about" >교회소개</a>
            <ul class="dropdown-menu menus">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">설교와 찬양</a>
            <ul class="dropdown-menu menus">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">교회학교</a>
            <ul class="dropdown-menu menus">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">선교와 공동체</a>
            <ul class="dropdown-menu menus">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">교회소식</a>
            <ul class="dropdown-menu menus">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">English Ministry</a>
        </li>
    </ul>);

    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src='../public/itcpc-logo.png'></img></a>
                <button className="navbar-toggler d-lg-none" type="button" onClick={toggleMenu}>
                    <span className={`navbar-toggler-icon ${menuVisible ? 'open' : ''}`}></span>
                </button>
                <div className={`navbar-collapse ${menuVisible ? 'show' : ''}`}>
                    {menuVisible ? menuOpen : menuClosed}
                </div>
            </div>
        </nav>
    );
}
