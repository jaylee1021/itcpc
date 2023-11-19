'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinningBubble } from './Component/Loading';
import axios from 'axios';
import PhotoModal from './Component/PhotoModal';
import GetLastSermon from './Component/GetLastSermon';
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

  function runTask() {
    // Your task to be executed on Sundays at 07:50 AM PST
    console.log("Task started on Sunday at 07:50 AM PST");
    // Include your specific code or function to run here
    setLiveLink(<Link href='https://www.youtube.com/channel/UC8ilaSeso9X1qNQq00WxKeA/live' target='_blank' className='live_stream_link'>&gt;라이브 온라인 예배&lt;</Link>);

    // End the task at 12:30 PM PST on the same day
    const endTaskTime = new Date();
    endTaskTime.setUTCHours(19, 30, 0, 0); // Setting 12:30 PM PST in UTC (19:30 UTC)

    // Calculate the delay until 12:30 PM PST on the same Sunday
    const delayToEnd = endTaskTime - new Date();

    // Schedule the task to end at 12:30 PM PST
    setTimeout(function () {
      console.log("Task ended at 12:30 PM PST");
      // Include any cleanup or finalization code here
      setLiveLink('');
    }, delayToEnd);
  }

  const [scheduled, setScheduled] = useState('');

  function scheduleSundayTask() {
    const taskScheduled = () => {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/scheduled/6559d0d05b3a057f10e39a29`)
        .then((response) => {
          console.log('response', response.data.scheduled.scheduled);
          setScheduled(response.data.scheduled.scheduled);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    taskScheduled();

    if (!scheduled) {
      const currentDate = new Date();

      // Calculate the delay until the next Sunday at 07:50 AM PST
      const delayToNextSunday = 7 - ((currentDate.getDay() + 6) % 7); // Calculate the days until next Sunday
      const delayToStart = delayToNextSunday * 24 * 60 * 60 * 1000 - (currentDate % (24 * 60 * 60 * 1000)) + (7 * 60 * 60 * 1000 + 50 * 60 * 1000); // Calculate milliseconds until next Sunday 07:50 AM PST

      // Schedule the task to start on the next Sunday at 07:50 AM PST
      setTimeout(function () {
        runTask(); // Execute the task

        // Set an interval to run the task every 7 days (604800000 milliseconds = 7 days)
        setInterval(runTask, 7 * 24 * 60 * 60 * 1000);

        // Mark the task as scheduled in localStorage
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/scheduled/6559d0d05b3a057f10e39a29`, { scheduled: true })
          .then((response) => {
            console.log('response', response.data.scheduled.scheduled);
            console.log('scheduled');
          })
          .catch((err) => {
            console.log(err);
          });

      }, delayToStart);
    }
  }

  // Call the function to schedule the task
  scheduleSundayTask();



  if (isLoading) return <LoadingSpinningBubble />;

  return (
    <>
      <title>타코마중앙장로교회</title>
      <section className='mid-banner'>
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-position" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/banner1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/banner2.png" className="d-block w-100" alt="..." />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
              <div href='https://www.tacomakoreanschool.org/'>
                <img src='/korean_school.png' className='articleImage' /></div>
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
