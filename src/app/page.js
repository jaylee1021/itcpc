import Image from 'next/image';
import './css/page.css';

export default function Home() {

  return (
    <>
      <section className='mainBanner'>

      </section>
      <div className='title' >
        <h4>설교</h4>
        <h5>Sermon</h5>
      </div>
      <section className='videoSection'>
        <article className='padding10'>
          <div className='imageWrapper'>
            <a href='#'><img src='/Korean.png' className='articleImage' /></a>
          </div>
          <div className='articleTitle' >
            <h4>소망의 하나님 God of Hope - 로마서 15:13</h4>
            <h6>2023.10.01 - 이형성 목사</h6>
          </div>
        </article>
        <article className='padding10'>
          <div className='imageWrapper'>
            <a href='#'><img src='/English.png' className='articleImage' /></a>
          </div>
          <div className='articleTitle'>
            <h4>Go Up To Bethel - Romans 15:13</h4>
            <h6>2023.10.01 - Rev. Samuel Lee</h6>
          </div>
        </article>
      </section>
      <section className='videoSection' >
        <div className='videoSection second_section'>
          <div className='padding10'>
            <div className='imageWrapper'>
              <a href='#'><img src='/new_comer.png' className='articleImage' /></a>
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
              <a href='#'><img src='/church_school.png' className='articleImage' /></a>
            </div>
          </div>
          <div className='padding10'>
            <div className='imageWrapper'>
              <a href='#'><img src='/direction.png' className='articleImage' /></a>
            </div>
          </div>
        </div>
      </section >
      <section className='new_comer'>
        <div className='new_comer_content'>
          <h1>새가족 안내</h1>
          <p>타코마중앙장로교회를 방문해 주신 여러분들을 주님의 이름으로 환영합니다. </p>
          <p>타코마중앙장로교회에서 함께 신앙생활을 하시기 원하시는 분들께서는 매 주일 교회 본당 안내석에 위치한 새가족부 봉사자들의 안내를 받아 등록 해 주시기 바랍니다.</p>
          <p>새가복으로 등록 하신 분들은 교회 소개와 안내, 소그룹안내(구역) 밑 새가족 교육에 참여하시면서 교회 생활에 필요한 도움을 받으시게 됩니다.</p>
        </div>
      </section>
      <div className='title'>
        <h4>주일스케치</h4>
        <h5>What's New</h5>
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
    </>
  );
}
