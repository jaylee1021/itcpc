'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../app/css/globals.css';
import '../app/css/navbar.css';
import { ListItemText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(true);
    };

    const menuOpen = (

        <ul className="navbar-nav">
            <hr></hr>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회소개</a>
                <ul className="dropdown-menu">
                    <li><a href='#'><MenuItem>환영인사</MenuItem></a></li>
                    <li><a href='#'><MenuItem>새가족</MenuItem></a></li>
                    <li><a href='#'><MenuItem>교회비전</MenuItem></a></li>
                    <li><a href='#'><MenuItem>교회연헉</MenuItem></a></li>
                    <li><a href='#'><MenuItem>예배안내/약도</MenuItem></a></li>
                    <li><a href='#'><MenuItem>섬기는분들</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">설교와 찬양</a>
                <ul className="dropdown-menu">
                    <li><a href='#'><MenuItem>설교말씀</MenuItem></a></li>
                    <li><a href='#'><MenuItem>찬양</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회학교</a>
                <ul className="dropdown-menu">
                    <li><a href='#'><MenuItem>영유아부 Promise Land</MenuItem></a></li>
                    <li><a href='#'><MenuItem>유년부 Team K5</MenuItem></a></li>
                    <li><a href='#'><MenuItem>중고등부 Matus United</MenuItem></a></li>
                    <li><a href='#'><MenuItem>교육 계시판</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">선교와 공동체</a>
                <ul className="dropdown-menu">
                    <li><a href='#'><MenuItem>선교회/구역</MenuItem></a></li>
                    <li><a href='#'><MenuItem>세계선교</MenuItem></a></li>
                    <li><a href='#'><MenuItem>평신도훈련</MenuItem></a></li>
                    <li><a href='#'><MenuItem>타코마한국학교</MenuItem></a></li>
                    <li><a href='#'><MenuItem>늘푸른대학</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회소식</a>
                <ul className="dropdown-menu">
                    <li><a href='#'><MenuItem>주보</MenuItem></a></li>
                    <li><a href='#'><MenuItem>주일스케치</MenuItem></a></li>
                    <li><a href='#'><MenuItem>자유게시판</MenuItem></a></li>
                    <li><a href='#'><MenuItem>캘린더</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">English Ministry</a>
                <ul className="dropdown-menu">
                    <li><a href='http://www.owtcpc.org' target='_blank'><MenuItem>Open Worship(열린예배)</MenuItem></a></li>
                    <li><a href='#'><MenuItem>English Ministry</MenuItem></a></li>
                    <li><a href='#'><MenuItem>EM 게시판 EM Board</MenuItem></a></li>
                </ul>
            </li>
            <hr />
        </ul>

    );

    const menuClosed = (<ul className="navbar-nav hidden">
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="./about" >교회소개</a>
            <ul className="dropdown-menu menus">
                <li><a href='#'><MenuItem>환영인사</MenuItem></a></li>
                <li><a href='#'><MenuItem>새가족</MenuItem></a></li>
                <li><a href='#'><MenuItem>교회비전</MenuItem></a></li>
                <li><a href='#'><MenuItem>교회연헉</MenuItem></a></li>
                <li><a href='#'><MenuItem>예배안내/약도</MenuItem></a></li>
                <li><a href='#'><MenuItem>섬기는분들</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">설교와 찬양</a>
            <ul className="dropdown-menu menus">
                <li><a href='#'><MenuItem>설교말씀</MenuItem></a></li>
                <li><a href='#'><MenuItem>찬양</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">교회학교</a>
            <ul className="dropdown-menu menus">
                <li><a href='#'><MenuItem>영유아부 Promise Land</MenuItem></a></li>
                <li><a href='#'><MenuItem>유년부 Team K5</MenuItem></a></li>
                <li><a href='#'><MenuItem>중고등부 Matus United</MenuItem></a></li>
                <li><a href='#'><MenuItem>교육 계시판</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">선교와 공동체</a>
            <ul className="dropdown-menu menus">
                <li><a href='#'><MenuItem>선교회/구역</MenuItem></a></li>
                <li><a href='#'><MenuItem>세계선교</MenuItem></a></li>
                <li><a href='#'><MenuItem>평신도훈련</MenuItem></a></li>
                <li><a href='#'><MenuItem>타코마한국학교</MenuItem></a></li>
                <li><a href='#'><MenuItem>늘푸른대학</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" href="#">교회소식</a>
            <ul className="dropdown-menu menus">
                <li><a href='#'><MenuItem>주보</MenuItem></a></li>
                <li><a href='#'><MenuItem>주일스케치</MenuItem></a></li>
                <li><a href='#'><MenuItem>자유게시판</MenuItem></a></li>
                <li><a href='#'><MenuItem>캘린더</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>

        <li className="nav-item dropdown dropdowns">
            <a className="nav-link dropwodn-toggle" href="#">English Ministry</a>

            <ul className="dropdown-menu menus drop-to-left" >
                <li><a href='http://www.owtcpc.org' target='_blank'><MenuItem>Open Worship(열린예배)</MenuItem></a></li>
                <li><a href='#'><MenuItem>English Ministry</MenuItem></a></li>
                <li><a href='#'><MenuItem>EM 게시판 EM Board</MenuItem></a></li>
            </ul>
        </li>
    </ul>);

    return (
        <nav className="navbar navbar-expand-lg sticky-top background">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src='/itcpc-logo.png'></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavpullwn" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                    <span className={`navbar-toggler-icon ${menuVisible ? 'open' : ''}`}></span>
                </button>
                <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`} id="navbarNavDropdown">
                    {menuVisible ? menuOpen : menuClosed}
                </div>
            </div>
        </nav>
    );
}
