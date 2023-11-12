'use client';
import React, { useState, useEffect } from 'react';
import '../css/page.css';
import '../css/missionGroup.css';
import axios from 'axios';
import { LoadingCircle } from '../Component/Loading';
import GetMissionGroup from '../Component/GetMissionGroup';

export default function missionGroup() {

    const [missionGroup, setMissionGroup] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/missionGroups`)
            .then((res) => {
                setMissionGroup(res.data.missionGroups);
                // setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // if (isLoading) return <LoadingCircle />;

    return (
        <>
            <title>선교회</title>
            <section >
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <br />
            <br />
            <div className='title' >
                <p className='title-style'>선교회 조직</p>
                <p className='subtitle-style'>Mission Groups</p>
            </div>
            <section className='mission_group_section'>
                {<GetMissionGroup gender='male' />}
            </section>
            <br />
            <section className='mission_group_section'>
                {<GetMissionGroup gender='female' />}
            </section>
            <br />
            <section className='mission_group_section'>
                {<GetMissionGroup gender='mix' />}
            </section>
            <br />
            <section className='mission_group_section'>
                {<GetMissionGroup gender='em' />}
            </section>
        </>
    );
};