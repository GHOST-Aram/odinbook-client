import React from 'react'
import { Alert, Button } from '@mui/material'

const SuccessAlert = ({ message, actionName, action }) => {
  return (
    <Alert 
        aria-label='success alert' 
        severity='success'
        onClose={()=>{}}
        variant='filled'
        action = {
            <Button 
                color='inherit' 
                size='small'
                onClick={action}
            >{actionName}</Button>
        }
            
    >
        { message }
    </Alert>
  )
}

export default SuccessAlert