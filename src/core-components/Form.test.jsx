import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe('Form Component', () => {
    
    test('Renders form heading', () =>{
        render(<Form label='Sign Up'></Form>)

        const heading = screen.getByRole('heading', {name: /Sign up/i})
        expect(heading).toBeInTheDocument()

    })
})