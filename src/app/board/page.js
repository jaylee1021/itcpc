'use client';
import '../css/page.css';
import '../css/board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardModal from '../Component/BoardModal';
import 'bootstrap/dist/css/bootstrap.css';



export default function Main() {

    const [board, setBoard] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/boards`)
            .then((response) => {
                console.log(response.data.boards);
                setBoard(response.data.boards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const count = (singleBoard) => {
        singleBoard.count += 1;
        console.log(singleBoard.count);
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/boards/${singleBoard._id}`, singleBoard)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
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
                <div style={{ maxWidth: '980px', border: '1px solid black', borderRadius: '5px' }}>
                    <table className='table' style={{ verticalAlign: 'middle' }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">이벤트</th>
                                <th scope="col">이벤트 날짜</th>

                            </tr>
                        </thead>
                        {board.map((singleBoard) => {
                            return (
                                <tbody >
                                    <tr>
                                        <td >
                                            <div >
                                                <BoardModal image={singleBoard} />
                                            </div>
                                        </td>
                                        <td style={{ width: '60%' }}>
                                            {singleBoard.title}
                                        </td>
                                        <td style={{ width: '20%', }}>
                                            {singleBoard.eventDate}
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </section >
            <br />
            <br />
        </>
    );
};;;