'use client';
import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoModal from './Component/PhotoModal';
import GetLastSermon from './Component/GetLastSermon';
import GetLastSermonDate from './Component/GetLastSermonDate';

export default function Home() {

  const [firstBoard, setFirstBoard] = useState([]);
  const [secondBoard, setSecondBoard] = useState([]);
  const [thirdBoard, setThirdBoard] = useState([]);
  const [fourthBoard, setFourthBoard] = useState([]);

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

  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <title>타코마중앙장로교회</title>
      <section >
        <img src='/main_banner.png' className='mainBannerImage' />
      </section>
      <br />
      <br />
      <div className='title' >
        <p className='title-style'>주일 예배</p>
        <p className='subtitle-style'>Sunday Worship</p>
      </div>

      <section className='videoSection'>
        <article className='sermon_padding10'>
          <div className='imageWrapper'>
            <GetLastSermon sermonSession='1부' />
          </div>
          <div className='articleSub'>
            <GetLastSermonDate sermonSession='1부' /> 1부 주일예배와 성가대 찬양
          </div>
        </article>
        <article className='sermon_padding10'>
          <div className='imageWrapper'>
            <GetLastSermon sermonSession='2부' />
          </div>
          <div className='articleSub'>
            <GetLastSermonDate sermonSession='2부' /> 2부 주일 영어예배
          </div>
        </article>
        <article className='sermon_padding10'>
          <div className='imageWrapper'>
            <GetLastSermon sermonSession='3부' />
          </div>
          <div className='articleSub'>
            <GetLastSermonDate sermonSession='3부' /> 3부 주일예배와 실로암 찬양대
          </div>
        </article>
      </section>
      <br />
      <div className='title'>
        <p className='title-style'>소식</p>
        <p className='subtitle-style'>News</p>
      </div>
      <section className='videoSection'>
        <div className='news_body'>
          <div className='news_wrapper'>
            <div className='news_image' style={{ backgroundImage: `url(${firstBoard.snap})` }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{firstBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={firstBoard.url} /></p>
              </div>
            </div>
            <div className='news_image' style={{ backgroundImage: `url(${secondBoard.snap})` }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{secondBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={secondBoard.url} /></p>
              </div>
            </div>
            <div className='news_image' style={{ backgroundImage: `url(${thirdBoard.snap})` }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{thirdBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={thirdBoard.url} /></p>
              </div>
            </div>
            <div className='news_image' style={{ backgroundImage: `url(${fourthBoard.snap})` }}>
              <div className='news_description'>
                <h2 className='news_image_title'>{fourthBoard.title}</h2>
                <p className='news_image_button'><PhotoModal image={fourthBoard.url} /></p>
              </div>
            </div>
          </div >
        </div>
      </section >
      <br />
      <br />
      <br />
      <section className='videoSection' >
        <div className='videoSection second_section'>
          <div className='padding10'>
            <div className='imageWrapper'>
              <a href='./newComer'><img src='/new_comer.png' className='articleImage' /></a>
            </div>
          </div>
          <div className='padding10'>
            <div className='imageWrapper'>
              <a href='https://www.tacomakoreanschool.org/'><img src='/korean_school.png' className='articleImage' /></a>
            </div>
          </div>
        </div>
        <div className='videoSection second_section'>
          <div className='padding10'>
            <div className='imageWrapper'>
              <a href='./education'><img src='/church_school.png' className='articleImage' /></a>
            </div>
          </div>
          <div className='padding10'>
            <div className='imageWrapper'>
              <a href='./serviceAndDirection'><img src='/direction.png' className='articleImage' /></a>
            </div>
          </div>
        </div>
      </section >
      <br />
      <br />
      <div className='title'>
        <p className='title-style'>2023년 교회표어</p>
        <p className='subtitle-style'>Ministry Emphasis</p>
      </div>
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
      <br />
      <br />
      <br />
      <div className='title'>
        <p className='title-style'>새가족 안내</p>
        <p className='subtitle-style'>New Comer</p>
      </div>
      <section className='new_comer'>
        <div className='new_comer_content'>

          <p>타코마중앙장로교회를 방문해 주신 여러분들을 주님의 이름으로 환영합니다. </p>
          <p>타코마중앙장로교회에서 함께 신앙생활을 하시기 원하시는 분들께서는 매 주일 교회 본당 안내석에 위치한 새가족부 봉사자들의 안내를 받아 등록 해 주시기 바랍니다.</p>
          <p>새가복으로 등록 하신 분들은 교회 소개와 안내, 소그룹안내(구역) 밑 새가족 교육에 참여하시면서 교회 생활에 필요한 도움을 받으시게 됩니다.</p>
        </div>
      </section>

      <br />
      <br />
      <div className='title'>
        <p className='title-style'>주일스케치</p>
        <p className='subtitle-style'>What's New</p>
      </div>
      <section className='videoSection'>
        <div className='whats_new_image_wrapper'>
          <div className=''>
            <a href='#'><img src='/2023_vbs.png' className='whats_new_image' /></a>
          </div>
          <div className='more-info'>
            <p>2023 VBS</p>
          </div>
        </div>
        <div className='whats_new_image_wrapper'>
          <div className=''>
            <a href='#'><img src='/2023_picnic.png' className='whats_new_image' /></a>
          </div>
          <div className='more-info'>
            <p>2023 전교인 피크닉</p>
          </div>
        </div>
        <div className='whats_new_image_wrapper'>
          <div className=''>
            <a href='#'><img src='/2023_appointment.png' className='whats_new_image' /></a>
          </div>
          <div className='more-info'>
            <p>2023 신년 임직식</p>
          </div>
        </div >
      </section >
      <br />
      <br />
      <br />
    </>
  );
};
