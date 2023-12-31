import React from 'react';
import GetAllSermon from '../Component/GetAllSermon';
import '../css/page.css';
import '../css/sermons.css';

export default function Sermons() {

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <img src='/2023_santuary_back_drop.jpg' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>설교말씀</p>
                <p className='subtitle-style'>Sermon</p>
            </div>
            <div className='sermon_section_all'>
                <div className='session_section' >
                    <GetAllSermon />
                </div>
            </div>
        </>
    );
}