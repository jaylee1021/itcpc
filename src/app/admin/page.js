'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/page.css';
import Link from 'next/link';
import Editmission from '../Component/Editmission';
import NewHistories from '../Component/NewHistories';
import NewSermons from '../Component/NewSermons';
import NewBanners from '../Component/NewBanners';
import NewBoards from '../Component/NewBoards';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import handleLogout from '../utils/handleLogout';
import { LoadingCircle } from '../Component/Loading';



export default function AdminPage() {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

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
                                // setIsLoading(false);
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

    // if (isLoading) return (<LoadingCircle />);

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
                <div style={{ padding: '10px' }}>
                    {<NewBoards />}
                </div>
            </div>
            <Link href='/' onClick={handleLogout}>LOGOUT</Link>

        </div>
    );
}

