import React, { useState } from 'react'
import Container from '../core-components/Container'
import MuiPaper from '../core-components/MuiPaper'
import LoginForm from '../page-components/LoginForm'
import MuiLoading from '../core-components/MuiLoading'
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
    
    const rerenderLoginForm = () =>{
        setIsProcessing(false)
        setIsDone(false)
    }

    const goToHomePage = () =>{
        navigate('/', { replace: true })
    }
    return (
        <Container>
            <MuiPaper>
                {
                    !isProcessing ?
                    <LoginForm 
                        displayFailure={displayFailure}
                        setIsProcessing={setIsProcessing}
                        displaySuccess={displaySucess}
                    />
                    : <MuiLoading 
                        isProcessing={isProcessing}
                        isSuccess = {isSuccess}
                        isDone={isDone}
                        failureRedirect = {rerenderLoginForm}
                        successRedirect = {goToHomePage}
                        failureMessage = 'Authentication failed.'
                        successMessage = {'Login Successfull.'}
                    />
                }
            </MuiPaper>
        </Container>
    )
}

export default Login