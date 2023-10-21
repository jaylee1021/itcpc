import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import '../css/page.css';

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
// const OVERLAY_STYLE = {
//     position: "fixed",
//     display: "flex",
//     justifyContent: "center",
//     top: "0",
//     left: "0",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0,0,0, .8)",
//     zIndex: "1000",
//     overflowY: "auto"
// };

export default function TransitionsModal({ image }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{ color: 'white', padding: '0' }}>더보기</Button>
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
                    {/* <div style={OVERLAY_STYLE}> */}
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{ overflow: 'auto' }}>
                            <img src={image} style={{ maxHeight: '90vh' }} alt="..." />
                        </Typography>
                        {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}> */}
                        {/* Your description */}
                        {/* </Typography> */}
                    </Box>
                    {/* </div> */}
                </Fade>
            </Modal>
        </div>
    );
}