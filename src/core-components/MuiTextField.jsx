import React from 'react'
import TextField from '@mui/material/TextField'
import { FormControl, FormHelperText } from '@mui/material'
import { formatName } from '../utils/format-name'

const MuiTextField = ({ name , formik }) => {
	return (
		<FormControl fullWidth>
			<TextField 
				label = {formatName(name)}
				type={
					/password/i.test(name) ? 'password' :
					/email/i.test(name) ? 'email' : 'text'
				}
				name={name}
				variant='outlined'
				color='primary'
				fullWidth
				required
				value={formik.values[`${name}`]|| ''}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			{
				formik.errors[`${name}`] && formik.touched[`${name}`] &&
				<FormHelperText error>{formik.errors[`${name}`]}</FormHelperText>
			}
		</FormControl>
	)
}

export default MuiTextField