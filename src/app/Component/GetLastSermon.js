import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingLine } from "./Loading";
import SermonModalMainPage from "./SermonModalMainPage";
import '../css/page.css';

export default function GetLastSermon({ sermonSession }) {

    const [sermon, setSermon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let time = '';
    let sermonSessionEng = sermonSession;
    if (sermonSession === '1부') {
        sermonSessionEng = '1st';
        time = '8:00 AM';
    } else if (sermonSession === '2부') {
        sermonSessionEng = '2nd';
        time = '9:30 AM';
    } else if (sermonSession === '3부') {
        sermonSessionEng = '3rd';
        time = '11:00 AM';
    }

    useEffect(() => {
        const fetchSermon = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons/${sermonSessionEng}`);
                const newSermon = response.data.sermons;
                const lastSermon = newSermon[newSermon.length - 1];
                setSermon(lastSermon);
                setIsLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchSermon();
    }, []);

    const handleSermon = () => {
        switch (sermonSession) {
            case '1부':
                return (
                    <>
                        {sermon.date.split('T')[0]} 1부 주일 예배와 성가대 찬양
                    </>
                );
            case '2부':
                return (
                    <>
                        {sermon.date.split('T')[0]} 2부 주일 영어예배
                    </>
                );
            case '3부':
                return (
                    <>
                        {sermon.date.split('T')[0]} 3부 주일 예배와 실로암 찬양대
                    </>
                );
        };
    };

    if (isLoading) return (<LoadingLine />);

    return (
        <article className='sermon_padding10'>
            {sermon.date && (
                <div className='imageWrapper'>
                    <SermonModalMainPage sermon={sermon} />
                    <div className='articleTitle'>
                        <p>
                            {sermon.title}
                            <br />
                            {sermon.passage}
                        </p>
                        {sermonSession === '1부' || sermonSession === '3부' ? (
                            <p className='date_time'>
                                {sermon.date.split('T')[0]} @ {time} - {sermon.preacher} 목사
                            </p>
                        ) : (
                            <p className='date_time'>
                                {sermon.date.split('T')[0]} @ {time} - Rev. {sermon.preacher}
                            </p>
                        )}
                    </div>
                </div>
            )}
            <div className='articleSub'>
                {sermon.date && handleSermon()}
            </div>
        </article>
    );
};