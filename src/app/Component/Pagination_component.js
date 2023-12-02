import React from 'react';
import Pagination from '@mui/material/Pagination';
import '../css/sermons.css';

const Pagination_component = ({ totalPosts, postsPerPage, setCurrentPage }) => {
    const pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='pagination_style'>
            <Pagination count={pages.length} onChange={handleChange} variant='outlined' />
        </div>
    );
};

export default Pagination_component;