import React from 'react'
import MuiTextField from '../core-components/MuiTextField'
import MuiButton from '../core-components/MuiButton'
import { useFormik } from 'formik'
import Form from '../core-components/Form'
import { post } from '../utils/fetch'



const LoginForm = ( props ) => {
    const { displayFailure, setIsProcessing } = props
    
    const formik = useFormik({
        initialValues,
        validate,
    })

    const onSubmit = async() =>{
        if((Object.values(formik.errors)).length > 0){
            setIsProcessing(true) //Start processing request
            try {
                const result = await post(
                    'http://localhost:8000/accounts/user/login', {...formik.values}
                )
                console.log(result)
                
            } catch (error) {
                displayFailure()
            }
        }
    }

    return (
        <Form 
            label={'Log in to Your Account'}
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
                name={'Log in'}
                type={'submit'}
            />
        </Form> 
    )
}

const initialValues = {
    username: '',
    password: '',
    
}

const validate = values =>{
    let errors = {}
    
    errors.username = !values.username && 'Required'
    errors.password = !values.password && 'Required'

    return errors
}

export default LoginForm