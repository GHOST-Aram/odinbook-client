import React from 'react'
import { Alert, AlertTitle, Button } from '@mui/material'

const SuccessAlert = ({ message, actionName }) => {
  return (
    <Alert 
        aria-label='success alert' 
        severity='success'
        onClose={()=>{}}
        variant='filled'
        action = {
            <Button color='inherit' size='small'>{actionName}</Button>
        }
            
    >
        { message }
    </Alert>
  )
}

export default SuccessAlert