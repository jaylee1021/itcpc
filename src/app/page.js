import Image from 'next/image';
import './css/page.css';

export default function Home() {

  return (
    <>
      <section className='mainBanner'>

      </section>
      <div className='sermonTitle' >
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
          New Comer section (image goes here)
        </div>


      </section>

    </>
  );
}
