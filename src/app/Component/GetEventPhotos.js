'use client';
import { useEffect, useState } from "react";
import { LoadingCircle } from "./Loading";
import GalleryModal from "./GalleryModal";
import axios from "axios";
import '../css/page.css';
import '../css/sermons.css';
import '../css/gallery.css';

export default function GetEventPhotos({ eventName }) {

    const [photo, setPhoto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(12);
    const [isCompleted, setIsCompleted] = useState(false);
    const photoToDisplay = photo.slice(0, index);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/photos/${eventName}`)
            .then((response) => {
                setPhoto(response.data.photos.toReversed());
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const loadMore = () => {
        setIndex(index + 12);

        if (index >= photo.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    if (isLoading) return <LoadingCircle />;

    return (
        <>
            <>
                <div className="photoSection">
                    {photoToDisplay.map((photo) => (
                        <div className='column' key={photo._id}>
                            <GalleryModal image={photo.url} />
                        </div>
                    ))}
                </div>
                <div className="moreButton">
                    <br />
                    <br />
                    {isCompleted ? (
                        <button
                            onClick={loadMore}
                            type="button"
                            className="btn btn-danger disabled"
                        >
                            That's It
                        </button>
                    ) : (
                        <button onClick={loadMore} type="button" className="btn btn-danger">
                            더보기
                        </button>
                    )}
                </div>
            </>


        </>
    );
};