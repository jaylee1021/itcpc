'use client';
import React, { useEffect, useState } from 'react';
import { LoadingCircle } from './Loading';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import '../css/page.css';
import '../css/missionGroup.css';

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
            <TableContainer component={Paper} className='table_top_section'>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow className='positionBackground'>
                            <TableCell className='positionName missionName' >{whichGender} 선교회명</TableCell>
                            <TableCell align="center" className='positionName'>회장</TableCell>
                            <TableCell align="center" className='positionName'>부회장</TableCell>
                            <TableCell align="center" className='positionName'>총무</TableCell>
                            <TableCell align="center" className='positionName'>회계</TableCell>
                            <TableCell align="center" className='positionName'>서기</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {missionGroups.map((row) => (
                            <TableRow
                                key={row.groupName}
                            >
                                <TableCell component="th" scope="row" className='groupName' >
                                    {row.groupName}
                                </TableCell>
                                <TableCell align="center" className='names'>{row.president}</TableCell>
                                <TableCell align="center" className='names'>{row.vicePresident ? row.vicePresident : '-'}</TableCell>
                                <TableCell align="center" className='names'>{row.secretary ? row.secretary : '-'}</TableCell>
                                <TableCell align="center" className='names'>{row.accounting ? row.accounting : '-'}</TableCell>
                                <TableCell align="center" className='names'>{row.clerk ? row.clerk : '-'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};;