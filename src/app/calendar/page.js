import '../css/page.css';

export default function Calendar() {

    return (
        <>
            <title>캘린더</title>
            <section className='mainBannerCenter'>
                <img src='/main_banner.png' className='mainBannerImage' />
            </section>
            <div className='title' >
                <p className='title-style'>캘린더</p>
                <p className='subtitle-style'>Calendar</p>
            </div>
            <iframe src="https://calendar.google.com/calendar/embed?src=ittcpc%40gmail.com&ctz=America%2FLos_Angeles"
                style={{ border: '0', width: '100%', height: '100vh', frameborder: "0", scrolling: "no", padding: '20px' }}></iframe >
        </>
    );
}