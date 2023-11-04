import * as React from 'react';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import '../css/page.css';
import '../css/sermons.css';
import axios from 'axios';

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

export default function BoardModal({ image }) {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(image.count);
    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
        countClick();
    };

    const countClick = () => {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/boards/${image._id}`, { count: image.count + 1 })
            .then((response) => {
                setCount(response.data.board.count);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div style={{ padding: ' 8px 8px 0 8px', maxHeight: '120px' }}>
            <td>
                <div onClick={handleOpen} >
                    <img src={image.snap} className='articleImage' style={{ borderRadius: '5px', cursor: 'pointer', padding: '10px' }} />
                </div>
            </td>
            <td style={{ width: '50%', padding: '10px' }}>
                {image.title}
            </td>
            <td style={{ width: '20%', padding: '10px' }}>
                {image.eventDate}
            </td>
            <td style={{ width: '10%', padding: '10px' }}>
                {count}
            </td>

            <hr style={{ margin: '5px 0 0 0' }} />
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
                            <img src={image.url} style={{ maxHeight: '90vh' }} alt="..." />
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}