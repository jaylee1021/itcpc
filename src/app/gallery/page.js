'use client';
import React from 'react';
import '../css/page.css';
import '../css/gallery.css';
import GetAllPhotos from '../Component/GetAllPhotos';

export default function Sermons() {

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section >
                <img src='/gallery_page.jpg' className='mainBannerImage' />
            </section>
            <br />
            <br />
            <div className='title' >
                <p className='title-style'>갤러리</p>
                <p className='subtitle-style'>Gallery</p>
            </div>
            <br />
            <br />
            <div>
                <div className='gallery_section'>
                    <GetAllPhotos />
                </div>
            </div>
        </>
    );
}