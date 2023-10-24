'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/page.css';
import '../css/newSermon.css';
import axios from 'axios';

export default function newSermon() {

    const router = useRouter();
    const [embed, setEmbed] = useState('');
    const [preacher, setPreacher] = useState('');
    const [session, setSession] = useState('');
    const [snap, setSnap] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [passage, setPassage] = useState('');

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
        const new_sermon = { embed, preacher, session, snap, date, title, passage };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons/new`, new_sermon)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('===> Error in New Sermon', error));
    };

    const handleClean = (e) => {
        e.preventDefault();
        console.log('===> Cleaned');
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
            <div className='title' >
                <p className='title-style'>설교등록</p>
                <p className='subtitle-style'>Register Sermon</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <input type='text' name='embed' value={embed} onChange={handleEmbed} required />
                    <p>Youtube Embed</p>
                    <input type='text' name='preacher' value={preacher} onChange={handlePreacher} required />
                    <p>Preacher</p>
                    <select name='session' value={session} onChange={handleSession} required >
                        <option value=''>Select Session</option>
                        <option value='First'>First</option>
                        <option value='Second'>Second</option>
                        <option value='Third'>Third</option>
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