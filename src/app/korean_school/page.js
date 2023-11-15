'use client';
import Link from 'next/link';
import '../css/page.css';
import '../css/about.css';

export default function Korean_school() {

    return (
        <>
            <title>타코마한국학교</title>
            <section >
                <img src='/korean_school_banner.jpg' className='mainBannerImage' />
            </section>
            <br />
            <div className='title' >
                <p className='title-style'>타코마한국학고</p>
                <p className='subtitle-style'>Tacoma Korean School</p>
            </div>
            <div className='top'>
                <div className='top_background'>
                    <section className='aboutSection'>
                        <div className='aboutSectionDescription'>
                            <div className='korean_school_title'>
                                <p>
                                    타코마한국학교에 방문하신 여러분들을 <b className='about_greeting_title'>환영</b> 합니다.
                                    <br />
                                    Welcome to Tacoma Korean School!
                                </p>
                                <div>
                                    <Link href='https://www.tacomakoreanschool.org/'>
                                        <button className='korean_school_home_button'><p>타코마한국학교 홈페이지</p></button>
                                    </Link>
                                </div>
                            </div>
                            <p>
                                저희 타코마한국학교는 타코마에 가장 오랜 역사와 전통을 자랑하는 한국학교로서 민족의 언어인 한국어 및 한국역사,
                                <br />전통과 문화를 가르침으로 민족의 정체성을 함양시키고, 국제화 시대에 부응하는 훌륭한 지도자를 양성하는 교육기관입니다.
                            </p>
                            <p>
                                매년 봄, 가을 학기(매주 토요일)와, 여름특별 캠프(여름방학기간)로 한국학교 프로그램이 진행되며, 연령별, 능력별 초급, 중급, 상급반등으로 체계적이고 효과적인 교육 프로그램을 통해 한국어 능력 향상을 돕습니다.
                                <br />
                                또한 한국 전통 문화 체험등을 통해, 재외 한국인으로서의 정체성과 긍지를 심어주어 이민사회 및 다가오는 세대에 귀하게 쓰임받는 빛과 소금과 같은 일꾼과 지도자들로 자라도록 돕습니다.
                            </p>
                            <p>
                                무엇보다 하나님 사랑안에서, 부모사랑과 공경, 이웃과 세계를 사랑으로 바라보고 품는
                                참된 믿음과 인성을 갖추도록 지도,
                                <br />
                                양육에 최선을 다하고 있습니다.
                            </p>
                            <p>
                                타코마한국학교에 학생들을 보내주시며, 관심과 사랑을 베풀어 주심을 감사드리며,
                                <br />
                                계속해서 이 귀한 교육사업을 위해서 지속적인 관심과 기도와 참여를 부탁드립니다.

                            </p>
                            <p>
                                타코마한국학교
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <br />
            <br />
        </>
    );
}