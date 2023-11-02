import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import '../css/page.css';
import '../css/sermons.css';
import '../css/gallery.css';
import GalleryModal from "./GalleryModal";


export default function GetAllSermon() {

    const [photo, setPhoto] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [photoList, setPhotoList] = useState([]);
    const [photoToShow, setPhotoToShow] = useState([]);
    const [next, setNext] = useState(3);
    
    const photoPerPage = 20;
    let arrayforHoldingPhotos = [];

    useEffect(() => {

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/photos`)
            .then((response) => {
                setPhoto(response.data.photos);
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

        setPhotoList(results);
    }, [photo]);

    const renderPhoto = () => {
        let rows = [];
        if (photoList.length) {
            for (let i = 0; i < photoList.length; i++) {
                rows.push(
                    <div className='column' key={photoList[i]._id}>
                        <GalleryModal image={photoList[i].url} />
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

        return rows;
    };

    const handleSearchChange = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        photoSearchResult(newSearchQuery);
    };

    if (isLoading) return <div>로딩중...</div>;

    return (
        <>
            <div>
                <input type="text" placeholder="찾기..." className="search_sermon" onChange={handleSearchChange} />
            </div>

            {searchQuery === '' ?
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {photo.map((photo) => (
                        <div className='column' key={photo._id}>
                            <GalleryModal image={photo.url} />
                        </div>
                    ))}
                </div>
                :
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {renderPhoto()}
                </div>
            }

            <br />
        </>
    );
};