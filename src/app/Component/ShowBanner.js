'use client';
import { useEffect, useState } from 'react';
import { LoadingSpinningBubble } from './Loading';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import 'animate.css';
import '../css/page.css';
import '../css/gallery.css';

export default function ShowBanner() {

    const [banners, setBanners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/banners/show`)
            .then((response) => {
                setBanners(response.data.banners);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (isLoading) return (<LoadingSpinningBubble />);

    return (
        <Carousel>
            {banners.map((singleBanner, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img src={singleBanner.url} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}
