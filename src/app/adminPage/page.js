'use client';

import React, { useState } from 'react';
import '../css/page.css';
import Link from 'next/link';
import Editmission from '../Component/editmission';


export default function AdminPage() {
    const [row, setRow] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'mission') {
            setRow(<Editmission />);
        }
    };

    return (
        <>
            <title>Admin Page</title>

            <div className='title'>
                <p className='title-style'>관리자</p>
                <p className='subtitle-style'>Admin</p>
            </div>
            <select onChange={handleChange}>
                <option value='sermon' > 설교</option>
                <option value='history' > 연혁 </option>
                <option value='mission' > 선교회 </option>
            </select>
            <Link href='/newSermon'> <button className='admin_button'>설교말씀 등록</button></Link>
            <Link href='/newHistory'> <button className='admin_button'>연혁 등록</button></Link>
            <Link href='/editMissionGroup'> <button className='admin_button'>선교회 등록</button></Link>
            {row}
        </>
    );
}

