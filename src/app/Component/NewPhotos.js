'use client';
import React, { useState } from 'react';
import { LoadingLine } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function NewPhotos() {
    const [thumbnail, setThumbnail] = useState('');
    const [photos, setPhotos] = useState([]);
    const [eventEngName, setEventEngName] = useState('');
    const [eventKorName, setEventKorName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [file, setFile] = useState('');
    const [thumbUploaded, setThumbUploaded] = useState('');
    const [photosUploaded, setPhotosUploaded] = useState('');
    const [allPhotosUploaded, setAllPhotosUploaded] = useState('');

    const handleFileOpen = (e) => {
        if (e.target.files.length > 1) {
            console.log(e.target.files);
            setFile(e.target.files);
        } else {
            setFile(e.target.files[0]);
        }
    };

    const handleEventEngName = (e) => {
        setEventEngName(e.target.value);
    };

    const handleEventKorName = (e) => {
        setEventKorName(e.target.value);
    };

    const handleEventDate = (e) => {
        setEventDate(e.target.value);
    };

    const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
    const [isPhotosLoading, setIsPhotosLoading] = useState(false);
    const [isAllPhotosUploaded, setIsAllPhotosUploaded] = useState(false);

    const handleThumbnailUpload = () => {
        if (file) {
            setIsThumbnailLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', `${process.env.NEXT_PUBLIC_PHOTO_PRESET}`);
            fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setThumbnail(data.secure_url);
                    setFile('');
                    setIsThumbnailLoading(false);
                    setThumbUploaded(<p className='file_uploaded'>썸네일이 업로드 되었습니다.</p>);
                })
                .catch((error) => console.log('Error', error));
        } else {
            alert('업로드할 파일을 먼저 선택해주세요.');
        }
    };

    const handlePhotosUpload = async () => {
        if (file) {
            if (file.length >= 2) {
                setIsPhotosLoading(true);
                const allPhotoUrl = [];
                for (let i = 0; i < file.length; i++) {
                    let files = file[i];
                    const formData = new FormData();
                    formData.append('file', files);
                    formData.append('upload_preset', `${process.env.NEXT_PUBLIC_PHOTO_PRESET}`);
                    try {
                        const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                            method: 'POST',
                            body: formData,
                        });
                        const data = await response.json();
                        allPhotoUrl.push(data.secure_url);
                    }
                    catch { ((error) => console.log('Error', error)); };
                }
                setPhotos(allPhotoUrl);
                setFile('');
                setIsPhotosLoading(false);
                setPhotosUploaded(<p className='file_uploaded'>사진들이 업로드 되었습니다.</p>);
            } else {
                alert('사진을 두장 이상 선택해주세요.');
            }
        } else {
            alert('업로드할 파일을 먼저 선택해주세요.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (thumbnail) {
            const new_thumbnail = { url: thumbnail, eventEngName, eventKorName, eventDate };
            axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/galleryThumbnails/new`, new_thumbnail)
                .then(response => {
                    if (photos.length > 0) {
                        setIsAllPhotosUploaded(true);
                        for (let i = 0; i < photos.length; i++) {
                            const new_photos = { url: photos[i], event: eventEngName };
                            axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/photos/new`, new_photos)
                                .then(response => {
                                    console.log('response', response);
                                })
                                .catch(error => console.log('===> Error creating a sermon', error));
                        }
                        setIsAllPhotosUploaded(false);
                        alert('새로운 갤러리 등록에 "성공"했습니다.');
                        // setAllPhotosUploaded(<p className='file_uploaded'>겔러리가 업로드 되었습니다.</p>);
                        window.location.reload();
                    } else {
                        alert('사진들을 먼저 업로드해주세요.');
                    }
                })
                .catch(error => console.log('===> Error creating a sermon', error));
        } else {
            alert('썸네일을 먼저 업로드해주세요.');
        }
    };

    return (
        <div>
            <div className='title' >
                <p className='title-style'>갤러리등록</p>
                <p className='subtitle-style'>Register Gallery</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <div className='thumbnails_uploader'>
                        <input className='thumbnail_file' type="file" id="thumbnail" name="thumbnail" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} />
                        {file && isThumbnailLoading ? <LoadingLine /> : thumbUploaded}
                        <button type='button' onClick={handleThumbnailUpload} className='new_sermon_buttons'>Upload Thumbnail</button>
                    </div>
                    <br />
                    <input type='text' name='eventEngName' value={eventEngName} onChange={handleEventEngName} required />
                    <p>Event English Name</p>
                    <input type='text' name='eventKorName' value={eventKorName} onChange={handleEventKorName} required />
                    <p>Event Korean Name</p>
                    <input type='text' name='eventDate' value={eventDate} onChange={handleEventDate} required />
                    <p>Event Date</p>
                    <div className='thumbnails_uploader'>
                        <input className='thumbnail_file' multiple type="file" id="photos" name="photos" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} />
                        {file && isPhotosLoading ? <LoadingLine /> : photosUploaded}
                        <button type='button' onClick={handlePhotosUpload} className='new_sermon_buttons'>Upload Photos</button>
                    </div>
                    <br />
                    <div>
                        {photos && isAllPhotosUploaded ? <LoadingLine /> : allPhotosUploaded}
                        <button type='submit' className='new_sermon_buttons'>
                            등록
                        </button>
                    </div>
                </form >
            </div >
        </div>
    );
}