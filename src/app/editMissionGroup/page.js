'use client';
import React, { useEffect, useState } from 'react';
import { LoadingLine } from '../Component/Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function newSermon() {

    const [groupName, setGroupName] = useState([]);
    const [missionGrouop, setMissionGroup] = useState([]);
    const [president, setPresident] = useState('');
    const [vicePresident, setVicePresident] = useState('');
    const [secretary, setSecretary] = useState('');
    const [clerk, setClerk] = useState('');
    const [accounting, setAccounting] = useState('');

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/missionGroups/`)
            .then((response) => {
                console.log('missionGroups', response.data.missionGroups);
                setMissionGroup(response.data.missionGroups);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test');

    };

    const handleClean = () => {
        setGroupName('');
        setPresident('');
        setVicePresident('');
        setSecretary('');
        setClerk('');
        setAccounting('');
    };

    return (
        <>
            <title>설교등록</title>
            <div className='title' >
                <p className='title-style'>설교등록</p>
                <p className='subtitle-style'>Register Sermon</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >

                    <select>
                        {missionGrouop.map((singleMissionGroup) => {
                            return (
                                <option value={singleMissionGroup._id} key={singleMissionGroup._id}>{singleMissionGroup.groupName}</option>
                            );
                        })}
                    </select>
                </form >
            </div >
            <br />
            <br />
            <br />
        </>
    );
};