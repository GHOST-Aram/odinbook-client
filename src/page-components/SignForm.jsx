import React from 'react'
import MuiTextField from '../core-components/MuiTextField'
import { initialValues, validate } from '../utils/form-handling'
import MuiButton from '../core-components/MuiButton'
import { useFormik } from 'formik'
import Form from '../core-components/Form'
import { post } from '../utils/fetch'


const SignUpForm = ( { displayFailure, setIsProcessing, displaySuccess}) => {
    
    
    const formik = useFormik({
        initialValues,
        validate,
    })
    
    const onSubmit = async() =>{
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

export default SignUpForm