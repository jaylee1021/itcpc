import { useEffect, useState } from "react";
import axios from "axios";
import '../css/page.css';

export default function GetLastSermonDate({ sermonSession }) {

    const [sermon, setSermon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let sermonSessionEng = sermonSession;
    if (sermonSession === '1부') {
        sermonSessionEng = '1st';
    } else if (sermonSession === '2부') {
        sermonSessionEng = '2nd';
    } else if (sermonSession === '3부') {
        sermonSessionEng = '3rd';
    }

    useEffect(() => {
        const fetchSermon = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons/${sermonSessionEng}`);
                const newSermon = response.data.sermons;
                const lastSermon = newSermon[newSermon.length - 1];
                setSermon(lastSermon);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchSermon();
    }, []);

    return (
        <>
            {sermon.date && (
                <>
                    {sermon.date.split('T')[0]}
                </>
            )}
        </>
    );
};