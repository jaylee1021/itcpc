import Image from 'next/image';
import styles from '../app/css/page.module.css';

export default function Home() {

  return (
    <>
      <section className={styles.mainBanner}>

      </section>
      <div className={styles.sermonTitle} >
        <h4>설교</h4>
        <h5>Sermon</h5>
      </div>
      <section className={styles.videoSection}>
        <article className={styles.padding10}>
          <div className={styles.imageWrapper}>
            <a href='#'><img src='/Korean.png' className={styles.articleImage} /></a>
          </div>
          <div className={styles.articleTitle} >
            <h4>소망의 하나님 God of Hope - 로마서 15:13</h4>
            <h6>2023.10.01 - 이형성 목사</h6>
          </div>
        </article>
        <article className={styles.padding10}>
          <div className={styles.imageWrapper}>
            <a href='#'><img src='/English.png' className={styles.articleImage} /></a>
          </div>
          <div className={styles.articleTitle}>
            <h4>Go Up To Bethel - Romans 15:13</h4>
            <h6>2023.10.01 - Rev. Samuel Lee</h6>
          </div>
        </article>
      </section>
      <section className={styles.videoSection} >
        <div className={styles.padding10}>
          <div className={styles.imageWrapper}>
            <a href='#'><img src='/small_menu.png' className={styles.articleImage} /></a>
          </div>
        </div>
        <div className={styles.padding10}>
          <div className={styles.imageWrapper}>
            <a href='#'><img src='/small_menu.png' className={styles.articleImage} /></a>
          </div>
        </div>
        <div className={styles.padding10}>
          <div className={styles.imageWrapper}>
            <a href='#'><img src='/small_menu.png' className={styles.articleImage} /></a>
          </div>
        </div>
        <div className={styles.padding10}>
          <div className={styles.imageWrapper}>
            <a href='#'><img src='/small_menu.png' className={styles.articleImage} /></a>
          </div>
        </div>
      </section >
      <section>
        another section
      </section>
      
    </>
  );
}
