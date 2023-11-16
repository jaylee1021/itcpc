import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import '../css/page.css';
import '../css/sermons.css';
import '../css/board.css';

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
        <td style={{ display: 'flex' }}>
            <td className='board_col1' onClick={handleOpen}>
                <img src={image.snap} className='board_image' />
            </td>
            <td className='board_col2' >
                <div onClick={handleOpen} className='title_cursor'>
                    {image.title}
                </div>
            </td>
            <td className='board_col3'>
                {image.eventDate}
            </td>
            <td className='board_col4'>
                {count}
            </td>

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
                            <img src={image.url} className='image_size' alt="..." />
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </td>
    );
}