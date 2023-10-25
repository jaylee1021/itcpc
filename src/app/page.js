'use client';
import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TransitionsModal from './Component/PhotoModal';
import GetLastSermon from './Component/GetLastSermon';

export default function Home() {

  const imageOne = '/worship_service.png';
  const imageTwo = '/revival.jpg';
  const imageThree = '/fall_festival_tall.jpg';


  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <title>타코마중앙장로교회</title>
      <section >
        {/* <video controls className='mainBannerVideo' muted autoplay='autoplay' loop>
          <source src='/banner_video.mov' type='video/mp4' />
        </video> */}
        <img src='/main_banner.png' className='mainBannerImage' />
      </section>
      <br />
      <br />
      <div className='title' >
        <p className='title-style'>주일 예배</p>
        <p className='subtitle-style'>Sunday Worship</p>
      </div>

      <section className='videoSection'>
        <article className='padding10'>
          <div className='imageWrapper'>
            <GetLastSermon sermonSession='1부' />
          </div>
          <div className='articleSub'>
            1부 장년예배와 성가대찬양 (임시)
          </div>

        </article>
        <article className='padding10'>
          <div className='imageWrapper'>
            <GetLastSermon sermonSession='2부' />
          </div>
          <div className='articleSub'>
            2부 영어예배 (임시)
          </div>

        </article>
        <article className='padding10'>
          <div className='imageWrapper'>
            <GetLastSermon sermonSession='3부' />
          </div>
          <div className='articleSub'>
            3부 젊은예배와 실로암 찬양대 (임시)
          </div>

        </article>
      </section>
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
              <a href='#'><img src='/korean_school.png' className='articleImage' /></a>
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
      <div className='title'>
        <p className='title-style'>소식</p>
        <p className='subtitle-style'>News</p>

      </div>
      <section className='videoSection'>
        <div className='news_body'>
          <div className='news_wrapper'>
            <div className='news_image'>
              <div className='news_description'>
                <h2 className='news_image_title'>예배안내</h2>
                <a href='#'><p className='news_image_button'><TransitionsModal image={imageOne} /></p></a>
              </div>
            </div>
            <div className='news_image'>
              <div className='news_description'>
                <h2 className='news_image_title'>가을 글로벌 특별 새벽 부흥회</h2>
                <a href='#'><p className='news_image_button'><TransitionsModal image={imageTwo} /></p></a>
              </div>
            </div>
            <div className='news_image' >
              <div className='news_description'>
                <h2 className='news_image_title'>가을축제</h2>
                <a href='#'><p className='news_image_button'><TransitionsModal image={imageThree} /></p></a>
              </div>
            </div>
            <div className='news_image'>
              <div className='news_description'>
                <h2 className='news_image_title'>임직식</h2>
                <a href='#'><p className='news_image_button'><TransitionsModal /></p></a>
              </div>
            </div>
          </div >
        </div>
      </section >
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
