import React from 'react';
import GetMissionGroup from '../Component/GetMissionGroup';
import '../css/page.css';
import '../css/missionGroup.css';

export default function missionGroup() {

    return (
        <>
            <title>선교회</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>2023 선교회 조직</p>
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