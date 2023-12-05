'use client';
import React, { useEffect, useState } from 'react';
import { LoadingLine } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function EditGlobalMission() {

    const [globalMission, setGlobalMission] = useState([]);
    const [data, setData] = useState({ teamLead: '', member: '' });
    const [groupId, setGroupId] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/globalMissions/`)
            .then((response) => {
                setGlobalMission(response.data.globalMissions);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/globalMissions/${groupId}`, data)
            .then((response) => {
                alert('Global Missions Group Updated');
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = (e) => {
        setData(prevState => ({ ...data, [e.target.name]: e.target.value }));
    };

    const handleGroup = (e) => {
        const selectecGlobalMission = globalMission.find((singleGlobalMission) => {
            return singleGlobalMission._id === e.target.value;
        });
        setData({
            ...data,
            globalMissionsLeader: selectecGlobalMission.globalMissionsLeader ? selectecGlobalMission.globalMissionsLeader : '',
            secretary: selectecGlobalMission.secretary ? selectecGlobalMission.secretary : '',
            treasurer: selectecGlobalMission.treasurer ? selectecGlobalMission.treasurer : '',
            groupName: selectecGlobalMission.groupName,
            teamLead: selectecGlobalMission.teamLead ? selectecGlobalMission.teamLead : '',
            member: selectecGlobalMission.member ? selectecGlobalMission.member : ''
        });
        setGroupId(e.target.value);
    };

    if (isLoading) { <LoadingLine />; }

    return (
        <div>
            <div className='title' >
                <p className='title-style'>세계선교 등록</p>
                <p className='subtitle-style'>Register Global Mission</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <select onChange={handleGroup} defaultValue={'default'} id='globalMission'>
                        <option value='default' disabled>세계선교회 부서명을 선택 해 주세요 </option>
                        {globalMission.map((singleGlobalMission) => {
                            return (
                                <option key={singleGlobalMission._id} value={singleGlobalMission._id}> {singleGlobalMission.groupName}</option>
                            );
                        })}
                    </select>
                    <p>세계선교</p>
                    {groupId === '656fae2003b6afc01af414ee' ?
                        <div>
                            <input type='text' name='globalMissionsLeader' value={data.globalMissionsLeader} onChange={handleChange} required />
                            <p>부장</p>
                            <input type='text' name='secretary' value={data.secretary} onChange={handleChange} />
                            <p>부원</p>
                            <input type='text' name='treasurer' value={data.treasurer} onChange={handleChange} />
                            <p>부원</p>
                        </div>
                        :
                        <div>
                            <input type='text' name='teamLead' value={data.teamLead} onChange={handleChange} required />
                            <p>부장</p>
                            <input type='text' name='member' value={data.member} onChange={handleChange} />
                            <p>부원</p>
                        </div>
                    }
                    <div className='new_sermon_button_section'>
                        <button type='submit' className='new_sermon_buttons'>
                            등록
                        </button>
                    </div>
                </form >
            </div >
        </div>
    );
};