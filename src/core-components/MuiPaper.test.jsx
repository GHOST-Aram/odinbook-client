import { render, screen } from "@testing-library/react";
import MuiPaper from "./MuiPaper";

describe('Mui Paper', () => {
    test('Renders text as child of mui paper', () => {
        render(<MuiPaper>Hello world</MuiPaper>)

        const text = screen.getByText(/hello world/i)
        expect(text).toBeInTheDocument()
    })
})