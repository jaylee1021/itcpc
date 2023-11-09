import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import '../css/page.css';
import '../css/sermons.css';
import '../css/gallery.css';
import GalleryModal from "./GalleryModal";
import { LoadingLine, LoadingCircle } from "./Loading";



export default function GetAllSermon() {

    const [photo, setPhoto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(15);
    const [isCompleted, setIsCompleted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [photoSearchList, setPhotoSearchList] = useState([]);
    const photoToDisplay = photo.slice(0, index);
    const searchToDisplay = photoSearchList.slice(0, index);



    useEffect(() => {

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/photos`)
            .then((response) => {
                setPhoto(response.data.photos.toReversed());
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const photoSearchResult = useCallback((newSearchQuery) => {
        const results = photo.filter((singlePhoto) => {
            return singlePhoto.together.toLowerCase().includes(newSearchQuery.toLowerCase());
        });

        setPhotoSearchList(results);
    }, [photo]);

    const renderPhoto = () => {
        let rows = [];
        if (photoSearchList.length) {
            for (let i = 0; i < photoSearchList.length; i++) {
                rows.push(
                    <div className='column' key={photoSearchList[i]._id}>
                        <GalleryModal image={photoSearchList[i].url} />
                    </div>
                );
            }
        } else {
            rows.push(
                <div className="component_sermon_section" key={photo._id}>
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
                </div >
            );
        }

        return rows.toReversed();
    };

    const handleSearchChange = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        photoSearchResult(newSearchQuery);
        setIndex(15);
    };

    const loadMore = () => {
        setIndex(index + 15);

        if (index >= photo.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    if (isLoading) return <LoadingCircle />;

    return (
        <>
            <div className="input_style">
                <input type="text" placeholder="찾기... (이벤트 이름과 날자로 찾아 보실 수 있습니다)" className="search_sermon" onChange={handleSearchChange} />
            </div>

            {searchQuery === '' ?
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
                :
                <div>
                    {photoSearchList.length ?
                        (
                            <>
                                <div className="photoSection">
                                    {searchToDisplay.map((photo) => (
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
                        ) : <div className="component_sermon_section" key={photo._id}>
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
        </>
    );
};