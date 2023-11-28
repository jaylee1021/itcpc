'use client';
import React, { useEffect, useState } from 'react';
import { LoadingLine } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function NewSermons() {

    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [fileUploaded, setFileUploaded] = useState('');
    const [banners, setBanners] = useState([]);


    const handleFileOpen = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = () => {
        if (file) {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', `${process.env.NEXT_PUBLIC_BANNER_PRESET}`);
            fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setUrl(data.secure_url);
                    setFile('');
                    setIsLoading(false);
                    setFileUploaded(<p className='file_uploaded'>파일이 업로드 되었습니다.</p>);
                })
                .catch((error) => console.log('Error', error));
        } else {
            alert('업로드할 파일을 먼저 선택해주세요.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_banner = { url, title };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/banners/new`, new_banner)
            .then(response => {
                alert('새로운 배너 등록에 "성공"했습니다.');
                window.location.reload();
            })
            .catch(error => console.log('===> Error creating a banner', error));
    };

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/banners/`)
            .then((response) => {
                setBanners(response.data.banners);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleShow = (e, singleBanner) => {
        e.preventDefault();
        const bannerId = singleBanner._id;
        if (singleBanner.show === true) {
            const bannerShow = { show: false };
            axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/banners/${bannerId}`, bannerShow)
                .then((response) => {
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            const bannerShow = { show: true };
            axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/banners/${bannerId}`, bannerShow)
                .then((response) => {
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    };

    const handleDelete = (e) => {
        e.preventDefault();
        const bannerId = e.target.value;
        axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/banners/${bannerId}`)
            .then((response) => {
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className='title' >
                <p className='title-style'>배너등록</p>
                <p className='subtitle-style'>Register Banner</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <div className='thumbnails_uploader'>
                        <input className='thumbnail_file' type="file" id="snapImage" name="snapImage" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} />
                        {file && isLoading ? <LoadingLine /> : fileUploaded}
                        <button type='button' onClick={handleImageUpload} className='new_sermon_buttons'>Upload Banner</button>
                    </div>
                    <br />
                    <input type='text' name='title' value={title} onChange={handleTitle} required />
                    <p>Banner title</p>
                    <div className='new_sermon_button_section'>
                        <button type='submit' className='new_sermon_buttons'>
                            등록
                        </button>
                    </div>
                </form >
            </div >
            <div className='title' >
                <p className='title-style'>배너선택</p>
                <p className='subtitle-style'>Choose Banner</p>
            </div>
            <div className='new_sermon_section'>
                <form className='new_sermon_form' style={{ width: '440px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>
                            Show
                        </p>
                        <p>
                            Title
                        </p>
                        <p style={{ padding: '0 10px' }}>
                            Delete
                        </p>
                    </div>
                    <br />
                    {banners.map((singleBanner) => {
                        return (
                            <div key={singleBanner._id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <input style={{ width: '30px' }} type='checkbox' name='url' value={singleBanner._id}
                                    checked={singleBanner.show === true ? true : false} onChange={(e) => handleShow(e, singleBanner)} required />
                                <p style={{ marginBottom: '0' }}>{singleBanner.title}</p>
                                <button value={singleBanner._id} onClick={handleDelete} className='clear_form_button' style={{ padding: '0 10px' }}>Delete</button>
                            </div>
                        );
                    })}
                </form >
            </div >
        </div>
    );
};