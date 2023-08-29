export const initialValues = {
    first_name: '',
    last_name: '',
    username: '',
    email: 'ghghgh',
    password: '',
    confirm_password: '',
}

export const validate = values =>{
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
