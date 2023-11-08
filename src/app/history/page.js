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
            <section style={{ textAlign: 'center', maxWidth: '950px', margin: 'auto' }}>
                <h4>
                    타코마 중앙 장로 교회는 1972년 창립되어 1973년 초대담임 목사님이 청빙 된후 지난 50여년간
                    <br />
                    미주 서북미의 한인 교민들에게 복음을 전하고 신앙 성장을 위해 주님의 뚯을 좇아 달려왔습니다.
                </h4>
            </section>
            <section >
                <div style={{ display: 'flex', justifyContent: 'space-evenly', maxWidth: '950px', margin: 'auto', textAlign: 'center' }}>
                    <a href='./history#order_1'> 창립초기 <br /> 1972 - 1976</a>
                    <a href='./history#order_2'> 건축 및 성장기  <br /> 1977 - 1997</a>
                    <a href='./history#order_3'> 선교 지향기  <br /> 1998 - 2003</a>
                    <a href='./history#order_4'> 선교 사역 집중기  <br /> 2004 - 현재</a>
                </div>

            </section>
            <br />
            <div style={{ maxWidth: '950px', margin: 'auto' }}>
                <div id='order_1'>
                    <p>
                        창립초기 1972 - 1976
                    </p>
                </div>
                <section>
                    <GetHistory order={1} />
                </section>
                <br />
                <div id='order_2'>
                    <p>
                        건축 및 성장기 1977 - 1997
                    </p>
                </div>
                <section >
                    <GetHistory order={2} />
                </section>
                <br />
                <div id='order_3'>
                    <p>
                        선교 지향기 1998 - 2003
                    </p>
                </div>
                <section >
                    <GetHistory order={3} />
                </section>
                <br />
                <div id='order_4'>
                    <p>
                        선교 사역 집중기 2004 - 현재
                    </p>
                </div>
                <section >
                    <GetHistory order={4} />
                </section>
            </div>
        </>
    );
};