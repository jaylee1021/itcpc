'use client';
import '../css/page.css';
import '../css/board.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardModal from '../Component/BoardModal';



export default function Main() {

    const [board, setBoard] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/boards`)
            .then((response) => {
                setBoard(response.data.boards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <>
            <title>게시판</title>
            <section >
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <br />
            <br />
            <div className='title' >
                <p className='title-style'>게시판</p>
                <p className='subtitle-style'>Board</p>
            </div>
            <section className='board_section'>
                <div style={{ maxWidth: '980px', border: '1px solid black', borderRadius: '10px' }}>
                    <table className='table' style={{ verticalAlign: 'middle' }}>
                        <thead>
                            <tr scope="col" style={{ display: 'flex' }}>
                                <th style={{ width: '20%', padding: '10px' }}>링크</th>
                                <th style={{ width: '50%', padding: '10px' }}>이벤트</th>
                                <th style={{ width: '20%', padding: '10px' }}>이벤트 날짜</th>
                                <th style={{ width: '10%', padding: '10px' }}>조회수 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {board.map((singleBoard) => {
                                return (
                                    <tr key={singleBoard._id} >
                                        <BoardModal image={singleBoard} />
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section >
            <br />
            <br />
        </>
    );
};;;