import React from 'react'
import { 
    Box,
    FormLabel, FormGroup
} from '@mui/material'

const Form = ({children, label, onSubmit}) => {
  return (
    <Box 
		component={'form'} 
		method='post'
		display={'flex'} 
		flexDirection={'column'}
		alignItems={'center'}
		gap={2}
		width={'100%'}
		onSubmit={onSubmit}
	>
        <FormLabel component={'h5'} color='primary'>{label}</FormLabel>
        <FormGroup
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap:2,
					width: '100%'
                }}
				
            >
        {children}
        </FormGroup>
    </Box>
  )
}

export default Form