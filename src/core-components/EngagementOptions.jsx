import React from 'react'
import {Stack} from '@mui/material'
import { Favorite, Message, Share } from '@mui/icons-material'

const EngagementOptions = () => {
  return (
    <Stack 
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingX={4}
    >
        <Message />
        <Favorite />
        <Share />
    </Stack>
  )
}

export default EngagementOptions