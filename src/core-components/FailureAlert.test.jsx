import { render, screen, fireEvent } from "@testing-library/react";
import FailureAlert from "./FailureAlert";

describe('Failure alert', () =>{
    test('Renders Falure alert', () => {
        render(
            <FailureAlert 
                message={'Failed to create account'} 
                action = 'Try again'
            />
        )
        
        const failAlert = screen.getByRole('alert', { name: /failure alert/i})
        expect(failAlert).toBeInTheDocument()
    })
    
    test('Renders \'Try Again\' button', () =>{
        render(<FailureAlert 
            message={'Failed to create account'} 
            actionName = 'Try Again'
        />)

        const retryBtn = screen.getByRole('button', {name: /Try Again/i })
        expect(retryBtn).toBeInTheDocument()
    })

    test('Renders action function is called when action button is clicked', () =>{
        const handleClick = jest.fn()
        render(<FailureAlert 
            message={'Failed to create account'} 
            actionName = 'Try Again'
            action = {handleClick}
        />)

        const actionBtn = screen.getByRole('button', { name : /try again/i})
        fireEvent.click(actionBtn)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

})