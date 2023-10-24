'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import '../css/page.css';
import '../css/sermons.css';
import GetAllSermon from '../Component/GetAllSermon';

export default function Sermons() {

    const [sermon, setSermon] = useState({});
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState('');




    // useEffect(() => {
    //     const fetchSermon = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons`);
    //             console.log('sermons', response.data.sermons);
    //             if (response.data.sermons.session === 'First') {
    //                 setSession('1부');
    //             } else if (response.data.sermons.session === 'Second') {
    //                 setSession('2부');
    //             } else if (response.data.sermons.session === 'Third') {
    //                 setSession('3부');
    //             }
    //             setSermon(response.data.sermons);
    //             setLoading(false);
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchSermon();
    // }, []);

    // if (loading) return <div>Loading...</div>;

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