'use client';
import { useEffect, useState } from "react";
import { LoadingCircle } from "./Loading";
import { useRouter } from "next/navigation";
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
    const [thumbnail, setThumbnail] = useState([]);
    const [currentEvent, setCurrentEvent] = useState([]);
    const photoToDisplay = photo.slice(0, index);
    const router = useRouter();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/photos/${eventName}`)
            .then((response) => {
                setPhoto(response.data.photos.toReversed());

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/galleryThumbnails`)
            .then((response) => {
                setThumbnail(response.data.galleryThumbnails);
                const thumbnail = response.data.galleryThumbnails;

                for (let i = 0; i < thumbnail.length; i++) {
                    if (thumbnail[i].eventEngName === eventName) {
                        setCurrentEvent(i + 1);
                    }
                }
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

    const routePrevOrNExt = (eventName) => {

        router.push(`/gallery/${eventName}`);
    };

    const goToGallery = () => {
        router.push(`/galleryAll`);
    };

    if (isLoading) return <LoadingCircle />;

    return (
        <>
            <div className="bottomButtons">
                <div>
                    {currentEvent - 1 === 0 ? null : <button onClick={() => routePrevOrNExt(thumbnail[currentEvent - 2].eventEngName)} className="btn btn-success buttonMargin">&lt;&lt;{thumbnail[currentEvent - 2].eventKorName}</button>}
                </div>
                <div>
                    {currentEvent ? currentEvent !== thumbnail.length ? <button onClick={() => routePrevOrNExt(thumbnail[currentEvent].eventEngName)} className="btn btn-success buttonMargin">{thumbnail[currentEvent].eventKorName}&gt;&gt;</button> : null : null}
                </div>
            </div>
            <div className="photoSection">
                {photoToDisplay.map((photo) => (
                    <div className='column' key={photo._id}>
                        <GalleryModal image={photo.url} />
                    </div>
                ))}
            </div>
            <div className="moreButton">
                {isCompleted ? (
                    <div>
                        <div>
                            {currentEvent - 1 === 0 ? null : <button onClick={() => routePrevOrNExt(thumbnail[currentEvent - 2].eventEngName)} className="btn btn-success buttonMargin">&lt;&lt;{thumbnail[currentEvent - 2].eventKorName}</button>}
                        </div>
                        <div>
                            <button
                                onClick={loadMore}
                                type="button"
                                className="btn btn-danger disabled"
                            >
                                That's It
                            </button>
                            <button onClick={goToGallery} type="button" className="btn btn-primary buttonMargin" >
                                갤러리 더보기
                            </button>
                        </div>
                        <div>
                            {currentEvent ? currentEvent !== thumbnail.length ? <button onClick={() => routePrevOrNExt(thumbnail[currentEvent].eventEngName)} className="btn btn-success buttonMargin">{thumbnail[currentEvent].eventKorName}&gt;&gt;</button> : null : null}
                        </div>
                    </div>
                ) : (
                    <div className="bottomButtons">
                        <div>
                            {currentEvent - 1 === 0 ? null : <button onClick={() => routePrevOrNExt(thumbnail[currentEvent - 2].eventEngName)} className="btn btn-success buttonMargin">&lt;&lt;{thumbnail[currentEvent - 2].eventKorName}</button>}
                        </div>
                        <div>
                            <button onClick={loadMore} type="button" className="btn btn-danger buttonMargin" >
                                더보기
                            </button>
                            <button onClick={goToGallery} type="button" className="btn btn-primary buttonMargin" >
                                갤러리 더보기
                            </button>
                        </div>
                        <div>
                            {currentEvent ? currentEvent !== thumbnail.length ? <button onClick={() => routePrevOrNExt(thumbnail[currentEvent].eventEngName)} className="btn btn-success buttonMargin">{thumbnail[currentEvent].eventKorName}&gt;&gt;</button> : null : null}
                        </div>
                    </div>
                )}


            </div>
        </>
    );
};