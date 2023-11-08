'use client';
import '../css/page.css';
import '../css/history.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetHistory from '../Component/GetHistory';


export default function History() {

    const [histories, setHistories] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/histories`)
            .then(response => {
                if (response.status === 200) {
                    setHistories(response.data.histories);
                }
            })
            .catch(error => console.log('===> Error fetching histories', error));
    });
    return (
        <>
            <title>타코마중앙장로교회</title>
            <section >
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <br />
            <br />
            <div className='title' >
                <p className='title-style'>교회연혁</p>
                <p className='subtitle-style'>Church History</p>
            </div>
            <br />
            <section style={{ textAlign: 'center', maxWidth: '1440px', margin: 'auto' }}>
                <h4>
                    타코마 중앙 장로 교회는 1972년 창립되어 1973년 초대담임 목사님이 청빙 된후 지난 50여년간
                    미주 서북미의 한인 교민들에게 복음을 전하고 신앙 성장을 위해 주님의 뚯을 좇아 달려왔습니다.
                </h4>
            </section>
            <section>
                <a href='./history#order_1'> 창립초기 1972 - 1976</a>
            </section>
            <br />
            <section id='order_1'>
                <GetHistory order={1} />
            </section>
        </>
    );
};