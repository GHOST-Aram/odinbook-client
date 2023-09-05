import { screen, render } from "@testing-library/react";
import ProfileHeader from "./ProfileHeader";
import logo from '../logo.svg'

describe('Profile Header', () => {
    test('Displays header eith user\'s name and image', () => {
        render(<ProfileHeader image={logo} name={'Kelly Rowland'} />)

        const userImg = screen.getByRole('img', { name: 'Kelly Rowland'})
        const userName= screen.getByRole('heading', { name: 'Kelly Rowland' })

        expect(userImg).toBeInTheDocument()
        expect(userName).toBeInTheDocument()
    })
})