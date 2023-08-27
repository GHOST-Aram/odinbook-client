import MuiTextField from "./MuiTextField";
import { render, screen } from "@testing-library/react";

describe('TextField Component', () =>{

    test('Renders field labeled \'first name\'', () => {
        render(<MuiTextField 
                label='First Name' 
                type='text'
                handleChange={() =>{}}
                value={''}
                />)

        const textbox = screen.getByRole('textbox', { name: /first name/i})
        expect(textbox).toBeInTheDocument()
    })
})