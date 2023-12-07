'use client';
import React, { useState } from 'react';
import { LoadingLine } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function NewSermons() {

    const [embed0, setEmbed0] = useState(''); // 1부
    const [embed1, setEmbed1] = useState(''); // 2부
    const [embed2, setEmbed2] = useState(''); // 3부
    const [preacher, setPreacher] = useState('');
    const [session, setSession] = useState('');
    const [snap, setSnap] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [passage, setPassage] = useState('');
    const [file, setFile] = useState('');
    const [fileUploaded, setFileUploaded] = useState('');


    const handleFileOpen = (e) => {
        setFile(e.target.files[0]);
    };

    // 1부
    const handleEmbed0 = (e) => {
        setEmbed0(e.target.value);
    };

    // 2부
    const handleEmbed1 = (e) => {
        setEmbed1(e.target.value);
    };

    // 3부
    const handleEmbed2 = (e) => {
        setEmbed2(e.target.value);
    };

    const handlePreacher = (e) => {
        setPreacher(e.target.value);
    };

    const handleSession = (e) => {
        setSession(e.target.value);
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

    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = () => {
        if (file) {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', `${process.env.NEXT_PUBLIC_SERMON_PRESET}`);
            fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setSnap(data.secure_url);
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
        const embed0_2 = []; // array for 1st and 3rd session Youtube URL
        embed0_2.push(embed0);
        embed0_2.push(embed2);
        if (snap) {
            if (session === '1부') {
                let count = 1;
                // first itteration creates 1st session sermon then second itteration creates 3rd session sermon
                for (let i = 0; i < 2; i++) {
                    let sermonUrl = embed0_2[i]; // sermonUrl for 1부 or 3부 (first or third session)
                    let sessionCount = count + '부'; // session count becomes 1부 or 3부
                    sermonUrl = sermonUrl.split('=')[1].slice(0, 11);
                    const new_sermon = { embed: sermonUrl, preacher, session: sessionCount, snap, date, title, passage };
                    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons/new`, new_sermon)
                        .then(response => {
                            if (response.data.message === 'sermon already exists') {
                                alert('새로운 설교 등록에 "실패"했습니다. (같은 설교가 이미 존재합니다.)');
                            } else {
                                alert('새로운 설교 등록에 "성공"했습니다.');
                            }
                        })
                        .catch(error => console.log('===> Error creating a sermon', error));
                    count += 2;
                }
            } else if (session === '2부') {
                let sermonUrl = embed1; // sermonURL for 2부 (second session)
                sermonUrl = sermonUrl.split('=')[1].slice(0, 11);
                const new_sermon = { embed: sermonUrl, preacher, session, snap, date, title, passage };
                axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons/new`, new_sermon)
                    .then(response => {
                        if (response.data.message === 'sermon already exists') {
                            alert('새로운 설교 등록에 "실패"했습니다. (같은 설교가 이미 존재합니다.)');
                        } else {
                            alert('새로운 설교 등록에 "성공"했습니다.');
                        }
                    })
                    .catch(error => console.log('===> Error creating a sermon', error));
            }
        } else {
            alert('썸네일을 먼저 업로드 해주세요.');
        }
        handleClean();
    };

    const handleClean = (e) => {
        // e.preventDefault();
        setEmbed0('');
        setEmbed1('');
        setEmbed2('');
        setPreacher('');
        setSession('');
        setSnap('');
        setDate('');
        setTitle('');
        setPassage('');
        setFile('');
        setFileUploaded('');
    };

    return (
        <div>
            <div className='title' >
                <p className='title-style'>설교등록</p>
                <p className='subtitle-style'>Register Sermon</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <select name='session' value={session} onChange={handleSession} required >
                        <option value=''>Select Session</option>
                        <option value='1부'>1부/3부</option>
                        <option value='2부'>2부</option>
                    </select>
                    <p>Session</p>
                    <div className='thumbnails_uploader'>
                        <input className='thumbnail_file' type="file" id="snapImage" name="snapImage" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} />
                        {file && isLoading ? <LoadingLine /> : fileUploaded}
                        <button type='button' onClick={handleImageUpload} className='new_sermon_buttons'>Upload Thumbnail</button>
                    </div>
                    <br />
                    {session === '1부' ?
                        <>
                            <input type='text' name='embed0' value={embed0} onChange={handleEmbed0} required />
                            <p>1부 Youtube URL</p>
                            <input type='text' name='embed2' value={embed2} onChange={handleEmbed2} required />
                            <p>3부 Youtube URL</p>
                        </>
                        : session === '2부' ?
                            <>
                                <input type='text' name='embed1' valu1={embed1} onChange={handleEmbed1} required />
                                <p>Youtube URL</p>
                            </>
                            :
                            null
                    }
                    <input type='text' name='preacher' value={preacher} onChange={handlePreacher} required />
                    <p>Preacher</p>
                    <input type='date' name='date' value={date} onChange={handleDate} required />
                    <p>설교 날짜</p>
                    <input type='text' name='title' value={title} onChange={handleTitle} required />
                    <p>설교 제목</p>
                    <input type='text' name='passage' value={passage} onChange={handlePassage} required />
                    <p>말씀 구절</p>
                    <div className='new_sermon_button_section'>
                        <button type='submit' className='new_sermon_buttons'>
                            등록
                        </button>
                        <button type='button' onClick={handleClean} className='new_sermon_buttons clear_form_button'>
                            Clear form
                        </button>
                    </div>
                </form >
            </div >
        </div>
    );
};