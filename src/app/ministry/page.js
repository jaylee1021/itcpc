import React from 'react';
import '../css/page.css';
import '../css/education.css';
import Ministry from '../Component/Ministry';

export default function Gallery() {

    return (
        <div >
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <img src='/2023_VBS_all.png' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>미니스트리</p>
                <p className='subtitle-style'>Ministries</p>
            </div>
            <br />
            <Ministry
                title="영아부 Toddlers (18개월 ~ 3.5세)"
                description="저희반은 4살부터 5살까지의 어린이들로 구성되어 있습니다. 저희는 매달 성경구절을 한구절씩 암송합니다. 함께 한양을 부르고, 매주 새로운 성경 말씀을 배웁니다. 저희 반에서는 어린이들이 스스로 혼자 주기도문을 암송할 수 있을 때 까지 주기도문을 연습합니다. 저희는 어린이들이 놀이처럼 재미있게 배울 수 있도록 준비 하며 오든 어린이들이 모두 함께 참여 할 수 있도록 격려합니다."
                staff="디랙터: 이성남 (Sung Roberts)"
                time="예배시간: 주일 11:00 AM ~ 12:30 PM"
                image="/baby.jpg"
                position="left"
            />
            <Ministry
                title="유아부 Promiseland (Pre-k 3.5세 ~ 4.5세)"
                description="Description goes here"
                staff="디렉터:"
                time="예배시간: 주일 11:00 AM ~ 12:30 PM"
                image="/promiseland.jpg"
                position="right"
            />
            <Ministry
                title="유년부 Team K5 (K ~ 5th Grade)"
                description="Description goes here"
                staff="디렉터: Monica Mata"
                time="예배시간: 주일 11:00 AM ~ 12:30 PM"
                image="/team_k5.jpg"
                position="left"
            />
            <Ministry
                title="중고등부 Youth Group (6th ~ 12th Grade)"
                description="Description goes here"
                staff="교역자: Pastor David Rho"
                time={<>예배시간: 주일 11:00 AM ~ 12:30 PM<br />금요성경공부: 금요일 7:00 PM ~ 9:00 PM</>}
                image="/youth.jpg"
                position="right"
            />
            <Ministry
                title="새가족부 New Comer"
                description="Description goes here"
                staff="교역자: 김용주 목사"
                time="팀멤버"
                image="/team_k5.jpg"
                position="left"
            />
            <Ministry
                title="찬양팀 Praise Team"
                description="Description goes here"
                staff="교역자: 이대선 목사"
                time="실로암, 헤세드"
                image="/youth.jpg"
                position="right"
            />
            <Ministry
                title="미디아 부서 Media team"
                description="Description goes here"
                staff="부장:"
                time="팀멤버"
                image="/team_k5.jpg"
                position="left"
            />
            <Ministry
                title="IT 부서 IT Team"
                description="Description goes here"
                staff="부장"
                time="실로암, 헤세드"
                image="/youth.jpg"
                position="right"
            />
        </div>
    );
};