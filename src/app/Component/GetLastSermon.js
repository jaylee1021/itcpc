import axios from "axios";
import { useEffect, useState } from "react";
import '../css/page.css';
import SermonModal from "./SermonModal";

export default function GetLastSermon({ sermonSession }) {

    const [sermon, setSermon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let time = '';

    if (sermonSession === 'First') {
        time = '8:00 AM';
    } else if (sermonSession === 'Second') {
        time = '9:30 AM';
    } else if (sermonSession === 'Third') {
        time = '11:00 AM';
    }

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
                    <a href='#'><img src={sermon.snap} className='articleImage' /></a>
                    <div className='articleTitle'>
                        <p>
                            {sermon.title}
                            <br />
                            {sermon.passage}
                        </p>
                        <p className='date_time'>
                            {sermon.date.split('T')[0]} @ {time} - {sermon.preacher} 목사
                        </p>
                    </div>
                </>
            )}
        </>
    );
};;