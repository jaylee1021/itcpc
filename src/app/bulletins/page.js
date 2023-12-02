'use client';
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { LoadingCircle } from "../Component/Loading";
import Pagination_component from "../Component/Pagination_component";
import BulletinModal from "../Component/BulletinModal";
import axios from "axios";
import '../css/page.css';
import '../css/sermons.css';
import '../css/board.css';

export default function PDFViewer() {
    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [file, setFile] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [currentBulletins, setCurrentBulletins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);

    useEffect(() => {
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/bulletins`)
            .then((response) => {
                setFile(response.data.bulletins);
                setCurrentBulletins(response.data.bulletins.slice(firstPostIndex, lastPostIndex));
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentPage]);

    if (isLoading) return <LoadingCircle />;

    return (
        <>
            <title>주보</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>주보</p>
                <p className='subtitle-style'>Bulletin</p>
            </div>
            {isLoading ? <LoadingCircle />
                :
                <section className="bulletin_section">
                    <div className='bulletin_wrapper'>
                        <div className="bulletin_pagination">
                            <Pagination_component totalPosts={file.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                        </div>
                        <div className='table_border'>
                            <table className='table' >
                                <thead>
                                    <tr scope="col" className='board_tr'>
                                        <th className='bulletin_col1'>번호</th>
                                        <th className='bulletin_col2'>주보</th>
                                        <th className='bulletin_col3'>날짜</th>
                                        <th className='bulletin_col4' style={{ paddingLeft: '0' }}>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentBulletins.map((singleFile, index) => {
                                        return (
                                            <tr key={singleFile._id}>
                                                <BulletinModal file={singleFile} index={Math.abs(index + (postsPerPage * (currentPage - 1)) - file.length)} />
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
