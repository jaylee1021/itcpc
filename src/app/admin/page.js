'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/page.css';
import '../css/admin.css';
import Link from 'next/link';
import Editmission from '../Component/Editmission';
import NewHistories from '../Component/NewHistories';
import NewSermons from '../Component/NewSermons';
import NewBanners from '../Component/NewBanners';
import NewBoards from '../Component/NewBoards';
import NewPhotos from '../Component/NewPhotos';
import NewBulletin from '../Component/NewBulletin';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import handleLogout from '../utils/handleLogout';
import { LoadingCircle } from '../Component/Loading';



export default function AdminPage() {

    const [user, setUser] = useState({});

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== undefined) {
            const expirationTime = new Date(parseInt(localStorage.getItem('expiration')) * 1000);
            let currentTime = Date.now();

            setAuthToken(localStorage.getItem('jwtToken'));
            // make a condition that compares exp and current time
            if (currentTime >= expirationTime) {
                handleLogout();
                router.push('/users/login');
            }
        }
    }, [router]);

    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        if (localStorage.getItem('jwtToken')) {
            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`)
                .then((response) => {
                    let userData = jwtDecode(localStorage.getItem('jwtToken'));
                    if (userData.email === localStorage.getItem('email')) {
                        const fetchUserData = async () => {
                            try {
                                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${localStorage.getItem('userId')}`);
                                setUser(response.data.user);
                            } catch (error) {
                                console.log('Error fetching user data', error);
                            }
                        };
                        fetchUserData();
                    } else {
                        router.push('/users/login');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    router.push('/users/login');
                });
        } else {
            router.push('/users/login');
        }
    }, [router]);

    return (
        <div className='admin_all'>
            <title>Admin Page</title>
            <div className='title'>
                <p className='title-style'>관리자</p>
                <p className='subtitle-style'>Admin</p>
                <Link href='/' className='logout_button' onClick={handleLogout}>LOGOUT</Link>
            </div>
            <div className='forms_all'>
                {/* <Link href='/newSermon'> <button className='admin_button'>설교말씀 등록</button></Link>
            <Link href='/newHistory'> <button className='admin_button'>연혁 등록</button></Link>
            <Link href='/editMissionGroup'> <button className='admin_button'>선교회 등록</button></Link> */}
                <div className='forms'>
                    {<NewSermons />}
                </div>
                <div className='forms'>
                    {<NewBulletin />}
                </div>
                <div className='forms'>
                    {<NewBoards />}
                </div>
                <div className='forms'>
                    {<NewPhotos />}
                </div>
                <div className='forms'>
                    {<NewBanners />}
                </div>
                <div className='forms'>
                    {<Editmission />}
                </div>
                <div className='forms'>
                    {<NewHistories />}
                </div>
            </div>
        </div>
    );
}

