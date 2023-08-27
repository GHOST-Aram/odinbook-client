import { render, screen } from "@testing-library/react";
import MuiCircularProgress from "./MuiCircularProgress";

describe('Circular progress', () => {
    test('Renders \'Loading\' text when loading', () => {
        render(<MuiCircularProgress loadingText={'loading'}/>)

        const loadingText = screen.getByText(/loading/i)
        expect(loadingText).toBeInTheDocument()
    })
})