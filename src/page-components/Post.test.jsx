import { render, screen } from "@testing-library/react";
import Post from "./Post";
import logo from '../logo.svg'

describe('Post component', () => {
    const post =  {
        content : { image: logo, tag: 'My Post', text: 'Lorem ipsum' },
        author: { profilePic: logo, name: 'Erick Johnson' },
    }
    test('Renders post author name', () =>{
        render(<Post post={post}/>)

        const authorName = screen.getByText(/Erick Johnson/)
        expect(authorName).toBeInTheDocument()
    })

    test('Renders post author\'s profile image', () => {
        render(<Post post={post} />)

        const profilepic = screen.getByAltText(/Erick Johnson/)
        expect(profilepic).toBeInTheDocument()
    })

    test('Renders post image', () => {
        
        render(<Post post={post} />)

        const postedImage = screen.getByRole('img', { name: /My Post/})
        expect(postedImage).toBeInTheDocument()
    })

    test('Renders post text content', () => {
        render(<Post post={post} />)

        const textContent = screen.getByText(/Lorem ipsum/)
        expect(textContent).toBeInTheDocument()
    })
})