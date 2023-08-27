import { render, screen } from '@testing-library/react'
import MuiButton from './MuiButton'

test('Renders button called \'Submit\'', () => {
    render(<MuiButton name={'Submit'} handleClick={()=>{}}/>)

    const button = screen.getByRole('button', { name: /Submit/i})
    expect(button).toBeInTheDocument()
})