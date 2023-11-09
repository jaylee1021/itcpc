'use client';

import React from 'react';
import '../css/page.css';
import '../css/about.css';

export default function About() {
    return (
        <>
            <title>환영합니다!</title>
            <section>
                <div className='about_banner_wrapper'>
                    <img src='/main_banner.png' className='mainBannerImage' />
                    {/* <div className='about_banner_title'>
                        <p>
                            W  E  L  C  O  M  E
                        </p>
                    </div> */}
                </div>
            </section>
            <br />
            <br />
            <div className='title'>
                <p className='title-style'>환영인사</p>
                <p className='subtitle-style'>Welcome Message</p>
            </div>
            <br />
            <div className='top'>
                <div className='top_background'>
                    <section className='aboutSection' >
                        <img src='/pastor_sam.png' className='pastor_image' />
                        <div className='about_vision_description' >
                            <br />
                            <p className='about_vision_title'>
                                TCPC 사역비전 (Ministry Vision)
                            </p>
                            <div>
                                <span className='about_vision_kr_sub'>건강한 교회 &nbsp; 행복한 가정 &nbsp; 성숙하는 신앙</span>
                                <br />
                                <span className='about_vision_sub'>Prevailing Church &nbsp; Strong Family &nbsp; Mature Faith</span>
                                <br />
                                (에베소서 Ephesians 4:11-13)
                            </div>
                        </div>
                    </section >
                    <br />
                    <br />

                    <section className='aboutSection'>
                        <div className='aboutSectionDescription'>
                            <p className='about_greeting_title'>
                                타코마 중앙장로교회를 찾아주신 여러분을 그리스도의 이름으로 환영합니다.
                            </p>
                            <p>
                                저희 타코마중앙장로교회는 <span className='span_1'>&lt;건강한 교회, 행복한 가정, 성숙하는 신앙&gt; </span> 이라는 비전을 가지고, 그리스고의 사랑으로 지역사회와 열방을 섬기고 있습니다.
                            </p>
                            <p>
                                미국 워싱턴주(WA), 타코마(TACOMA)에 위치한 본 교회는
                                이민 1세대의 눈물의 기도와 그리스도의 몸된 교회를 위한 피 땀 어린 헌신의 터전 위에 세워진 교회로서, 부모세대와 자녀세대를 잇는 헌신으로 서북미 지역의 복음화와, 전미국의 영적 각성,
                                그리소 예수님의 다시오실때까지 열방의 구원을 향해 나아가는 것을 꿈꾸며, 기도하는 교회입니다.
                            </p>
                            <p>
                                <span className='span_1'>"감동있는 예배", "사랑이 넘치는 성도의 교제",
                                    <br />
                                    "사람을 키우는 양육과 훈련", "모든 은사와 재능이 그리스도의 몸된 교회를 세워가는데 쓰임받는 봉사"</span>,
                                그리고 <br />
                                <span className='span_1'>"예수님의 사랑을 이웃과 열방에 전하는 전도와 선교"</span>를 균형있게 추구하는 교회 입니다.
                            </p>
                            <p>
                                모든 족속, 백성, 고드 기성세대와 영어권 2세들뿐 아니라,
                                <br />
                                문화와 언어권을 초월하여 모든 사람을 사랑으로 품는 교회,
                                <br />
                                그래서 정말로 예수님께 원하시는
                                <span className='span_2'>&lt;만민이 기도하는 집&gt;이 도려고 노력하고 있습니다.</span>
                            </p>
                            <p>
                                함께 주님을 경배하며, 그리스도 안에서 교제할 수 있기를 바랍니다.
                            </p>
                            <br />
                            <br />
                            <p>
                                그리스도의 사랑 안에서,
                                <br />
                                <span>이형석 목사</span>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <br />

            <div className='title'>
                <p className='title-style'>섬기는분들</p>
                <p className='subtitle-style'>Staffs</p>
            </div>
            <section className='staff_section'>
                <div className='profile_section'>
                    <img src='/pastor_sam_small.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                이형석 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Senior Pastor. Samuel Lee
                            </span>
                            <br />
                            <span className='staff_position'>
                                담임목사
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                slee@itcpc.org
                            </span>
                        </p>
                    </div>
                </div>
                <div className='profile_section'>
                    <img src='/pastor_james.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김용주 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor. James Y. Kim
                            </span>
                            <br />
                            <span className='staff_position'>
                                교구, 양육/새가족
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                tcpcristern@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
                <div className='profile_section'>
                    <img src='/pastor_brian.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                이대선 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor. Brian D. Lee
                            </span>
                            <br />
                            <span className='staff_position'>
                                교구, 예베/찬양
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                briandaeseon@hotmail.com
                            </span>
                        </p>
                    </div>
                </div>
                <div className='profile_section'>
                    <img src='/pastor_jim.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                한우진 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor. Jim Han
                            </span>
                            <br />
                            <span className='staff_position'>
                                영어권 2세 OW
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                jimhan@owtcpc.org
                            </span>
                        </p>
                    </div>
                </div>
                <div className='profile_section'>
                    <img src='/pastor_danny.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김성천 강도사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor. Danny Kim
                            </span>
                            <br />
                            <span className='staff_position'>
                                열린예배/2세영어
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                dannykim@owtcpc.org
                            </span>
                        </p>
                    </div>
                </div>
                <div className='profile_section'>
                    <img src='/pastor_david.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                데이빗 노 전도사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor. David Rho
                            </span>
                            <br />
                            <span className='staff_position'>
                                중고등부
                            </span>
                            <br />
                            <br />
                            <br />
                            <span style={{ paddingRight: '36.54px' }}>
                                tcpcyg253@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
                <div className='profile_section'>
                    <img src='/director_monica.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                모니가 디렉터
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Director. Monica Mata
                            </span>
                            <br />
                            <span className='staff_position'>
                                유년부
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                teamk5@owtcpc.org
                            </span>
                        </p>
                    </div>
                </div>
                <div className='profile_section'>
                    <img src='/decon_kwok.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                곽영종 간사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Administrative Staff. Young Kwok
                            </span>
                            <br />
                            <span className='staff_position'>
                                행정
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                office@itcpc.org
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </ >
    );
}