import axios from "axios";
import { useEffect, useState } from "react";
import '../css/page.css';
import SermonModal from "./SermonModal";
import { LoadingLine } from "./Loading";

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

    if (isLoading) return (<LoadingLine />);

    return (
        <>
            {sermon.date && (
                <>
                    <SermonModal sermon={sermon} />
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
                </>
            )}
        </>
    );
};