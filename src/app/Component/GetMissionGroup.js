'use client';
import React, { useEffect, useState } from 'react';
import '../css/page.css';
import '../css/missionGroup.css';
import axios from 'axios';
import { LoadingCircle } from './Loading';

export default function GetMissionGroup({ gender }) {

    const [missionGroups, setMissionGroups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let whichGender = '';
    if (gender === 'male') {
        whichGender = '남';
    } else if (gender === 'female') {
        whichGender = '여';
    } else if (gender === 'em') {
        whichGender = '영어부';
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/missionGroups/${gender}`)
            .then(response => {
                if (response.status === 200) {
                    setMissionGroups(response.data.missionGroups);
                    setIsLoading(false);
                }
            })
            .catch(error => console.log('===> Error fetching missionGroups', error));
    }, [gender]);

    if (isLoading) return (<LoadingCircle />);

    return (
        <>
            <table className='missionGroupTable'>
                <colgroup>
                    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>{whichGender} 선교회명</th>
                        <th>임원단</th>
                    </tr>
                </thead>
                <tbody>
                    {missionGroups.map((missionGroup, index) => (
                        <tr key={index} className=''>
                            <td className='groupName' >
                                {missionGroup.groupName}
                            </td>
                            <td className='' >
                                회장: {missionGroup.president}
                                {missionGroup.vicePresident ? ', 부회장: ' + missionGroup.vicePresident : null}
                                {missionGroup.secretary ? ', 총무: ' + missionGroup.secretary : null}
                                {missionGroup.accounting ? ', 회계: ' + missionGroup.accounting : null}
                                {missionGroup.clerk ? ', 서기: ' + missionGroup.clerk : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};;