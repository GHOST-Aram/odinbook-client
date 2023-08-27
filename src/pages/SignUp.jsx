import React, { useState } from 'react'
import Container from '../core-components/Container'
import MuiPaper from '../core-components/MuiPaper'
import SignUpForm from '../page-components/SignForm'
import MuiLoading from '../page-components/MuiLoading'

const SignUp = () => {
    //Monitor progress
    const [isProcessing, setIsProcessing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const retrySignUp = () =>{
        setIsProcessing(false)
        setIsDone(false)
    }

    const displaySucessAlert = () =>{
        setIsSuccess(true)
        setIsDone(true)
    }

    const displayErrorAlert = () =>{
        setIsDone(true)
        setIsSuccess(false)
    }
    return (
        <Container>
            <MuiPaper>
                {
                    !isProcessing ?
                    <SignUpForm 
                        displayError={displayErrorAlert}
                        setIsProcessing={setIsProcessing}
                        displaySuccess={displaySucessAlert}
                    />
                    : <MuiLoading 
                        isProcessing={isProcessing}
                        isSuccess = {isSuccess}
                        isDone={isDone}
                        retry = {retrySignUp}
                    />
                }
            </MuiPaper>
        </Container>
    )
}

export default SignUp