'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import '../css/page.css';
import '../css/sermons.css';
import GetAllSermon from '../Component/GetAllSermon';

export default function Sermons() {

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section >
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