import { render, screen } from '@testing-library/react'
import Container from './Container'

test('Renders \'hELLO WORLD\' text within div', () => {
    render(<Container>Hello WORLD</Container>)

    const text = screen.getByText(/hello world/i)
    expect(text).toBeInTheDocument()
})