'use client';
import React, { useState } from 'react';
import { LoadingLine } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function NewBulletin() {
    const [special_title, setSpecial_title] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const [contentUpload, setContentUpload] = useState('');
    const [kmEm, setKmEm] = useState('');

    const handleFileOpen = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTitle = (e) => {
        setSpecial_title(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleKmEm = (e) => {
        setKmEm(e.target.value);
    };

    const [isContentLoading, setIsContentLoading] = useState(false);

    const handleContentUpload = () => {
        if (file) {
            setIsContentLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', `${process.env.NEXT_PUBLIC_BULLETIN_PRESET}`);
            fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setContent(data.secure_url);
                    setFile('');
                    setIsContentLoading(false);
                    setContentUpload(<p className='file_uploaded'>주보가 업로드 되었습니다.</p>);
                })
                .catch((error) => console.log('Error', error));
        } else {
            alert('업로드할 주보를 먼저 선택해주세요.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content) {
            const new_bulletin = { special_title, content, date, kmEm };
            axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/bulletins/new`, new_bulletin)
                .then(response => {
                    alert('새로운 주보 등록에 "성공"했습니다.');
                    window.location.reload();
                })
                .catch(error => console.log('===> Error creating a sermon', error));
        } else {
            alert('주보를 먼저 업로드 해주세요.');
        }
    };

    return (
        <div>
            <div className='title' >
                <p className='title-style'>주보등록</p>
                <p className='subtitle-style'>Register Bulletin</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >

                    <div className='thumbnails_uploader'>
                        <input className='thumbnail_file' type="file" id="snap" name="snap" accept='.pdf' onChange={handleFileOpen} />
                        {file && isContentLoading ? <LoadingLine /> : contentUpload}
                        <button type='button' onClick={handleContentUpload} className='new_sermon_buttons'>Upload Bulletin</button>
                    </div>
                    <br />
                    <input type='text' name='special_title' value={special_title} onChange={handleTitle} placeholder='Ex: 추수감사주일 (not required)' />
                    <p>Special Title</p>
                    <input type='date' name='date' value={date} onChange={handleDate} placeholder='2023-01-01' required />
                    <p>Event Date</p>
                    <select name='kmEm' defaultValue={'default'} onChange={handleKmEm} required>
                        <option value='default' disabled>Language</option>
                        <option value='km'>Korean Ministry</option>
                        <option value='em'>English Ministry</option>
                    </select>
                    <br />
                    <div className='new_sermon_button_section'>
                        <button type='submit' className='new_sermon_buttons'>
                            등록
                        </button>
                    </div>
                </form >
            </div >
        </div>
    );
}