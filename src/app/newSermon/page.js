'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../css/page.css';
import '../css/newSermon.css';
import axios from 'axios';
import { LoadingLine } from '../Component/Loading';
import SnapImage from '../Component/SnapImage';

export default function newSermon() {

    const router = useRouter();
    const [embed, setEmbed] = useState('');
    const [preacher, setPreacher] = useState('');
    const [session, setSession] = useState('');
    const [snap, setSnap] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [passage, setPassage] = useState('');
    const [snapImage, setSnapImage] = useState('');

    const handleFileOpen = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSnapImage(file);
            setSnap(<SnapImage snap={file} />);
        }
    };

    const handleEmbed = (e) => {
        setEmbed(e.target.value);
    };

    const handlePreacher = (e) => {
        setPreacher(e.target.value);
    };

    const handleSession = (e) => {
        setSession(e.target.value);
    };

    const handleSnap = (e) => {
        setSnap(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handlePassage = (e) => {
        setPassage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let sermonUrl = embed;
        sermonUrl = sermonUrl.split('=')[1].slice(0, 11);
        const new_sermon = { embed: sermonUrl, preacher, session, snap, date, title, passage };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons/new`, new_sermon)
            .then(response => {
                if (response.data.message === 'sermon already exists') {
                    alert('새로운 설교 등록에 "실패"했습니다.');
                } else {
                    alert('새로운 설교 등록에 "성공"했습니다.');
                }
            })
            .catch(error => console.log('===> Error creating a sermon', error));
    };

    const handleClean = (e) => {
        e.preventDefault();
        setEmbed('');
        setPreacher('');
        setSession('');
        setSnap('');
        setDate('');
        setTitle('');
        setPassage('');
    };

    return (
        <>
            <title>설교등록</title>
            <div className='title' >
                <p className='title-style'>설교등록</p>
                <p className='subtitle-style'>Register Sermon</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <div>
                        <label variant='primary' htmlFor='snapImage' >Upload Thumbnail Image</label>
                        <input type="file" id="snapImage" name="snapImage" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} style={{ display: 'none' }} />
                        {snap}
                    </div>
                    <br />
                    <input type='text' name='embed' value={embed} onChange={handleEmbed} required />
                    <p>Youtube URL</p>
                    <input type='text' name='preacher' value={preacher} onChange={handlePreacher} required />
                    <p>Preacher</p>
                    <select name='session' value={session} onChange={handleSession} required >
                        <option value=''>Select Session</option>
                        <option value='1부'>1부</option>
                        <option value='2부'>2부</option>
                        <option value='3부'>3부</option>
                    </select>
                    <p>Session</p>
                    <input type='text' name='snap' value={snap} onChange={handleSnap} required />
                    <p>Cloudinary Link</p>
                    <input type='date' name='date' value={date} onChange={handleDate} required />
                    <p>설교 날짜</p>
                    <input type='text' name='title' value={title} onChange={handleTitle} required />
                    <p>설교 제목</p>
                    <input type='text' name='passage' value={passage} onChange={handlePassage} required />
                    <p>말씀 구절</p>
                    <div className='new_sermon_button_section'>
                        <button type='submit' className='new_sermon_buttons'>
                            Submit
                        </button>
                        <button type='button' onClick={handleClean} className='new_sermon_buttons'>
                            Clear form
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}