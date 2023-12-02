import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../css/page.css';
import '../css/gallery.css';
import axios from 'axios';

import { Document, Page, pdfjs } from 'react-pdf';

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
    padding: '32px',
    overflowY: 'scroll'
};

export default function BulletinModal({ file }) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [count, setCount] = useState(file.count);

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const handleOpen = () => {
        setOpen(true);
        countClick();
    };

    const countClick = () => {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/bulletins/${file._id}`, { count: file.count + 1 })
            .then((response) => {
                console.log('response.data.bulletin.count', response.data.bulletin.count);
                setCount(response.data.bulletin.count);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <td style={{ display: 'flex' }}>
            <td className='board_col1' onClick={handleOpen} style={{ cursor: 'pointer' }}>
                {file.special_title ?
                    file.date.split('T')[0] + ' ' + file.special_title + '' + file.title
                    :
                    file.date.split('T')[0] + ' ' + file.title}
            </td>
            <td className='board_col3'>
                {file.date.split('T')[0]}
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
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{ overflow: 'scroll' }}>
                            <Document file={file.content} onLoadSuccess={onDocumentLoadSuccess} onClick={handleClose}>
                                {Array.from({ length: numPages }, (_, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={1000}
                                        renderAnnotationLayer={false}
                                        renderTextLayer={false}
                                    />
                                ))}
                            </Document>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </td>
    );
}