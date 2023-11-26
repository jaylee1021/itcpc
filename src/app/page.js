'use client';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinningBubble } from './Component/Loading';
import axios from 'axios';
import PhotoModal from './Component/PhotoModal';
import GetLastSermon from './Component/GetLastSermon';
import ShowBanner from './Component/ShowBanner';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
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
  const [liveLink, setLiveLink] = useState('');
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
        setFirstGallery(newThumb[newThumb.length - 3]);
        setSecondGallery(newThumb[newThumb.length - 2]);
        setThirdGallery(newThumb[newThumb.length - 1]);
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

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/scheduled/6559d0d05b3a057f10e39a29`)
      .then((response) => {
        const isScheduled = response.data.scheduled.scheduled;


        // If today is Sunday and the task hasn't been scheduled yet, call the scheduling function
        if (isScheduled === false) {
          scheduleSundayTask();
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function millisecondsSinceMidnight() {
    const currentDate = new Date(); // Get current date and time
    const hours = currentDate.getHours(); // Get the current hour
    const minutes = currentDate.getMinutes(); // Get the current minute
    const seconds = currentDate.getSeconds(); // Get the current second

    // Calculate the elapsed time since midnight in milliseconds
    const elapsedMilliseconds = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
    return elapsedMilliseconds; // Return the total milliseconds elapsed since midnight
  }

  function scheduleSundayTask() {
    const currentDate = new Date();
    // Calculate the delay until the next Sunday at 08:40 AM PST
    let delayToNextSunday = 7 - currentDate.getDay(); // Calculate the days until next Sunday

    if (delayToNextSunday === 0) delayToNextSunday = 7; // If it's Sunday today, set it to 7 days

    const millisecondsElapsed = millisecondsSinceMidnight();

    const delayToStart = 27876000 - (millisecondsElapsed); // Calculate milliseconds until next Sunday 07:50 AM PST
    console.log('delaytostart', delayToStart);
    // Schedule the task to start on this Sunday at 08:40 AM PST and repeat every 7 days
    setTimeout(function () {
      runTask(); // Execute the task

      // Set an interval to run the task every 7 days (604800000 milliseconds = 7 days)
      setInterval(runTask, 7 * 24 * 60 * 60 * 1000);

      // Mark the task as scheduled on your server side
      axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/scheduled/6559d0d05b3a057f10e39a29`, { scheduled: true })
        .then((response) => {
          console.log('scheduled');
        })
        .catch((err) => {
          console.log(err);
        });

    }, delayToStart);
  }

  function runTask() {
    // Your task to be executed on Sundays at 07:50 AM PST
    console.log("Task started on Sunday at 07:50 AM PST");
    // Include your specific code or function to run here
    setLiveLink(<Link href='https://www.youtube.com/channel/UC8ilaSeso9X1qNQq00WxKeA/live' target='_blank' className='live_stream_link'>&gt;라이브 온라인 예배&lt;</Link>);

    // Schedule the task to end after 4 hours and 40 mins (roughly at 12:30 PM PST)
    setTimeout(function () {
      console.log("Task ended at 12:30 PM PST");
      setLiveLink('');
    }, 16800000);
  }

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
      <div style={{ textAlign: 'center', animationDuration: '5s' }} className='animate__animated animate__flash animate__infinite'>
        {liveLink}
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
              <Link href='./serviceAndDirection'><img src='/direction.png' className='articleImage' /></Link>
              <div className='four_button_title'>
                <p>예배안내/약도</p>
              </div>
            </div>
          </div>
          <div className='padding10'>
            <div className='imageWrapper'>
              <Link href='./ministry'><img src='/church_school.png' className='articleImage' /></Link>
              <div className='four_button_title'>
                <p>미니스트리</p>
              </div>
            </div>
          </div>
        </div>
        <div className='videoSection second_section'>
          <div className='padding10'>
            <div className='imageWrapper'>
              <Link href='./newComer'><img src='/new_comer.png' className='articleImage' /></Link>
              <div className='four_button_title'>
                <p>새가족</p>
              </div>
            </div>
          </div>
          <div className='padding10'>
            <div className='imageWrapper'>
              <Link href='https://www.tacomakoreanschool.org/'>
                <img src='/korean_school.png' className='articleImage' />
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
              <img src={firstGallery.url} onClick={() => handleGallery(firstGallery)} className='whats_new_image' />
            </div>
            <div className='more-info'>
              <p>{firstGallery.eventKorName}</p>
            </div>
          </div>
        </article>
        <article className='whats_new'>
          <div className='whats_new_image_wrapper'>
            <div className=''>
              <img src={secondGallery.url} onClick={() => handleGallery(secondGallery)} className='whats_new_image' />
            </div>
            <div className='more-info'>
              <p>{secondGallery.eventKorName}</p>
            </div>
          </div>
        </article>
        <article className='whats_new'>
          <div className='whats_new_image_wrapper'>
            <div className=''>
              <img src={thirdGallery.url} onClick={() => handleGallery(thirdGallery)} className='whats_new_image' />
            </div>
            <div className='more-info'>
              <p>{thirdGallery.eventKorName}</p>
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
