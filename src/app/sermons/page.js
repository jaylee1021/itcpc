'use client';
import React from 'react';
import GetAllSermon from '../Component/GetAllSermon';
import '../css/page.css';
import '../css/sermons.css';

export default function Sermons() {

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <img src='/sermon_banner.jpg' className='mainBannerImage' />
            </section>
            <br />
            <br />
            <div className='title' >
                <p className='title-style'>설교말씀</p>
                <p className='subtitle-style'>Sermon</p>
            </div>
            <br />
            <br />
            <div className='sermon_section_all'>
                <div className='session_section' >
                    <GetAllSermon />
                </div>
            </div>
        </>
    );
}