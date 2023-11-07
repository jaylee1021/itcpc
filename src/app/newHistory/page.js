'use client';
import React, { useState, useRef } from 'react';
import '../css/page.css';
import '../css/newSermon.css';
import axios from 'axios';
import { LoadingLine } from '../Component/Loading';

export default function newSermon() {

    const [date, setDate] = useState('');
    const [event_description, setEvent_description] = useState('');
    const [order, setOrder] = useState('');
    const inputRef = useRef();

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleEvent = (e) => {
        setEvent_description(e.target.value);
    };

    const handleOrder = (e) => {
        setOrder(e.target.value);
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_history = { date, event_description, order };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/histories/new`, new_history)
            .then(response => {
                if (response.status === 200) {
                    alert('새로운 연헉 등록에 "성공"했습니다.');
                    setDate('');
                    setEvent_description('');
                    setOrder('');
                    inputRef.current.focus();
                }
            })
            .catch(error => console.log('===> Error creating a sermon', error));
    };

    const handleClean = (e) => {
        e.preventDefault();
        setDate('');
        setEvent_description('');
        setOrder('');
    };

    return (
        <>
            <title>연헉등록</title>
            <div className='title' >
                <p className='title-style'>연헉등록</p>
                <p className='subtitle-style'>Register History</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <input ref={inputRef} type='text' name='date' value={date} onChange={handleDate} required />
                    <p>History Date
                        <br />
                        (ex: 2023.10.21 or 10.21 if previous year is same)</p>
                    <textarea style={{ backgroundColor: 'white', color: 'black', textIndent: '10px' }} type='text' name='event_description' value={event_description} onChange={handleEvent} required />
                    <p>Event Description</p>
                    <input type='text' name='order' value={order} onChange={handleOrder} required />
                    <p>Order</p>
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
            <br />
            <br />
            <br />
        </>
    );
}