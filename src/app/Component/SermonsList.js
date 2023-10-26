import { useCallback, useEffect, useState } from "react";
import '../css/page.css';
import '../css/sermons.css';
import SermonModal from "./SermonModal";

export default function SermonsList({ sermon }) {

    return (
        <>
            <div className="component_sermon_section" key={sermon._id}>
                <div className="sermon_snap">
                    <SermonModal sermon={sermon} />
                </div>
                <div className="sermon_info" >
                    <h3>
                        {sermon.title} - {sermon.passage}
                    </h3>
                    <p className='date_time'>
                        {sermon.date.split('T')[0]} @ {sermon.session === '1부' ? '8:00 AM 1부' : null ||
                            sermon.session === '2부' ? '09:30 AM 2부' : null ||
                                sermon.session === '3부' ? '11:00 AM 3부' : null} - {sermon.preacher} 목사
                    </p>
                </div>
            </div>
        </>
    );
}