import Image from 'next/image';
import styles from '../app/css/page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.mainBanner}>

      </section>
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap', padding: '10px' }}>
        <h4>설교</h4>
        <h5>Sermon</h5>
      </div>
      <section style={{ display: 'flex', maxWidth: '1522px', margin: 'auto' }}>
        <article style={{ padding: '10px' }}>
          <div>
            <img src='/Korean.png' style={{ width: '741px', height: '414.95px' }} />
          </div>
          <div style={{ paddingTop: '40px', textAlign: 'center' }}>
            <h4>소망의 하나님 God of Hope - 로마서 15:13</h4>
            <h6>2023.10.01 - 이형성 목사</h6>
          </div>
        </article>
        <article style={{ padding: '10px' }}>
          <div>
            <img src='/English.png' style={{ width: '741px', height: '414.95px' }} />
          </div>
          <div style={{ paddingTop: '40px', textAlign: 'center' }}>
            <h4>Go Up To Bethel - Romans 15:13</h4>
            <h6>2023.10.01 - Rev. Samuel Lee</h6>
          </div>
        </article>
      </section>
      <section>

      </section>
    </>
  );
}
