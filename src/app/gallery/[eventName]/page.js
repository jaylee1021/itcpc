'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { LoadingSpinningBubble } from '@/app/Component/Loading';
import GetEventPhotos from '@/app/Component/GetEventPhotos';
import axios from 'axios';
import '../../css/page.css';
import '../../css/gallery.css';

export default function Gallery() {

    const { eventName } = useParams();
    const [thumbnail, setThumbnail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/galleryThumbnails/${eventName}`)
            .then((response) => {
                setThumbnail(response.data.galleryThumbnails[0]);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (isLoading) return <LoadingSpinningBubble />;
    return (
        <>
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <img src='/gallery_page.jpg' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>{thumbnail.eventKorName}</p>
                {/* <p className='subtitle-style'>Gallery</p> */}
            </div>
            <div>
                <div className='gallery_section'>
                    <GetEventPhotos eventName={eventName} />
                </div>
            </div>
        </>
    );
}