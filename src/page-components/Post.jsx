import React from 'react'
import Container from '../core-components/Container'
import ProfileHeader from '../core-components/ProfileHeader'
import Image from '../core-components/Image'
import Divider from '@mui/material/Divider'
import Paragraph from '../core-components/Paragraph'
const Post = ({post}) => {
  return (
    <Container sx={{
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		width: {
			xs: '100%',
			sm: '100%',
			md: '100%',
			lg: '50%',
			xl: '60%'
		},
		margin: 'auto',
		paddingBlock: '1rem'
	}}>
        <ProfileHeader 
            image={post.author.profilePic} 
            name={post.author.name} 
        />
        <Image 
			src={post.content.image} 
			name={post.content.tag}
			className={'post-img'}
		/>
        <Paragraph>{post.content.text}</Paragraph>
		<Divider  orientation={'horizontal'}/>
    </Container>
  )
}

export default Post