'use client';
import React, { useState, useEffect } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";

import axios from "axios";
import BulletinModal from "../Component/BulletinModal";
import { LoadingCircle } from "../Component/Loading";

export default function PDFViewer() {
    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [file, setFile] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/bulletins`)
            .then((response) => {
                setFile(response.data.bulletins);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (isLoading) return <LoadingCircle />;

    return (
        <>
            <title>게시판</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
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
                                {file.map((singleFile) => {
                                    return (
                                        <tr key={singleFile._id}>
                                            <BulletinModal file={singleFile} />
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
}
