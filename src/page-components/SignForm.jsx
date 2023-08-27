import React, { useState } from 'react'
import Form from '../core-components/Form'
import MuiTextField from '../core-components/MuiTextField'
import MuiButton from '../core-components/MuiButton'
import MuiLoading from '../core-components/MuiLoading'

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    //Monitor progress
    const [isProcessing, setIsProcessing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isDone, setIsDone] = useState(false)


    const signUp = async() =>{
        setIsProcessing(true)
        setTimeout(() =>{
            setIsSuccess(true)
            setIsDone(true)
        }, 1000)
    }

    return (
        <>
        {
            !isProcessing?
            <Form heading={'Sign Up'}>
                <MuiTextField 
                    label={'First Name'}
                    value={firstName}
                    handleChange={(e) => setFirstName(e.target.value)}
                />
                <MuiTextField 
                    label={'Last Name'}
                    value={lastName}
                    handleChange={(e) => setLastName(e.target.value)}
                />
                <MuiTextField 
                    label={'Email'}
                    value={email}
                    type={'email'}
                    handleChange={(e) => setEmail(e.target.value)}
                />
                <MuiTextField 
                    label={'Username'}
                    value={username}
                    handleChange={(e) => setUsername(e.target.value)}
                />
                <MuiTextField 
                    label={'Password'}
                    value={password}
                    type={'password'}
                    handleChange={(e) => setPassword(e.target.value)}
                />
                <MuiTextField 
                    label={'Confirm Password'}
                    value={password2}
                    type={'password'}
                    handleChange={(e) => setPassword2(e.target.value)}
                />

                <MuiButton 
                    name={'Sign Up'}
                    handleClick={signUp}
                />
            </Form> 
            : <MuiLoading 
                isProcessing={isProcessing}
                isSuccess = {isSuccess}
                isDone={isDone}
            />
        }
        </>
    )
}

export default SignUpForm