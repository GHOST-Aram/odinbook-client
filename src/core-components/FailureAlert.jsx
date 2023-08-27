import React from 'react'
import { Alert, AlertTitle, Button } from '@mui/material'


const FailureAlert = ({ message, actionName }) => {
    return (
        <Alert 
            aria-label='failure alert' 
            severity='error'
            variant='filled'
            onClose={()=>{}}
            action={
                <Button 
                    color='inherit' 
                    size='small'
                >
                    { actionName }
                </Button>
            }
        >
            {message}
        </Alert>
    )
}

export default FailureAlert