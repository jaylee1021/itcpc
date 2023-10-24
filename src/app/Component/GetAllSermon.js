import axios from "axios";
import { useEffect, useState } from "react";
import '../css/page.css';
import '../css/sermons.css';
import SermonModal from "./SermonModal";

export default function GetAllSermon() {

    const [sermon, setSermon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSermon = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermons`);
                setSermon(response.data.sermons);
                setIsLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchSermon();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            {sermon.toReversed().map((sermon) => (
                <div className="component_sermon_section" key={sermon._id}>
                    <div className="sermon_snap">
                        <a href='#'><img src={sermon.snap} className='sermon_snap' /></a>
                    </div>

                    <div className="sermon_info" >
                        <h3>
                            <SermonModal sermon={sermon} />
                        </h3>
                        <p className='date_time'>
                            {sermon.date.split('T')[0]} @ {sermon.session === 'First' ? '8:00 AM 1부' : null ||
                                sermon.session === 'Second' ? '09:30 AM 2부' : null ||
                                    sermon.session === 'Third' ? '11:00 AM 3부' : null} - {sermon.preacher} 목사
                        </p>
                    </div>
                </div>))}
        </>
    );
};;