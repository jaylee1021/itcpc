import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { LoadingCircle } from "./Loading";
import Sermon_pagination from "./Sermon_pagination";
import SermonsList from "./SermonsList";
import '../css/page.css';
import '../css/sermons.css';

export default function GetAllSermon() {

    const [sermon, setSermon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const [searchQuery, setSearchQuery] = useState('');
    const [sermonList, setSermonList] = useState([]);

    useEffect(() => {
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons`)
            .then((response) => {
                setCurrentPosts(response.data.sermons.toReversed().slice(firstPostIndex, lastPostIndex));
                setSermon(response.data.sermons);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentPage]);

    const sermonSearchResult = useCallback((newSearchQuery) => {
        const results = sermon.filter((singleSermon) => {
            return singleSermon.together.toLowerCase().includes(newSearchQuery.toLowerCase());
        });

        setSermonList(results);
    }, [sermon]);

    const renderSermon = () => {
        let rows = [];
        if (sermonList.length) {
            for (let i = 0; i < sermonList.length; i++) {
                rows.push(
                    <SermonsList sermon={sermonList[i]} key={sermonList[i]._id} />
                );
            }
        } else {
            rows.push(
                <div className="component_sermon_section" key={sermon._id}>
                    <div className="sermon_snap">
                        <img src='404_not_found.png' className='articleImage' />
                    </div>
                    <div className="sermon_info" >
                        <h3>
                            <h3>검색 결과가 없습니다.</h3>
                        </h3>
                        <p style={{ paddingRight: '400px' }}>
                            <h3>철자를 확인 하시고 다시 검색 해 주세요.</h3>
                        </p>
                    </div>
                </div >
            );
        }

        return rows.toReversed();
    };

    const handleSearchChange = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        sermonSearchResult(newSearchQuery);
    };

    if (isLoading) return <LoadingCircle />;

    return (
        <>
            <div>
                <input type="text" placeholder="찾기... (설교자, 설교제목, 성경구절, 또는 설교 날짜로 찾아 보실 수 있습니다)" className="search_sermon" onChange={handleSearchChange} />
                (왼쪽 사진을 클릭하시면 설교를 보실 수 있습니다.)
            </div>

            {searchQuery === '' ?
                <div>
                    <Sermon_pagination totalPosts={sermon.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                    <br />
                    {currentPosts.map((sermon) => (
                        <SermonsList sermon={sermon} key={sermon._id} />))}
                    <Sermon_pagination totalPosts={sermon.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                </div>
                :
                <div>
                    <Sermon_pagination totalPosts={sermonList.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                    <br />
                    {renderSermon()}
                    <Sermon_pagination totalPosts={sermonList.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                </div>
            }
        </>
    );
};