'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingLine } from './Loading';

export default function SnapImages({ snap }) {

    const [snapUrl, setSnapUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [imageUploaded, setImageUploaded] = useState(false);

    useEffect(() => {
        if (!imageUploaded) {
            const formData = new FormData();
            formData.append('file', snap);
            formData.append('upload_preset', 'itcpc_files');
            fetch('https://api.cloudinary.com/v1_1/instaversecloud/image/upload/', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setSnapUrl(data.secure_url);
                    console.log(data.secure_url);
                    setImageUploaded(true);
                    setIsLoading(false);
                })
                .catch((error) => console.log('Error', error));
        };
    }, [snap, imageUploaded]);

    if (isLoading) return (<LoadingLine />);

    return (
        <>
            {snapUrl}
        </>
    );
}