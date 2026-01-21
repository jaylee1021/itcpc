import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LoadingCircle() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="inherit" />
        </Box>
    );
}

function LoadingSpinningBubble() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '300px 0' }}>
            <CircularProgress color="inherit" />
        </Box>
    );
}

function LoadingLine() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="inherit" />
        </Box>
    );
}

export { LoadingCircle, LoadingLine, LoadingSpinningBubble };