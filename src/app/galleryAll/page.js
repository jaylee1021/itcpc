'use client';
import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingCircle } from '../Component/Loading';
import axios from 'axios';
import '../css/page.css';
import '../css/galleryThumbnail.css';
import '../css/gallery.css';
import '../css/sermons.css';

export default function GalleryAll() {

    const [galleryThumbnails, setGalleryThumbnails] = useState([]);  // photo
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(12);
    const [isCompleted, setIsCompleted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [photoSearchList, setPhotoSearchList] = useState([]);
    const photoToDisplay = galleryThumbnails.slice(0, index);
    const searchToDisplay = photoSearchList.slice(0, index);
    const router = useRouter();

    useEffect(() => {
        const fetchGalleryThumbnail = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/galleryThumbnails`);
                const newThumb = response.data.galleryThumbnails;
                setGalleryThumbnails(newThumb);
                setIsLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchGalleryThumbnail();
    }, []);

    const photoSearchResult = useCallback((newSearchQuery) => {
        const results = galleryThumbnails.filter((singleThumbnail) => {
            return singleThumbnail.together.toLowerCase().includes(newSearchQuery.toLowerCase());
        });

        setPhotoSearchList(results);
    }, [galleryThumbnails]);

    const handleSearchChange = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        photoSearchResult(newSearchQuery);
        setIndex(12);
    };

    const loadMore = () => {
        setIndex(index + 12);

        if (index >= galleryThumbnails.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    const handleGallery = (gallery) => {
        let eventName = gallery.eventEngName;
        router.push(`/gallery/${eventName}`);
    };

    return (
        <>
            <title>갤러리</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>갤러리</p>
                <p className='subtitle-style'>Gallery</p>
            </div>
            {isLoading ? <LoadingCircle /> :
                <div className='gallery_section' style={{ maxWidth: '1522px' }}>
                    <div className="input_style">
                        <input type="text" placeholder="찾기... (이벤트 이름과 날자로 찾아 보실 수 있습니다)" className="search_sermon" onChange={handleSearchChange} />
                    </div>
                    {searchQuery === '' ?
                        <>
                            <div className="photoSection">
                                {photoToDisplay.map((photo) => (
                                    <article key={photo._id} className='padding10'>
                                        <div className='thumbnails_wrapper'>
                                            <img src={photo.url} onClick={() => handleGallery(photo)} className='thumbnail_image' />
                                            <div className='thumbnail_title'>
                                                <p>{photo.eventKorName}</p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <div className="moreButton">
                                <br />
                                {isCompleted ? (
                                    <button onClick={loadMore} type="button" className="nextButton disabled">
                                        That's It
                                    </button>
                                ) : (
                                    <button onClick={loadMore} type="button" className="nextButton">
                                        더보기
                                    </button>
                                )}
                            </div>
                        </>
                        :
                        <div>
                            {photoSearchList.length ?
                                (
                                    <>
                                        <div className="photoSection">
                                            {searchToDisplay.map((photo) => (
                                                <article key={photo._id} className='padding10'>
                                                    <div className='thumbnails_wrapper'>
                                                        <img src={photo.url} onClick={() => handleGallery(photo)} className='thumbnail_image' />
                                                        <div className='thumbnail_title'>
                                                            <p>{photo.eventKorName}</p>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                        <div className="moreButton">
                                            <br />
                                            {isCompleted ? (
                                                <button
                                                    onClick={loadMore}
                                                    type="button"
                                                    className="nextButton disabled"
                                                >
                                                    That's It
                                                </button>
                                            ) : (
                                                <button onClick={loadMore} type="button" className="nextButton">
                                                    더보기
                                                </button>
                                            )}
                                        </div>
                                    </>
                                ) : <div className="component_sermon_section" key={galleryThumbnails._id}>
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
                                </div >}
                        </div>
                    }
                </div>
            }
        </>
    );
}