import * as React from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
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
    padding: '32px',
    overflowY: 'scroll'
};

export default function BulletinModal({ file, index }) {

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(file.count);
    const [numPages, setNumPages] = useState(null);
    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
        countClick();
    };

    const countClick = () => {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/bulletins/${file._id}`, { count: file.count + 1 })
            .then((response) => {
                setCount(response.data.bulletin.count);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <td style={{ display: 'flex' }} key={file._id}>
            <td className='bulletin_col1'>
                {index}
            </td>
            <td className='bulletin_col2' onClick={handleOpen}>
                {file.special_title ?
                    file.date.split('T')[0] + ' ' + file.special_title + '' + file.title
                    :
                    file.date.split('T')[0] + ' ' + file.title}
            </td>
            <td className='bulletin_col3'>
                {file.date.split('T')[0]}
            </td>
            <td className='bulletin_col4'>
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
                                        width={1200}
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