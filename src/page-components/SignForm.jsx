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
    const [isSending, setIsSending] = useState(false)

    const signUp = async() =>{
        setIsSending(true)
    }

    return (
        <>
        {
            !isSending ?
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
            : <MuiLoading />
        }
        </>
    )
}

export default SignUpForm