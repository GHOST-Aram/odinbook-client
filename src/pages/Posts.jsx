import React from 'react'
import Container from '../core-components/Container'
import Post from '../page-components/Post'
import logo from '../logo.svg'
import namibia from '../namibia.jpg'
import { useState } from 'react'
import { useEffect } from 'react'


const dymmyPosts =  [
	{
		id: 'fhuewu89392',
		content : { 
			image: namibia, 
			tag: 'My Post', 
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a tenetur quidem nostrum! Eius at, reprehenderit provident amet ex repellat? 
			Rem eum cumque ipsam reprehenderit recusandae harum unde tempore` },
		author: { profilePic: logo, name: 'Erick Johnson' },
	},
	{
		id: 'fhuewu8939d',
		content : { 
			image: namibia, 
			tag: 'My Post', 
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a tenetur quidem nostrum! Eius at, reprehenderit provident amet ex repellat? 
			Rem eum cumque ipsam reprehenderit recusandae harum unde tempore` },
		author: { profilePic: logo, name: 'Erick Johnson' },
	},
	{
		id: 'fhuewu8939r',
		content : { 
			image: namibia, 
			tag: 'My Post', 
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a tenetur quidem nostrum! Eius at, reprehenderit provident amet ex repellat? 
			Rem eum cumque ipsam reprehenderit recusandae harum unde tempore` },
		author: { profilePic: logo, name: 'Erick Johnson' },
	},
]
const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		setPosts(dymmyPosts)
	},[])
	return (
		<Container >
			{
				posts.map(post => <Post key={post.id} post={post}/> )
			}
		</Container>
	)
}

export default Posts