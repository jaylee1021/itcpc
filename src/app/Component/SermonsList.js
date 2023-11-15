import SermonModal from "./SermonModal";
import '../css/page.css';
import '../css/sermons.css';

export default function SermonsList({ sermon }) {

    let emPreacher = '';
    if (sermon.preacher.includes('Danny Kim') || sermon.preacher.includes('David Rho')) {
        emPreacher = 'Pastor ' + sermon.preacher;
    } else {
        emPreacher = 'Rev. ' + sermon.preacher;
    }
    return (
        <>
            <div className="component_sermon_section" key={sermon._id}>
                <div className="imageWrapper">
                    <SermonModal sermon={sermon} />
                </div>
                <div className="sermon_info" >
                    <h3>
                        {sermon.title} - {sermon.passage}
                    </h3>
                    <p className='date_time'>
                        {sermon.date.split('T')[0]} @ {sermon.session === '1부' ? '8:00 AM 1부 - ' + sermon.preacher + '목사' : null ||
                            sermon.session === '2부' ? '9:30 AM 2부 - ' + emPreacher : null ||
                                sermon.session === '3부' ? '11:00 AM 3부 - ' + sermon.preacher + '목사' : null}
                    </p>
                </div>
            </div>
        </>
    );
}