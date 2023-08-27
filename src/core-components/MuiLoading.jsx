import React from 'react'
import { CircularProgress, Stack, Typography } from '@mui/material'

const MuiLoading = () => {
  return (
    <Stack 
        spacing={4} 
        alignItems={'center'} 
        direction={'column'}
        paddingY={20}
    >
        <CircularProgress color='primary' />
        <Typography>Processing ... </Typography>
    </Stack>
  )
}

export default MuiLoading