'use client';
import React, { useEffect, useState } from 'react';
import { LoadingLine } from './Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/newSermon.css';

export default function Editmission() {

    const [missionGroup, setMissionGroup] = useState([]);
    const [data, setData] = useState({ president: '', vicePresident: '', secretary: '', clerk: '', accounting: '' });
    const [groupId, setGroupId] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/missionGroups/`)
            .then((response) => {
                setMissionGroup(response.data.missionGroups);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/missionGroups/${groupId}`, data)
            .then((response) => {
                alert('Mission Group Updated');
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
        const selectedMissionGroup = missionGroup.find((singleMissionGroup) => {
            return singleMissionGroup._id === e.target.value;
        });
        setData({
            ...data, groupName: selectedMissionGroup.groupName,
            president: selectedMissionGroup.president,
            vicePresident: selectedMissionGroup.vicePresident ? selectedMissionGroup.vicePresident : '',
            secretary: selectedMissionGroup.secretary ? selectedMissionGroup.secretary : '',
            clerk: selectedMissionGroup.clerk ? selectedMissionGroup.clerk : '',
            accounting: selectedMissionGroup.accounting ? selectedMissionGroup.accounting : '',
        });
        setGroupId(e.target.value);
    };

    // const handleClean = () => {
    //     setGroupName('');
    //     setPresident('');
    //     setVicePresident('');
    //     setSecretary('');
    //     setClerk('');
    //     setAccounting('');
    // };

    if (isLoading) { <LoadingLine />; }

    return (
        <div>
            <div className='title' >
                <p className='title-style'>선교회등록</p>
                <p className='subtitle-style'>Register Mission Group</p>
            </div>
            <div className='new_sermon_section'>
                <form onSubmit={handleSubmit} className='new_sermon_form' >
                    <select onChange={handleGroup} defaultValue={'default'} id='missionGroup'>
                        <option value='default' disabled>선교회를 선택 해 주세요 </option>
                        {missionGroup.map((singleMissionGroup) => {
                            return (
                                <option key={singleMissionGroup._id} value={singleMissionGroup._id}> {singleMissionGroup.groupName}</option>
                            );
                        })}
                    </select>
                    <p>선교회</p>
                    <input type='text' name='president' value={data.president} onChange={handleChange} required />
                    <p>회장</p>
                    <input type='text' name='vicePresident' value={data.vicePresident} onChange={handleChange} />
                    <p>부회장</p>
                    <input type='text' name='secretary' value={data.secretary} onChange={handleChange} />
                    <p>총무</p>
                    <input type='text' name='clerk' value={data.clerk} onChange={handleChange} />
                    <p>서기</p>
                    <input type='text' name='accounting' value={data.accounting} onChange={handleChange} />
                    <p>회계</p>
                    <div className='new_sermon_button_section'>
                        <button type='submit' className='new_sermon_buttons'>
                            등록
                        </button>
                        {/* <button type='button' onClick={handleClean} className='new_sermon_buttons clear_form_button'>
                            Clear form
                        </button> */}
                    </div>

                </form >
            </div >
        </div>
    );
};