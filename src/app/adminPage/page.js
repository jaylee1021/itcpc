'use client';

import React, { useState } from 'react';
import '../css/page.css';
import Link from 'next/link';
import Editmission from '../Component/Editmission';
import NewHistories from '../Component/NewHistories';
import NewSermons from '../Component/NewSermons';
import NewBanners from '../Component/NewBanners';


export default function AdminPage() {
    const [row, setRow] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'mission') {
            setRow(<Editmission />);
        }
    };

    return (
        <div>
            <title>Admin Page</title>
            <div className='title'>
                <p className='title-style'>관리자</p>
                <p className='subtitle-style'>Admin</p>
            </div>
            <div style={{ display: 'flex' }}>
                {/* <Link href='/newSermon'> <button className='admin_button'>설교말씀 등록</button></Link>
            <Link href='/newHistory'> <button className='admin_button'>연혁 등록</button></Link>
            <Link href='/editMissionGroup'> <button className='admin_button'>선교회 등록</button></Link> */}
                <div style={{ padding: '10px' }}>
                    {<Editmission />}
                </div>
                <div style={{ padding: '10px' }}>
                    {<NewHistories />}
                </div>
                <div style={{ padding: '10px' }}>
                    {<NewSermons />}
                </div>
                <div style={{ padding: '10px' }}>
                    {<NewBanners />}
                </div>
            </div>

        </div>
    );
}

