import { render, screen} from '@testing-library/react'
import Image from './Image'
import logo from '../logo.svg'

describe('Image Components', () => {
    test('Renders image with alt text', () => {
        render(<Image   name = 'Library' src = {logo} />)

        const image = screen.getByRole('img', { name:  'Library'})
        expect(image).toBeInTheDocument()
    },)
})