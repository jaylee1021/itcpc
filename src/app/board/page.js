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

    const count = () => {
        let index = 0;
        for (let i = 1; i < board.length + 1; i++) {
            index = i;
            return index;
        }
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
                <div style={{ maxWidth: '1440px', border: '1px solid black', borderRadius: '10px' }}>
                    {/* <table>
                        <thead>
                            <tr>
                                <th style={{ flex: '25%' }}>
                                    #
                                </th>
                                <th style={{ width: '100%' }}>
                                    title
                                </th>
                                <th style={{ width: '100%' }}>
                                    date
                                </th>
                            </tr>
                        </thead>
                        {board.map((singleBoard) => {
                            return (

                                <tbody>
                                    <tr>
                                        <td>
                                            {singleBoard.count}
                                        </td>
                                        <td>
                                            <BoardModal image={singleBoard} />
                                        </td>
                                        <td>
                                            {singleBoard.eventDate}
                                        </td>
                                    </tr>



                                </tbody>

                            );
                        })}
                    </table> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">이벤트</th>
                                <th scope="col">이벤트 날짜</th>

                            </tr>
                        </thead>
                        {board.map((singleBoard) => {
                            return (

                                <tbody>
                                    <tr>
                                        <td>
                                            {singleBoard.count}
                                        </td>
                                        <td>
                                            <BoardModal image={singleBoard} />
                                        </td>
                                        <td>
                                            {singleBoard.eventDate}
                                        </td>
                                    </tr>



                                </tbody>

                            );
                        })}
                    </table>
                </div>
            </section >
        </>
    );
};;;