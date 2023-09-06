import React, { useState } from 'react'
import Container from '../core-components/Container'
import MuiPaper from '../core-components/MuiPaper'
import SignUpForm from '../page-components/SignForm'
import MuiLoading from '../core-components/MuiLoading'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    //Monitor progress
    const [isProcessing, setIsProcessing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const displayFailure = () =>{
        setIsDone(true)
        setIsSuccess(false)
    }
    
    const displaySucess = () =>{
        setIsSuccess(true)
        setIsDone(true)
    }
    
    const rerenderSignUpForm = () =>{
        setIsProcessing(false)
        setIsDone(false)
    }

    const goToLogin = () =>{
        navigate('login', { replace: true })
    }
    return (
        <Container>
            <MuiPaper>
                {
                    !isProcessing ?
                    <SignUpForm 
                        displayFailure={displayFailure}
                        setIsProcessing={setIsProcessing}
                        displaySuccess={displaySucess}
                    />
                    : <MuiLoading 
                        isProcessing={isProcessing}
                        isSuccess = {isSuccess}
                        isDone={isDone}
                        failureRedirect = {rerenderSignUpForm}
                        sucessRedirect = {goToLogin}
                        successMessage =  {'Account Created Success Fully'}
                        failureMessage = {'Failed to create account, Try again'}
                    />
                }
            </MuiPaper>
        </Container>
    )
}

export default SignUp