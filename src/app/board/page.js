'use client';
import { useEffect, useState } from 'react';
import { LoadingCircle } from '../Component/Loading';
import BoardModal from '../Component/BoardModal';
import axios from 'axios';
import '../css/page.css';
import '../css/board.css';




export default function Main() {

    const [isLoading, setIsLoading] = useState(true);
    const [board, setBoard] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/boards`)
            .then((response) => {
                setBoard(response.data.boards.toReversed());
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <>
            <title>게시판</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <br />
            <br />
            <div className='title' >
                <p className='title-style'>게시판</p>
                <p className='subtitle-style'>Board</p>
            </div>
            {isLoading ? <LoadingCircle />
                :
                <section className='board_section'>
                    <div className='table_border'>
                        <table className='table'>
                            <thead>
                                <tr scope="col" className='board_tr'>
                                    <th className='board_col1'>포스터</th>
                                    <th className='board_col2'>이벤트</th>
                                    <th className='board_col3'>이벤트 날짜</th>
                                    <th className='board_col4'>조회수</th>
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
                </section>
            }
        </>
    );
};;;