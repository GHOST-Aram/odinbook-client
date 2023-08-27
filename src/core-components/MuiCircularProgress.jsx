import React from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'

const MuiCircularProgress = ({ loadingText}) => {
  return (
    <Box component={'div'}>
        <CircularProgress color='primary' />
        <Typography>{loadingText} ... </Typography>      
    </Box>
  )
}

export default MuiCircularProgress