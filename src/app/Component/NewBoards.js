'use client';
import React, { useState } from 'react';
import { LoadingLine } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function NewBoards() {
    const [snap, setSnap] = useState('');
    const [poster, setPoster] = useState('');
    const [title, setTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [file, setFile] = useState('');
    const [snapUploaded, setSnapUploaded] = useState('');
    const [posterUploaded, setPosterUploaded] = useState('');

    const handleFileOpen = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleEventDate = (e) => {
        setEventDate(e.target.value);
    };

    const [isSnapLoading, setIsSnapLoading] = useState(false);
    const [isPosterLoading, setIsPosterLoading] = useState(false);

    const handleSnapUpload = () => {
        if (file) {
            setIsSnapLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', `${process.env.NEXT_PUBLIC_BOARD_PRESET}`);
            fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setSnap(data.secure_url);
                    setFile('');
                    setIsSnapLoading(false);
                    setSnapUploaded(<p className='file_uploaded'>파일이 업로드 되었습니다.</p>);
                })
                .catch((error) => console.log('Error', error));
        } else {
            alert('업로드할 파일을 먼저 선택해주세요.');
        }
    };

    const handlePosterUpload = () => {
        if (file) {
            setIsPosterLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', `${process.env.NEXT_PUBLIC_BOARD_PRESET}`);
            fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setPoster(data.secure_url);
                    setFile('');
                    setIsPosterLoading(false);
                    setPosterUploaded(<p className='file_uploaded'>파일이 업로드 되었습니다.</p>);
                })
                .catch((error) => console.log('Error', error));
        } else {
            alert('업로드할 파일을 먼저 선택해주세요.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_board = { url: poster, title, snap, eventDate };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/boards/new`, new_board)
            .then(response => {
                if (response.data.message === 'sermon already exists') {
                    alert('새로운 설교 등록에 "실패"했습니다. (같은 설교가 이미 존재합니다.)');

                } else {
                    alert('새로운 설교 등록에 "성공"했습니다.');
                    window.location.reload();
                }
            })
            .catch(error => console.log('===> Error creating a sermon', error));
    };

    return (
        <div>
            <div className='title' >
                <p className='title-style'>게시판등록</p>
                <p className='subtitle-style'>Register Board</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >

                    <div className='thumbnails_uploader'>
                        <input className='thumbnail_file' type="file" id="snap" name="snap" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} />
                        {file && isSnapLoading ? <LoadingLine /> : snapUploaded}
                        <button type='button' onClick={handleSnapUpload} className='new_sermon_buttons'>Upload Thumbnail</button>
                    </div>
                    <br />
                    <div className='thumbnails_uploader'>
                        <input className='thumbnail_file' type="file" id="poster" name="poster" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} />
                        {file && isPosterLoading ? <LoadingLine /> : posterUploaded}
                        <button type='button' onClick={handlePosterUpload} className='new_sermon_buttons'>Upload Poster</button>
                    </div>
                    <br />
                    <input type='text' name='title' value={title} onChange={handleTitle} required />
                    <p>Title</p>
                    <input type='text' name='eventDate' value={eventDate} onChange={handleEventDate} required />
                    <p>Event Date</p>

                    <div className='new_sermon_button_section'>
                        <button type='submit' className='new_sermon_buttons'>
                            등록
                        </button>
                    </div>
                </form >
            </div >
            <br />
            <br />
            <br />
        </div>
    );
}