import React from 'react'
import { Alert, Button } from '@mui/material'


const FailureAlert = ({ message, actionName, action }) => {
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
                    onClick={action}
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