import axios from "axios";
import { useEffect, useState } from "react";
import '../css/page.css';

export default function GetLastSermonDate({ sermonSession }) {

    const [sermon, setSermon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSermon = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons/${sermonSession}`);
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