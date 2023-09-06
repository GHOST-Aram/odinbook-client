import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import Image from './Image'


const ProfileHeader = ({ name, image }) => {
  return (
    <Stack 
		direction={'row'} 
		justifyContent={'start'} 
		display={'flex'} 
		alignItems={'center'}
		spacing={2}
		bgcolor={'text.secondary'}
	>
		
		<Avatar
			sx={
				{
					width: 50,
					height: 50
				}
			}
		>
			<Image name={name} src={image}/>
		</Avatar>
		<Typography
			variant='h5'
			component={'h2'}
		>
			{ name }
		</Typography>
    </Stack>
  )
}

export default ProfileHeader