'use client';
import '../css/page.css';
import '../css/history.css';
import '../css/about.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetHistory from '../Component/GetHistory';


export default function History() {

    return (
        <div className='history'>
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
                    미주 서북미의 한인 교민들에게 복음을 전하고 신앙 성장을 위해 주님의 뚯을 좇아 달려왔습니다.
                </h4>
            </section>
            <br />
            <div className='top'>
                <div className='top_background'>
                    <section className='history_buttons_section'>
                        <div className='history_buttons_section button_media'>
                            <div className='two_buttons'>
                                <a href='./history#order_1'><button className='history_buttons'>창립초기 <br /> 1972 - 1976</button></a>
                                <a href='./history#order_2'><button className='history_buttons'>건축 및 성장기 <br /> 1977 - 1997</button></a>
                            </div>
                            <div className='two_buttons'>
                                <a href='./history#order_3'><button className='history_buttons'>선교 지향기 <br /> 1998 - 2003</button></a>
                                <a href='./history#order_4'><button className='history_buttons'>선교 사역 집중기  <br /> 2004 - 현재</button></a>
                            </div>
                        </div>
                    </section>
                    <br />
                    <div style={{ maxWidth: '950px', margin: 'auto' }}>

                        <div id='order_1'>
                            <p className='history_title'>
                                창립초기 1972 - 1976
                            </p>
                            <hr />
                        </div>
                        <section>
                            <GetHistory order={1} />
                        </section>

                        <div id='order_2'>
                            <p className='history_title'>
                                건축 및 성장기 1977 - 1997
                            </p>
                            <hr />
                        </div>
                        <section >
                            <GetHistory order={2} />
                        </section>

                        <div id='order_3' >
                            <p className='history_title'>
                                선교 지향기 1998 - 2003
                            </p>
                            <hr />
                        </div>
                        <section >
                            <GetHistory order={3} />
                        </section>

                        <div id='order_4'>
                            <p className='history_title'>
                                선교 사역 집중기 2004 - 현재
                            </p>
                            <hr />
                        </div>
                        <section >
                            <GetHistory order={4} />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};