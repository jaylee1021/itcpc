'use client';
import React, { useState, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "next/navigation";
import { LoadingCircle } from "../../Component/Loading";
import Pagination_component from "../../Component/Pagination_component";
import BulletinModal from "../../Component/BulletinModal";
import axios from "axios";
import '../../css/page.css';
import '../../css/sermons.css';
import '../../css/board.css';

export default function Bulletins() {

    const { language } = useParams();

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [file, setFile] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [currentBulletins, setCurrentBulletins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);

    const [searchQuery, setSearchQuery] = useState('');
    const [bulletinList, setBulletinList] = useState([]);

    useEffect(() => {
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/bulletins/${language}`)
            .then((response) => {
                setFile(response.data.bulletins);
                setCurrentBulletins(response.data.bulletins.slice(firstPostIndex, lastPostIndex));
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentPage]);

    const bulletinSearchResult = useCallback((newSearchQuery) => {
        const results = file.filter((singleBulletin) => {
            return singleBulletin.date.includes(newSearchQuery);
        });

        setBulletinList(results);
    }, [file]);

    const renderBulletin = () => {
        let rows = [];
        if (bulletinList.length) {
            for (let i = 0; i < bulletinList.length; i++) {
                rows.push(
                    <tr key={i}>
                        <BulletinModal file={bulletinList[i]} index={Math.abs(i - bulletinList.length)} />
                    </tr>
                );
            }
        } else {
            return (
                <div className="component_sermon_section" key={file._id}>
                    <div className="sermon_snap">
                        <img src='404_not_found.png' className='articleImage' />
                    </div>
                    <div className="sermon_info" >
                        <h3>
                            검색 결과가 없습니다.
                            <br />
                            날짜를 확인 하시고 다시 검색 해 주세요.
                        </h3>
                    </div>
                </div >
            );
        }

        return rows;
    };

    const handleSearchChange = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        bulletinSearchResult(newSearchQuery);
    };

    if (isLoading) return <LoadingCircle />;

    return (
        <>
            <title>주보</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            {language === 'km' ?
                <div className='title' >
                    <p className='title-style'>주보</p>
                </div>
                :
                <div className='title' >
                    <p className='title-style'>EM Bulletin</p>
                </div>
            }

            {isLoading ? <LoadingCircle />
                :
                <section className="bulletin_section">
                    {language === 'km' ?
                        <div className='bulletin_wrapper'>
                            <div>
                                <input type="text" placeholder="주보 찾기... (주보 날짜로 찾아 보실 수 있습니다)" className="search_sermon" onChange={handleSearchChange} />
                            </div>
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
                                        {searchQuery === '' ?
                                            currentBulletins.map((singleFile, index) => {
                                                return (
                                                    <tr key={singleFile._id}>
                                                        <BulletinModal file={singleFile} index={Math.abs(index + (postsPerPage * (currentPage - 1)) - file.length)} />
                                                    </tr>
                                                );
                                            })
                                            :
                                            renderBulletin()
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <div className='bulletin_wrapper'>
                            <div>
                                <input type="text" placeholder="Search bulletins... (You can search bulletins by date)" className="search_sermon" onChange={handleSearchChange} />
                            </div>
                            <div className="bulletin_pagination">
                                <Pagination_component totalPosts={file.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                            </div>
                            <div className='table_border'>
                                <table className='table' >
                                    <thead>
                                        <tr scope="col" className='board_tr'>
                                            <th className='bulletin_col1'>Number</th>
                                            <th className='bulletin_col2'>Bulletin</th>
                                            <th className='bulletin_col3'>Date</th>
                                            <th className='bulletin_col4' style={{ paddingLeft: '0' }}>Views</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {searchQuery === '' ?
                                            currentBulletins.map((singleFile, index) => {
                                                return (
                                                    <tr key={singleFile._id}>
                                                        <BulletinModal file={singleFile} index={Math.abs(index + (postsPerPage * (currentPage - 1)) - file.length)} />
                                                    </tr>
                                                );
                                            })
                                            :
                                            renderBulletin()
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </section>
            }
        </>
    );
}
