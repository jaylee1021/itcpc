'use client';
import Link from 'next/link';
import '../css/page.css';
import '../css/newComer.css';
import '../css/about.css';

export default function NewComer() {

    return (
        <>
            <title>타코마중앙장로교회</title>
            <section className='mainBannerCenter'>
                <div className='newComer_banner_wrapper'>
                    <img src='/new_comer_top_banner.jpg' className='mainBannerImage' />
                    <div className='newComer_banner_title'>
                        {/* <p>
                            새가족
                            <br />
                            New Comer
                        </p> */}
                    </div>
                </div>
            </section>
            <div className='title'>
                <p className='title-style'>새가족 등록 안내</p>
                <p className='subtitle-style'>Welcome Message</p>
            </div>
            <br />
            <section>
                <div >
                    <div className='newComer_section'>
                        <img src='/new_comer_banner.png' style={{ width: '80%', backgroundColor: 'white' }} />
                        <br />
                        <div className='top_background'>
                            <div className='new_comer_passage'>
                                <p className='new_comer_passage_title'>타코마중앙장로교회를 방문해 주신 여러분들을 주님의 이름으로 환영합니다. </p>
                                <p>타코마중앙장로교회에서 함께 신앙생활을 하시기 원하시는 분들께서는 매 주일 교회 본당 안내석에 위치한 새가족부 봉사자들의 안내를 받아 등록 해 주시기 바랍니다.</p>
                                <p style={{ margin: '0' }}>새가족으로 등록 하신 분들은 교회 소개와 안내, 소그룹안내(구역) 밑 새가족 교육에 참여하시면서 교회 생활에 필요한 도움을 받으시게 됩니다.</p>
                            </div>
                            <div className='new_comer_contacts'>
                                <div className='new_comer_contact phone'>
                                    <p>&nbsp;연락처(TEL): 253-589-8900</p>
                                </div>
                                <Link href='mailto:office@itcpc.org' className='new_comer_contact e-mail'>
                                    <p> &nbsp;Email: office@itcpc.org</p>
                                </Link>
                                <Link href='./serviceAndDirection' className='new_comer_contact direction'>
                                    <p>&nbsp;약도 및 예배시간(SERVICE & MAP)</p>
                                </Link>
                            </div>
                            <div className='new_comer_helper_section'>
                                <div className='new_comer_helper'>
                                    바나바(도우미)
                                </div>
                                <div className='new_comer_helper_description'>
                                    타코마중앙장로교회 새가족으로 등록하신 분들의 교회 생활 및 정착을 위해

                                    도움을 제공해 드립니다.
                                </div>
                            </div>
                            <div className='new_comer_helper_section'>
                                <div className='new_comer_helper'>
                                    새가족 성경공부
                                </div>
                                <div className='new_comer_helper_description'>
                                    새가족이 되신 성도님들께서는 4회에 걸친 교육을 통하여

                                    신앙 밑 교회 비전등을 배우며, 함께 공유하게 됩니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <div className='title'>
                <p className='title-style'>새가족 팀</p>
                <p className='subtitle-style'>Welcoming Committee</p>
            </div>
            <section className='staff_section'>
                <div className='profile_section'>
                    <img src='/pastor_james.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김용주 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor James Y. Kim
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
                    <img src='/pastor_james.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김용주 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor James Y. Kim
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
                    <img src='/pastor_james.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김용주 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor James Y. Kim
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
                    <img src='/pastor_james.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김용주 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor James Y. Kim
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
                    <img src='/pastor_james.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김용주 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor James Y. Kim
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
                    <img src='/pastor_james.png' className='pastor_image' />
                    <div className='profile_info'>
                        <p>
                            <span className='staff_name'>
                                김용주 목사
                            </span>
                            <br />
                            <span className='staff_eng_name'>
                                Pastor James Y. Kim
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
            </section>
        </>
    );
}