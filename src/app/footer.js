'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import '../app/css/globals.css';
import '../app/css/footer.css';

export default function Footer() {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [user_name, setUserName] = useState('');
    const [user_email, setUserEmail] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                alert('메세지가 성공적으로 보내졌습니다. 최대한 빨리 연락드리겠습니다. 감사합니다.');
                setMessage('');
                setUserName('');
                setUserEmail('');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <footer>
            <nav className="navbar sticky-bottom footer-style" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='footer-group'>
                    <div className='footer-section'>
                        <div className='logo-wrap'>
                            <Link className="navbar-brand" href="/"><img src='/tcpc_logo_white.png' className='footer-logo' /></Link>
                        </div>
                        <br />
                        <p>
                            TEL: 253-589-8990, 6873, 6874
                            <br />
                            FAX: 253-589-6875
                            <br />
                            <Link className='email_link' href='mailto:office@itcpc.org'>office@itcpc.org</Link>
                        </p>
                        <p>
                            8001 Pine St. S. Lakewood, WA 98499
                        </p>
                        <br />
                        <p>
                            <Link href='https://www.youtube.com/@TCPCTV' target='_blank'>
                                <img src='/youtube.webp' className='social-icon' />
                            </Link>
                            <Link href='https://www.facebook.com/itgroup.tcpc' target='_blank'>
                                <img src='/facebook.webp' className='social-icon' />
                            </Link>
                        </p>
                        <p>
                            ©2023 by Tacoma Central Presbyterian Church.
                            <br />
                            All rights reserved.
                        </p>
                    </div>
                    <div className='footer-section'>
                        <form className='footer-question' ref={form} onSubmit={sendEmail}>
                            <p>
                                질문이 있으신가요?
                            </p>
                            <div>
                                <input type='text' name='user_name' value={user_name} onChange={handleUserName} className='footer-input' placeholder='이름' required />
                            </div>
                            <br />
                            <div>
                                <input type='email' name='user_email' value={user_email} onChange={handleUserEmail} className='footer-input' placeholder='이메일' required />
                            </div>
                            <br />
                            <div>
                                <textarea className='footer-message' name='message' value={message} onChange={handleMessage} placeholder='메세지' required />
                            </div>

                            <div className='footer-button-to-right'>
                                <input type='submit' className='footer-button' value={'보내기'} />
                            </div>
                        </form>
                    </div>

                </div>
            </nav >
        </footer >
    );
}