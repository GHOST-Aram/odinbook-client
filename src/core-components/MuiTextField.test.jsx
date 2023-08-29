import MuiTextField from "./MuiTextField";
import { render, screen } from "@testing-library/react";

describe('TextField Component', () =>{

    test('Renders field labeled \'first name\'', () => {
        const handleChange = jest.fn()
        const handleBlur = jest.fn()

        render(<MuiTextField 
                name='First Name' 
                formik={{
                    handleChange, 
                    handleBlur, 
                    touched: {'First Name' : true},
                    errors: {'First Name': 'ds'},
                    values:{'First Name': 'df' }
                }}
                />)

        const textbox = screen.getByRole('textbox', { name: /first name/i})
        expect(textbox).toBeInTheDocument()
    })
})