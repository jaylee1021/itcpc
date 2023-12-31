'use client';
import React, { useEffect, useState } from 'react';
import { LoadingCircle } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/history.css';

export default function GetHistory({ order }) {

    const [histories, setHistories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/histories/${order}`)
            .then(response => {
                if (response.status === 200) {
                    setHistories(response.data.histories);
                    setIsLoading(false);
                }
            })
            .catch(error => console.log('===> Error fetching histories', error));
    }, [order]);

    if (isLoading) return (<LoadingCircle />);

    return (
        <>
            {histories.map((history, index) => (
                <div key={index} className='history_article'>
                    <div className='history_article_date' >
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