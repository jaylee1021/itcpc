'use client';
import React, { useState } from 'react';
import { LoadingLine } from './Loading';

export default function SnapImage({ snap }) {
    console.log(snap);
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState('');
    const [imageUploaded, setImageUploaded] = useState(false);


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
                setImageUrl(data.secure_url);
                console.log(data.secure_url);
                setIsLoading(false);
                setImageUploaded(true);
            })
            .catch((error) => console.log('Error', error));
    };

    if (isLoading) return (<LoadingLine />);

    return (
        <>
            {imageUrl}
        </>
    );
}