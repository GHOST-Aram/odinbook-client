import React from 'react'
import TextField from '@mui/material/TextField'
import { FormControl } from '@mui/material'

const MuiTextField = ({ label , type, handleChange, value }) => {
	return (
		<FormControl fullWidth>
			<TextField 
				label = {label}
				type= {type || 'text'}
				variant='outlined'
				color='primary'
				required
				fullWidth
				value={value || ''}
				onChange={handleChange}
			/>
		</FormControl>
	)
}

export default MuiTextField