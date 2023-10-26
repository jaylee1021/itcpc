import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import '../css/page.css';
import '../css/sermons.css';
import SermonModal from "./SermonModal";
import Sermon_pagination from "./Sermon_pagination";
import SermonsList from "./SermonsList";

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
        for (let i = 0; i < sermonList.length; i++) {
            rows.push(
                <SermonsList sermon={sermonList[i]} key={sermonList[i]._id} />
            );
        }
        return rows.toReversed();
    };

    const handleSearchChange = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        sermonSearchResult(newSearchQuery);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <div>
                <input type="text" placeholder="찾기... (설교자, 설교 제목, 성경말씀, 또는 설교 날짜로 찾아보세요)" className="search_sermon" onChange={handleSearchChange} />
            </div>

            <Sermon_pagination totalPosts={sermon.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            <br />
            {searchQuery === '' ? currentPosts.map((sermon) => (
                <SermonsList sermon={sermon} key={sermon._id} />)) : renderSermon()
            }
            <Sermon_pagination totalPosts={sermon.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            <br />
        </>
    );
};;