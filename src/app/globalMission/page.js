'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../css/page.css';
import '../css/missionGroup.css';
import '../css/globalMission.css';

export default function GlobalMission() {

    const [globalMissions, setGlobalMissions] = useState([]);
    const [lastElement, setLastElement] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/globalMissions`)
            .then((res) => {
                setGlobalMissions(res.data.globalMissions);
                setLastElement(res.data.globalMissions.pop());
                // setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // if (isLoading) return <LoadingCircle />;

    return (
        <>
            <title>세계선교</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>세계선교</p>
                <p className='subtitle-style'>Global Mission</p>
            </div>
            <section className='mission_group_section'>
                <TableContainer component={Paper} className='table_top_section'>
                    <Table aria-label="simple table">
                        <TableHead >
                            <TableRow className='positionBackground'>
                                <TableCell className='globalMissionTitle globalMissionName' >부서명</TableCell>
                                <TableCell align="center" className='positionName'>사역원장</TableCell>
                                <TableCell align="center" className='positionName'>총무</TableCell>
                                <TableCell align="center" className='positionName'>회계</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {globalMissions.slice(0, -1).map((row) => ( */}
                            <TableRow>
                                <TableCell component="th" scope="row" className='groupName' >
                                    {lastElement.groupName}
                                </TableCell>
                                <TableCell align="center" className='names'>{lastElement.globalMissionsLeader ? lastElement.globalMissionsLeader : '-'}</TableCell>
                                <TableCell align="center" className='names'>{lastElement.secretary ? lastElement.secretary : '-'}</TableCell>
                                <TableCell align="center" className='names'>{lastElement.treasurer ? lastElement.treasurer : '-'}</TableCell>
                            </TableRow>
                            {/* ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
            <section className='mission_group_section'>
                <TableContainer component={Paper} className='table_top_section'>
                    <Table aria-label="simple table">
                        <TableHead >
                            <TableRow className='positionBackground'>
                                <TableCell className='globalMissionTitle globalMissionName' >부서명</TableCell>
                                <TableCell align="center" className='positionName'>부장</TableCell>
                                <TableCell align="center" className='positionName'>부원</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {globalMissions.slice(0, -1).map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row" className='groupName' >
                                        {row.groupName}
                                    </TableCell>
                                    <TableCell align="center" className='names'>{row.teamLead ? row.teamLead : '-'}</TableCell>
                                    <TableCell align="center" className='names'>{row.member ? row.member : '-'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </>
    );
};