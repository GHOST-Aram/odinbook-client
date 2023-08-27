import { render, screen } from "@testing-library/react";
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

})