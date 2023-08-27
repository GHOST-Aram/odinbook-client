import { fireEvent, render, screen } from "@testing-library/react";
import SuccessAlert from "./SuccessAlert";

describe('Success Alert', () =>{
    test('Renders success alert', () => {
        render(<SuccessAlert message='Account created sucessfully'/>)
    
        const alert = screen.getByRole('alert', { name: /success/})
        expect(alert).toBeInTheDocument()
    })

    test('Renders action button', () =>{
        render(
            <SuccessAlert 
                message='Account created sucessfully'
                actionName = 'Proceed to login'
            />
        )
        const actionBtn = screen.getByRole('button', { name: /proceed to Login/i})
        expect(actionBtn).toBeInTheDocument()
    })

    test('Click handler function is called when action button is clicked', () =>{
        const handleSuccess = jest.fn()
        render(
            <SuccessAlert 
                message='Account created sucessfully'
                actionName = 'Proceed to login'
                action = {handleSuccess}
            />
            )

            const actionBtn = screen.getByRole('button', { name: /proceed to Login/i})
            fireEvent.click(actionBtn)
            expect(handleSuccess).toHaveBeenCalledTimes(1)
    })

})
