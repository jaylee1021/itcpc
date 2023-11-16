import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../css/page.css';
import '../css/sermons.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: '100vh',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    padding: '32px'
};

export default function SermonModal({ sermon }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let emPreacher = '';
    if (sermon.preacher.includes('Danny Kim') || sermon.preacher.includes('David Rho')) {
        emPreacher = 'Pastor ' + sermon.preacher;
    } else {
        emPreacher = 'Rev. ' + sermon.preacher;
    }

    return (
        <div>
            <div onClick={handleOpen} className='sermon_info sermon_info_modal' >
                <img src={sermon.snap} className='articleImage' />
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{ overflow: 'auto' }}>
                            <div className="video-responsive">
                                <iframe

                                    src={`https://www.youtube.com/embed/${sermon.embed}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {sermon.title} - {sermon.passage}
                            <br />
                            {sermon.date.split('T')[0]} @ {sermon.session === '1부' ? '8:00 AM 1부 - ' + sermon.preacher + '목사' : null ||
                                sermon.session === '2부' ? '9:30 AM 2부 - ' + emPreacher : null ||
                                    sermon.session === '3부' ? '11:00 AM 3부 - ' + sermon.preacher + '목사' : null}
                        </Typography>
                    </Box>
                    {/* </div> */}
                </Fade>
            </Modal>
        </div>
    );
}