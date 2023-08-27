import React, { useState } from 'react'
import Container from '../core-components/Container'
import MuiPaper from '../core-components/MuiPaper'
import SignUpForm from '../page-components/SignForm'
import MuiLoading from '../page-components/MuiLoading'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    //Monitor progress
    const [isProcessing, setIsProcessing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const displayError = () =>{
        setIsDone(true)
        setIsSuccess(false)
    }
    
    const displaySucess = () =>{
        setIsSuccess(true)
        setIsDone(true)
    }
    
    const retrySignUp = () =>{
        setIsProcessing(false)
        setIsDone(false)
        console.log({isProcessing, isDone})
    }

    const goToLogin = () =>{
        navigate('/', { replace: true })
    }
    return (
        <Container>
            <MuiPaper>
                {
                    !isProcessing ?
                    <SignUpForm 
                        displayError={displayError}
                        setIsProcessing={setIsProcessing}
                        displaySuccess={displaySucess}
                    />
                    : <MuiLoading 
                        isProcessing={isProcessing}
                        isSuccess = {isSuccess}
                        isDone={isDone}
                        handleFailure = {retrySignUp}
                        handleSuccess = {goToLogin}
                    />
                }
            </MuiPaper>
        </Container>
    )
}

export default SignUp