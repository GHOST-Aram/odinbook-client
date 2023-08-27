import React, { useState } from 'react'
import Form from '../core-components/Form'
import MuiTextField from '../core-components/MuiTextField'
import MuiButton from '../core-components/MuiButton'
import { post } from '../utils/fetch'

const SignUpForm = ( { setIsDone, setIsProcessing, setIsSuccess}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    


    const signUp = async() =>{
        setIsProcessing(true)
        try {
            const result = await post('http://localhost:8000/accounts/user', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })
    
            const userId = result.userId
    
            if(userId) {
                setIsSuccess(true)
                setIsDone(true)
            }   
        } catch (error) {
            setIsDone(true)
            setIsSuccess(false)
        }
    }

    return (
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
    )
}

export default SignUpForm