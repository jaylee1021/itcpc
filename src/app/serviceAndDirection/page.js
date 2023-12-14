import Link from 'next/link';
import '../css/page.css';
import '../css/service.css';

export default function ServiceAndDirection() {

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <div className='service_banner_wrapper'>
                    <img src='/new_comer_top_banner.jpg' className='mainBannerImage' />
                    <div className='service_banner_title'>
                        <p>
                            {/* 예배 및 모임 / 약도 */}
                        </p>
                    </div>
                </div>
            </section>
            <div className='title' >
                <p className='title-style'>예배 및 모임</p>
                <p className='subtitle-style'>Service & Meetings </p>
            </div>
            <br />
            <section className='service_total'>
                <div className='service_section sunday_service_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_sunday_worship.png' className='service_section_image' />
                    </div>
                    <div className='hide'>
                        <div className='service_section_title'>
                            <p>주일예배
                                <br />
                                <span>Sunday Worship</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p>
                                <b>1부</b> 한어예배 오전 8:00
                                <br />
                                <b>2부</b> 영어예배 오전 9:30
                                <br />
                                <b>3부</b> 한어예배 오전 11:00
                                <br />
                                <Link href='https://www.youtube.com/channel/UC8ilaSeso9X1qNQq00WxKeA/live' target='_blank'>&gt;라이브 온라인 예배&lt;</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='service_section ow_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_OW.png' className='service_section_image' />
                    </div>
                    <div>
                        <div className='service_section_title'>
                            <p>열린예배
                                <br />
                                <span> Open Worship</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p>비전채플 Vision Chapel 주일 오전 11:00
                                <br />
                                <Link href='https://owtcpc.org/' target='_blank'>&gt;열린예배 홈페이지&lt;</Link>
                                <br />
                                <Link href='https://www.youtube.com/channel/UCTA5-nCCW3qFc1MzghAeNGw/live' target='_blank'>&gt;열린예배 라이브 온라인 예배&lt;</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='service_section youth_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_youth.png' className='service_section_image' />
                    </div>
                    <div>
                        <div className='service_section_title'>
                            <p>중고등부
                                <br />
                                <span> Youth Group</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p>
                                드림채플 Dream Chapel 주일 오전 11:00
                            </p>
                            <div className='service_section_title'>
                                <p>
                                    <span> 금요예배</span>
                                </p>
                            </div>
                            <div className='service_section_description'>
                                <p>
                                    매주 금요일 오후 7:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service_section sunday_school_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_sunday_school.png' className='service_section_image' />
                    </div>
                    <div>
                        <div className='service_section_title'>
                            <p>주일학교
                                <br />
                                <span>Sunday School</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p><b>영아부</b> (영아부실) 오전 11:00
                                <br />
                                <b>유아부</b> (유아부실) 오전 11:00
                                <br />
                                <b>유년부</b> (주일학교 예배실) 오전 11:00</p>
                        </div>
                    </div>
                </div>

                <div className='service_section wed_service_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_wed_service.png' className='service_section_image' />
                    </div>
                    <div>
                        <div className='service_section_title'>
                            <p>수요예배
                                <br />
                                <span>Wednesday Worship</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p>
                                매주 수요일 오전 10:00
                            </p>
                        </div>
                    </div>
                </div>

                <div className='service_section morning_prayer_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_morning_prayer.png' className='service_section_image' />
                    </div>
                    <div>
                        <div className='service_section_title'>
                            <p>새벽기도
                                <br />
                                <span>Morning Prayer</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p>매주 화~토요일 오전 6:00
                                <br />
                                대면 및 온라인
                                <br />
                                <Link href='https://www.youtube.com/channel/UC8ilaSeso9X1qNQq00WxKeA/live' target='_blank'>&gt;라이브 온라인 예배&lt;</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='service_section small_group_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_small_group.png' className='service_section_image' />
                    </div>
                    <div>
                        <div className='service_section_title'>
                            <p>소그룹모임
                                <br />
                                <span>Small Group</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p>각 소그릅별</p>
                        </div>
                    </div>
                </div>
                <div className='service_section korean_school_background'>
                    <div className='service_section_image_wrapper'>
                        <img src='/service_korean_school.png' className='service_section_image' />
                    </div>
                    <div>
                        <div className='service_section_title'>
                            <p>한국학교
                                <br />
                                <span>Korean School</span>
                            </p>
                        </div>
                        <div className='service_section_description'>
                            <p>학기중 매주 토요일 오전 9:30 ~ 오전 12:00
                                <br />
                                <Link href='https://www.tacomakoreanschool.org/' target='_blank'>&gt;한국학교 홈페이지&lt;</Link></p>
                        </div>
                    </div>
                </div>
                <div className='service_section last_one'>

                </div>

            </section >
            <div className='title' >
                <p className='title-style'>교회 위치</p>
                <p className='subtitle-style'>Location </p>
            </div>
            <br />
            <section>
                <div className='map_section'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10846.614585254953!2d-122.47267004491583!3d47.18421748529249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549100492e173d13%3A0x7c95ea046cca1fc1!2s8001+Pine+St+S%2C+Lakewood%2C+WA+98499%2C+USA!5e0!3m2!1sen!2skr!4v1441865312583"
                        allowFullScreen loading='lazy'></iframe>
                </div>
            </section>
        </>
    );
}