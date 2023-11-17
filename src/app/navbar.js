'use client';
import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import '../app/css/globals.css';
import '../app/css/navbar.css';

export default function Navbar() {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
        require('bootstrap/dist/css/bootstrap.min.css');
    }, []);

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuOpen = (

        <ul className="navbar-nav" style={{ backgroundColor: 'white' }}>
            <hr></hr>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" href='#' data-bs-toggle="dropdown" aria-expanded="false">교회소개</Link>
                <ul className="dropdown-menu">
                    <Link href='../about' className='menu_link'><MenuItem>환영인사</MenuItem></Link>
                    <Link href='../newComer' className='menu_link'><MenuItem>새가족</MenuItem></Link>
                    <Link href='../vision' className='menu_link'><MenuItem>교회비전</MenuItem></Link>
                    <Link href='../history' className='menu_link'><MenuItem>교회연혁</MenuItem></Link>
                    <Link href='../serviceAndDirection' className='menu_link'><MenuItem>예배안내/약도</MenuItem></Link>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link" href="../sermons" aria-expanded="false">설교말씀</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link" href="../ministry" aria-expanded="false">미니스트리</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">선교와 공동체</Link>
                <ul className="dropdown-menu">
                    <Link href='../missionGroup' className='menu_link'><MenuItem>선교회</MenuItem></Link>
                    <Link href='#' className='menu_link'><MenuItem>세계선교</MenuItem></Link>
                    <Link href='#' className='menu_link'><MenuItem>평신도훈련</MenuItem></Link>
                    <Link href='https://www.tacomakoreanschool.org/' className='menu_link'><MenuItem>타코마한국학교</MenuItem></Link>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">교회소식</Link>
                <ul className="dropdown-menu">
                    <Link href='../bulletins' className='menu_link'><MenuItem>주보</MenuItem></Link>
                    <Link href='../galleryAll' className='menu_link'><MenuItem>주일스케치</MenuItem></Link>
                    <Link href='../board' className='menu_link'><MenuItem>게시판</MenuItem></Link>
                    <Link href='../calendar' className='menu_link'><MenuItem>캘린더</MenuItem></Link>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">English Ministry</Link>
                <ul className="dropdown-menu">
                    <Link href='http://www.owtcpc.org' target='_blank'><MenuItem>Open Worship(열린예배)</MenuItem></Link>
                    <Link href='#' className='menu_link'><MenuItem>English Ministry</MenuItem></Link>
                    <Link href='#' className='menu_link'><MenuItem>EM 게시판 EM Board</MenuItem></Link>
                </ul>
            </li>
            <hr />
        </ul>

    );

    const menuClosed = (<ul className="navbar-nav hidden">
        <li className="nav-item dropdown dropdowns">
            <button className="nav-link" style={{ fontWeight: 'bold' }} >교회소개</button>
            <ul className="dropdown-menu menus">
                <Link href="../about" className='menu_link'><MenuItem>환영인사</MenuItem></Link>
                <Link href='../newComer' className='menu_link'><MenuItem>새가족</MenuItem></Link>
                <Link href='../vision' className='menu_link'><MenuItem>교회비전</MenuItem></Link>
                <Link href='../history' className='menu_link'><MenuItem>교회연혁</MenuItem></Link>
                <Link href='../serviceAndDirection' className='menu_link'><MenuItem>예배안내/약도</MenuItem></Link>
            </ul>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <Link className="nav-link" style={{ fontWeight: 'bold' }} href="../sermons">설교말씀</Link>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <Link className="nav-link" style={{ fontWeight: 'bold' }} href="../ministry">미니스트리</Link>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <Link className="nav-link" style={{ fontWeight: 'bold' }} href="#">선교와 공동체</Link>
            <ul className="dropdown-menu menus">
                <Link href='../missionGroup' className='menu_link'><MenuItem>선교회</MenuItem></Link>
                <Link href='#' className='menu_link'><MenuItem>세계선교</MenuItem></Link>
                <Link href='#' className='menu_link'><MenuItem>평신도훈련</MenuItem></Link>
                <Link href='https://www.tacomakoreanschool.org/' className='menu_link'><MenuItem>타코마한국학교</MenuItem></Link>
            </ul>
        </li>
        <li>
            <a className="nav-link">|</a>
        </li>
        <li className="nav-item dropdown dropdowns">
            <Link className="nav-link" style={{ fontWeight: 'bold' }} href="#">교회소식</Link>
            <ul className="dropdown-menu menus">
                <Link href='../bulletins' className='menu_link'><MenuItem>주보</MenuItem></Link>
                <Link href='../galleryAll' className='menu_link'><MenuItem>주일스케치</MenuItem></Link>
                <Link href='../board' className='menu_link'><MenuItem>게시판</MenuItem></Link>
                <Link href='../calendar' className='menu_link'><MenuItem>캘린더</MenuItem></Link>
            </ul>
        </li>
        <li>
            <a className="nav-link" href="#">|</a>
        </li>

        <li className="nav-item dropdown dropdowns">
            <a className="nav-link dropwodn-toggle" style={{ fontWeight: 'bold' }} >English Ministry</a>
            <ul className="dropdown-menu menus drop-to-left" >
                <Link href='http://www.owtcpc.org' target='_blank' className='menu_link'><MenuItem>Open Worship(열린예배)</MenuItem></Link>
                <Link href='#' className='menu_link'><MenuItem>English Ministry</MenuItem></Link>
                <Link href='#' className='menu_link'><MenuItem>EM 게시판 EM Board</MenuItem></Link>
            </ul>
        </li>
    </ul>);

    return (
        <div className='nav_center'>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ maxWidth: '1522px' }}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" href="/"><img src='/itcpc-logo.png' alt="Logo" /></Link>
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


