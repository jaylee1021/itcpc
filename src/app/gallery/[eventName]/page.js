'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import GetEventPhotos from '@/app/Component/GetEventPhotos';
import '../../css/page.css';
import '../../css/gallery.css';

export const runtime = 'edge';

export default function Gallery() {

    const { eventName } = useParams();

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <img src='/gallery_page.jpg' className='mainBannerImage' />
            </section>
            <div>
                <div className='gallery_section'>
                    <GetEventPhotos eventName={eventName} />
                </div>
            </div>
        </>
    );
}