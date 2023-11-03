'use client';
import '../css/page.css';
import '../css/board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardModal from '../Component/BoardModal';


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
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    count
                                </th>
                                <th>
                                    title
                                </th>
                                <th>
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
                    </table>
                </div>
            </section >
        </>
    );
};;;