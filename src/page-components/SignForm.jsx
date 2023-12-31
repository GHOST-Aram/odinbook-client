import React from 'react'
import MuiTextField from '../core-components/MuiTextField'
import MuiButton from '../core-components/MuiButton'
import { useFormik } from 'formik'
import Form from '../core-components/Form'
import { post } from '../utils/fetch'



const SignUpForm = ( props ) => {
    const { displayFailure, setIsProcessing, displaySuccess} = props
    
    const formik = useFormik({
        initialValues,
        validate,
    })

    const onSubmit = async() =>{
        if((Object.values(formik.errors)).length > 0){
            setIsProcessing(true) //Start processing request
            try {
                const result = await post(
                    'http://localhost:8000/accounts/user', {...formik.values}
                )
                console.log(result)
                if(result.userId){
                    displaySuccess()
                } else if (result.error){
                    displayFailure()    
                } else {
                    displayFailure()
                }
            } catch (error) {
                displayFailure()
            }
        }
    }

    return (
        <Form 
            label={'Sign Up For a New Account'}
            onSubmit={onSubmit}
        >
            {
                Object.keys(formik.values).map(field => (
                    <MuiTextField
                        key={field}
                        name={`${field}`}
                        formik={formik}
                    />
                ))
            }
                <MuiButton 
                name={'Sign Up'}
                type={'submit'}
            />
        </Form> 
    )
}

const initialValues = {
    first_name: '',
    last_name: '',
    username: '',
    email: 'ghghgh',
    password: '',
    confirm_password: '',
}

const validate = values =>{
    let errors = {}
    errors.first_name = !values.first_name &&  'Required'
    errors.last_name = !values.last_name && 'Required' 
    errors.username = !values.username && 'Required'
    errors.password = !values.password && 'Required'
    errors.confirm_password = !values.confirm_password ? 'Required' :
        values.password !== values.confirm_password && 'Password mismatch'
    errors.email = !values.email ? 'Required' : 
    !(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(values.email) && 'Invalid email'

    return errors
}

export default SignUpForm