import React from 'react'
import { 
    Box,
    Typography
} from '@mui/material'

const Form = ({children, heading}) => {
  return (
    <Box 
		component={'form'} 
		display={'flex'} 
		flexDirection={'column'}
		alignItems={'center'}
		gap={2}
		width={'100%'}
	>
        <Typography 
            variant='h4'
            component={'h1'}
            gutterBottom
			color={'primary'}
        >{heading}</Typography>
        {children}
    </Box>
  )
}

export default Form