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
        setMenuVisible(!menuVisible);
    };

    const menuOpen = (

        <ul className="navbar-nav" style={{ backgroundColor: 'white' }}>
            <hr></hr>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" href='#' data-bs-toggle="dropdown" aria-expanded="false">교회소개</a>
                <ul className="dropdown-menu">
                    <li><a href='./about' className='menu_link'><MenuItem>환영인사</MenuItem></a></li>
                    <li><a href='./newComer' className='menu_link'><MenuItem>새가족</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>교회비전</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>교회연헉</MenuItem></a></li>
                    <li><a href='./serviceAndDirection' className='menu_link'><MenuItem>예배안내/약도</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">설교와 찬양</a>
                <ul className="dropdown-menu">
                    <li><a href='./sermons' className='menu_link'><MenuItem>설교말씀</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>찬양</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link" href="./education" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회학교</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">선교와 공동체</a>
                <ul className="dropdown-menu">
                    <li><a href='#' className='menu_link'><MenuItem>선교회/구역</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>세계선교</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>평신도훈련</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>타코마한국학교</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>늘푸른대학</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회소식</a>
                <ul className="dropdown-menu">
                    <li><a href='#' className='menu_link'><MenuItem>주보</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>주일스케치</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>자유게시판</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>캘린더</MenuItem></a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">English Ministry</a>
                <ul className="dropdown-menu">
                    <li><a href='http://www.owtcpc.org' target='_blank'><MenuItem>Open Worship(열린예배)</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>English Ministry</MenuItem></a></li>
                    <li><a href='#' className='menu_link'><MenuItem>EM 게시판 EM Board</MenuItem></a></li>
                </ul>
            </li>
            <hr />
        </ul>

    );

    const menuClosed = (<ul className="navbar-nav hidden">
        <li className="nav-item dropdown dropdowns">
            <button className="nav-link" style={{ fontWeight: 'bold' }} >교회소개</button>
            <ul className="dropdown-menu menus">
                <li><a href="./about" className='menu_link'><MenuItem>환영인사</MenuItem></a></li>
                <li><a href='./newComer' className='menu_link'><MenuItem>새가족</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>교회비전</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>교회연헉</MenuItem></a></li>
                <li><a href='./serviceAndDirection' className='menu_link'><MenuItem>예배안내/약도</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" style={{ fontWeight: 'bold' }} href="#">설교와 찬양</a>
            <ul className="dropdown-menu menus">
                <li><a href='./sermons' className='menu_link'><MenuItem>설교말씀</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>찬양</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" style={{ fontWeight: 'bold' }} href="./education">교회학교</a>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" style={{ fontWeight: 'bold' }} href="#">선교와 공동체</a>
            <ul className="dropdown-menu menus">
                <li><a href='#' className='menu_link'><MenuItem>선교회/구역</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>세계선교</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>평신도훈련</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>타코마한국학교</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>늘푸른대학</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <a className="nav-link" style={{ fontWeight: 'bold' }} href="#">교회소식</a>
            <ul className="dropdown-menu menus">
                <li><a href='#' className='menu_link'><MenuItem>주보</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>주일스케치</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>자유게시판</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>캘린더</MenuItem></a></li>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>

        <li className="nav-item dropdown dropdowns">
            <a className="nav-link dropwodn-toggle" style={{ fontWeight: 'bold' }} href="#">English Ministry</a>
            <ul className="dropdown-menu menus drop-to-left" >
                <li><a href='http://www.owtcpc.org' target='_blank' className='menu_link'><MenuItem>Open Worship(열린예배)</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>English Ministry</MenuItem></a></li>
                <li><a href='#' className='menu_link'><MenuItem>EM 게시판 EM Board</MenuItem></a></li>
            </ul>
        </li>
    </ul>);

    return (
        <div >
            <nav className="navbar navbar-expand-lg sticky-top" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src='/itcpc-logo.png' alt="Logo" /></a>
                    <button className="navbar-toggler" onClick={toggleMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon ${menuVisible ? 'open' : ''}`}></span>
                    </button>
                    <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`} id="navbarNavDropdown">
                        {menuVisible ? menuOpen : menuClosed}
                    </div>
                </div>
            </nav>
        </div>
    );
}


