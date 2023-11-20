'use client';

import React from 'react';
import '../css/page.css';
import Link from 'next/link';

export default function AdminPage() {

    return (
        <>
            <title>Admin Page</title>

            <div className='title'>
                <p className='title-style'>관리자</p>
                <p className='subtitle-style'>Admin</p>
            </div>
            <Link href='/newSermon'> <button className='admin_button'>설교말씀 등록</button></Link>
            <Link href='/newHistory'> <button className='admin_button'>연혁 등록</button></Link>
        </>
    );
}

