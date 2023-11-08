'use client';
import React, { useEffect, useState } from 'react';
import '../css/page.css';
import '../css/history.css';
import axios from 'axios';

export default function GetHistory({ order }) {

    const [histories, setHistories] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/histories/${order}`)
            .then(response => {
                if (response.status === 200) {
                    console.log('history', histories);
                    setHistories(response.data.histories);
                }
            })
            .catch(error => console.log('===> Error fetching histories', error));
    }, [order]);


    return (
        <>
            {histories.map((history, index) => (
                <div key={index} className='history_article'>
                    <div className='history_article_date' style={{ width: '15%' }}>
                        <p>{history.date}</p>
                    </div>
                    <div className='history_article_description'>
                        {history.event_description.split(';').map((description, index) =>
                            <p key={index}>{description}
                                <br /></p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};