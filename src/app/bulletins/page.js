'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingCircle } from '../Component/Loading';
import '../css/page.css';

export default function Bulletin() {

    const [bulletin, setBulletin] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/bulletins`)
            .then((response) => {
                setBulletin(response.data.bulletins);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <title>주보</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>주보</p>
                <p className='subtitle-style'>Bulletin</p>
            </div>
            <section>
                {bulletin.map((singleBulletin) => {
                    return (
                        <div key={singleBulletin._id} className='bulletin_section'>
                            <div className='bulletin_title'>
                                <p>{singleBulletin.title}</p>
                            </div>
                            <div className='bulletin_date'>
                                <p>{singleBulletin.date}</p>
                            </div>
                            <div className='bulletin_description'>

                                <object data={singleBulletin.content} type="application/pdf" width="100%" height="1000px">
                                    <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                                </object>
                            </div>

                        </div>
                    );
                })}
            </section>
        </>
    );
}