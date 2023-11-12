'use client';
import React, { useEffect, useState } from 'react';
import '../css/page.css';
import '../css/missionGroup.css';
import axios from 'axios';
import { LoadingCircle } from './Loading';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
                    setMissionGroups(response.data.missionGroups.toReversed());
                    setIsLoading(false);
                }
            })
            .catch(error => console.log('===> Error fetching missionGroups', error));
    }, [gender]);

    if (isLoading) return (<LoadingCircle />);

    return (
        <>

            {/* <table className='missionGroupTable'>
                <colgroup>
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '40%' }} />
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
                                {missionGroup.vicePresident ? missionGroup.vicePresident : null}
                                {missionGroup.secretary ? ', 총무:' + missionGroup.secretary : null}
                                {missionGroup.accounting ? missionGroup.accounting : null}
                                {missionGroup.clerk ? ', 서기: ' + missionGroup.clerk : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

            <TableContainer component={Paper} style={{ display: 'flex', justifyContent: 'center', boxShadow: 'none' }}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow className='positionBackground'>
                            <TableCell className='positionName' style={{ width: '170px' }}>{whichGender} 선교회명</TableCell>
                            <TableCell align="center" style={{ width: '100%' }} className='positionName'>회장</TableCell>
                            <TableCell align="center" style={{ width: '100%' }} className='positionName'>부회장</TableCell>
                            <TableCell align="center" style={{ width: '100%' }} className='positionName'>총무</TableCell>
                            <TableCell align="center" style={{ width: '100%' }} className='positionName'>회계</TableCell>
                            <TableCell align="center" style={{ width: '100%' }} className='positionName'>서기</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {missionGroups.map((row) => (
                            <TableRow
                                key={row.groupName}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className='groupName' style={{ width: '100%' }}>
                                    {row.groupName}
                                </TableCell>
                                <TableCell align="center" style={{ width: '100%' }}>{row.president}</TableCell>
                                <TableCell align="center" style={{ width: '100%' }}>{row.vicePresident ? row.vicePresident : '-'}</TableCell>
                                <TableCell align="center" style={{ width: '100%' }}>{row.secretary ? row.secretary : '-'}</TableCell>
                                <TableCell align="center" style={{ width: '100%' }}>{row.accounting ? row.accounting : '-'}</TableCell>
                                <TableCell align="center" style={{ width: '100%' }}>{row.clerk ? row.clerk : '-'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};;