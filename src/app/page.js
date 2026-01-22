'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinningBubble } from './Component/Loading';
import axios from 'axios';
import PhotoModal from './Component/PhotoModal';
import GetLastSermon from './Component/GetLastSermon';
import ShowBanner from './Component/ShowBanner';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import './css/page.css';
import './css/gallery.css';

export default function Home() {

  const [firstBoard, setFirstBoard] = useState([]);
  const [secondBoard, setSecondBoard] = useState([]);
  const [thirdBoard, setThirdBoard] = useState([]);
  const [fourthBoard, setFourthBoard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstGallery, setFirstGallery] = useState([]);
  const [secondGallery, setSecondGallery] = useState([]);
  const [thirdGallery, setThirdGallery] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/boards`);
        const newBoard = response.data.boards;
        setFirstBoard(newBoard[0]);
        setSecondBoard(newBoard[newBoard.length - 3]);
        setThirdBoard(newBoard[newBoard.length - 2]);
        setFourthBoard(newBoard[newBoard.length - 1]);
        setIsLoading(false);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchBoard();
  }, []);

  useEffect(() => {
    const fetchGalleryThumbnail = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/galleryThumbnails`);
        const newThumb = response.data.galleryThumbnails;
        setFirstGallery(newThumb[0]);
        setSecondGallery(newThumb[1]);
        setThirdGallery(newThumb[2]);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchGalleryThumbnail();
  }, []);

  const handleGallery = (gallery) => {
    let eventName = gallery.eventEngName;
    router.push(`/gallery/${eventName}`);
  };

  if (isLoading) return <LoadingSpinningBubble />;

  return (
    <>
      <title>타코마중앙장로교회</title>
      <section className='mid-banner'>
        {<ShowBanner />}
      </section>
      <div className='title' >
        <p className='title-style'>주일 예배</p>
        <p className='subtitle-style'>Sunday Worship</p>
      </div>
      <section className='videoSection'>
        <GetLastSermon sermonSession='1부' />
        <GetLastSermon sermonSession='2부' />
        <GetLastSermon sermonSession='3부' />
      </section>
      <br />
      <div className='title'>
        <p className='title-style'>소식</p>
        <p className='subtitle-style'>News</p>
      </div>
      <section className='videoSection'>
        <div className='news_body'>
          <div className='news_wrapper'>
            <div className='news_image' style={{ backgroundImage: firstBoard.snap ? `url(${firstBoard.snap})` : 'none' }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{firstBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={firstBoard.url} /></p>
              </div>
            </div>
            <div className='news_image' style={{ backgroundImage: secondBoard.snap ? `url(${secondBoard.snap})` : 'none' }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{secondBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={secondBoard.url} /></p>
              </div>
            </div>
            <div className='news_image' style={{ backgroundImage: thirdBoard.snap ? `url(${thirdBoard.snap})` : 'none' }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{thirdBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={thirdBoard.url} /></p>
              </div>
            </div>
            <div className='news_image' style={{ backgroundImage: fourthBoard.snap ? `url(${fourthBoard.snap})` : 'none' }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{fourthBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={fourthBoard.url} /></p>
              </div>
            </div>
          </div >
        </div>
      </section >
      <section className='videoSection four_button_margin'>
        <div className='videoSection second_section'>
          <div className='padding10'>
            <div className='imageWrapper'>
              <Link href='./serviceAndDirection'>
                <Image
                  src='/direction.png'
                  className='articleImage'
                  alt='direction'
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <div className='four_button_title'>
                <p>예배안내/약도</p>
              </div>
            </div>
          </div>
          <div className='padding10'>
            <div className='imageWrapper'>
              <Link href='./ministry'>
                <Image
                  src='/church_school.png'
                  className='articleImage'
                  alt='church_school'
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <div className='four_button_title'>
                <p>미니스트리</p>
              </div>
            </div>
          </div>
        </div>
        <div className='videoSection second_section'>
          <div className='padding10'>
            <div className='imageWrapper'>
              <Link href='./newComer'>
                <Image
                  src='/new_comer.png'
                  className='articleImage'
                  alt='new_comer'
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <div className='four_button_title'>
                <p>새가족</p>
              </div>
            </div>
          </div>
          <div className='padding10'>
            <div className='imageWrapper'>
              <Link href='https://www.tacomakoreanschool.org/' target='_blank'>
                <Image
                  src='/korean_school.png'
                  className='articleImage'
                  alt='korean_school'
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <div className='four_button_title'>
                <p>한국학교</p>
              </div>
            </div>
          </div>
        </div>

      </section >
      <div className='title'>
        <p className='title-style'>새가족 안내</p>
        <p className='subtitle-style'>New Comer</p>
      </div>
      <section className='new_comer'>
        <div className='new_comer_content'>
          <p>타코마중앙장로교회를 방문해 주신 여러분들을 주님의 이름으로 환영합니다. </p>
          <p>타코마중앙장로교회에서 함께 신앙생활을 하시기 원하시는 분들께서는 매 주일 교회 본당 안내석에 위치한 새가족부 봉사자들의 안내를 받아 등록 해 주시기 바랍니다.</p>
          <p>새가족으로 등록 하신 분들은 교회 소개와 안내, 소그룹안내(구역) 밑 새가족 교육에 참여하시면서 교회 생활에 필요한 도움을 받으시게 됩니다.</p>
        </div>
      </section>
      <div className='title'>
        <p className='title-style'>주일스케치</p>
        <p className='subtitle-style'>What's New</p>
      </div>
      <section className='videoSection'>
        <article className='whats_new'>
          <div className='whats_new_image_wrapper'>
            <div className=''>
              {firstGallery?.url && (
                <Image
                  src={firstGallery.url}
                  onClick={() => handleGallery(firstGallery)}
                  className='whats_new_image'
                  height={300}
                  width={300}
                  alt='gallery1'
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div className='more-info'>
              <p>{firstGallery?.eventKorName || ''}</p>
            </div>
          </div>
        </article>
        <article className='whats_new'>
          <div className='whats_new_image_wrapper'>
            <div className=''>
              {secondGallery?.url && (
                <Image
                  src={secondGallery.url}
                  onClick={() => handleGallery(secondGallery)}
                  className='whats_new_image'
                  height={300}
                  width={300}
                  alt='gallery2'
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div className='more-info'>
              <p>{secondGallery?.eventKorName || ''}</p>
            </div>
          </div>
        </article>
        <article className='whats_new'>
          <div className='whats_new_image_wrapper'>
            <div className=''>
              {thirdGallery?.url && (
                <Image
                  src={thirdGallery.url}
                  onClick={() => handleGallery(thirdGallery)}
                  className='whats_new_image'
                  height={300}
                  width={300}
                  alt='gallery3'
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div className='more-info'>
              <p>{thirdGallery?.eventKorName || ''}</p>
            </div>
          </div >
        </article>
      </section>
      <div className='whats_new_view_more_wrapper'>
        <Link href='./galleryAll'><button type="button" className="nextButton"> 갤러리 더보기</button></Link >
      </div>
    </>
  );
};
