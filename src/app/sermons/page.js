'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import '../css/page.css';

export default function Sermons() {

    const [sermon, setSermon] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSermon = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons`);
                console.log('sermons', response.data.sermons);
                setSermon(response.data.sermons);
                setLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchSermon();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section >
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <br />
            <br />
            <div className='title' >
                <p className='title-style'>설교</p>
                <p className='subtitle-style'>Sermons</p>
            </div>
            <br />
            <br />
            {sermon.map((singleSermon) => (
                <table>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>설교자</th>
                            <th>구분</th>
                            <th>제목</th>
                            <th>본문</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{singleSermon.date.split('T')[0]}</td>
                            <td>{singleSermon.preacher}</td>
                            <td>{singleSermon.session}</td>
                            <td>{singleSermon.title}</td>
                            <td>{singleSermon.passage}</td>
                        </tr>
                    </tbody>
                </table>

            ))}
        </>
    );
}