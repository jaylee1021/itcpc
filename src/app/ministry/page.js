'use client';
import React from 'react';
import '../css/page.css';
import '../css/education.css';

export default function Gallery() {

    return (
        <div >
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <img src='/2023_VBS_all.png' className='mainBannerImage' />
            </section>
            <br />
            <div className='title' >
                <p className='title-style'>미니스트리</p>
                <p className='subtitle-style'>Ministries</p>
            </div>
            <br />
            <section className='education_section'>
                <div>
                    <img src='/baby.jpg' className='education_section_image left' />
                </div>
                <div className='education_section_description right'>
                    <p className='education_section_title'>
                        영아부 Toddlers (18개월 ~ 3.5세)
                    </p>
                    <p>
                        저희반은 4살부터 5살까지의 어린이들로 구성되어 있습니다.
                        저희는 매달 성경구절을 한구절씩 암송합니다.
                        함께 한양을 부르고, 매주 새로운 성경 말씀을 배웁니다.
                        저희 반에서는 어린이들이 스스로 혼자 주기도문을 암송할 수 있을 때 까지 주기도문을 연습합니다.
                        저희는 어린이들이 놀이처럼 재미있게 배울 수 있도록 준비 하며 오든 어린이들이 모두 함께 참여 할 수 있도록 격려합니다.
                    </p>
                    <p>
                        디랙터: 이성남 (Sung Roberts)
                    </p>
                    <p>
                        예배시간: 주일 11:00 AM ~ 12:30 PM
                    </p>
                </div>
            </section>
            <section className='education_section'>

                <div className='education_section_description left'>
                    <p className='education_section_title'>
                        유아부 Promiseland (Pre-k 3.5세 ~ 4.5세)
                    </p>
                    <p>
                        Description goes here
                    </p>
                    <p>
                        디렉터:
                    </p>
                    <p>
                        예배시간: 주일 11:00 AM ~ 12:30 PM
                    </p>
                </div>
                <div >
                    <img src='/promiseland.jpg' className='education_section_image right' />
                </div>

            </section>
            <section className='education_section'>
                <div>
                    <img src='/team_k5.jpg' className='education_section_image left' />
                </div>
                <div className='education_section_description right'>
                    <p className='education_section_title'>
                        유년부 Team K5 (K ~ 5th Grade)
                    </p>
                    <p>
                        Description goes here
                    </p>
                    <p>
                        디렉터: Monica Mata
                    </p>
                    <p>
                        예배시간: 주일 11:00 AM ~ 12:30 PM
                    </p>
                </div>
            </section>
            <section className='education_section'>
                <div className='education_section_description left'>
                    <p className='education_section_title'>
                        중고등부 Youth Group (6th ~ 12th Grade)
                    </p>
                    <p>
                        Description goes here
                    </p>
                    <p>
                        교역자: Pastor David Rho
                    </p>
                    <p>
                        예배시간: 주일 11:00 AM ~ 12:30 PM
                        <br />
                        금요예배: 금요일 7:00 PM ~ 9:00 PM
                    </p>
                </div>
                <div>
                    <img src='/youth.jpg' className='education_section_image right' />
                </div>
            </section>
            <section className='education_section'>
                <div>
                    <img src='/team_k5.jpg' className='education_section_image left' />
                </div>
                <div className='education_section_description right'>
                    <p className='education_section_title'>
                        새가족부 New Comer
                    </p>
                    <p>
                        Description goes here
                    </p>
                    <p>
                        교역자: 김용주 목사
                    </p>
                    <p>
                        팀멤버
                    </p>
                </div>
            </section>
            <section className='education_section'>
                <div className='education_section_description left'>
                    <p className='education_section_title'>
                        찬양팀 Praise Team
                    </p>
                    <p>
                        Description goes here
                    </p>
                    <p>
                        교역자: 이대선 목사
                    </p>
                    <p>
                        실로암, 헤세드
                    </p>
                </div>
                <div>
                    <img src='/youth.jpg' className='education_section_image right' />
                </div>
            </section>
            <section className='education_section'>
                <div>
                    <img src='/team_k5.jpg' className='education_section_image left' />
                </div>
                <div className='education_section_description right'>
                    <p className='education_section_title'>
                        미디아팀 Media team
                    </p>
                    <p>
                        Description goes here
                    </p>
                    <p>
                        부장:
                    </p>
                    <p>
                        팀멤버
                    </p>
                </div>
            </section>
            <section className='education_section'>
                <div className='education_section_description left'>
                    <p className='education_section_title'>
                        IT 팀 IT Team
                    </p>
                    <p>
                        Description goes here
                    </p>
                    <p>
                        부장
                    </p>
                    <p>
                        실로암, 헤세드
                    </p>
                </div>
                <div>
                    <img src='/youth.jpg' className='education_section_image right' />
                </div>
            </section>
        </div>
    );
};