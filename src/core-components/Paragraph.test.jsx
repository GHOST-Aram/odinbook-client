import { render, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";

describe( 'Paragraph', () => {
    test('Renders text in paragraph', () => {
        render(<Paragraph>{'Hello world'}</Paragraph>)

        const text = screen.getByText(/Hello world/)
        expect(text).toBeInTheDocument()
    })
})