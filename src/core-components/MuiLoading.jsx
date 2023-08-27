import React from 'react'
import { 
    Alert,
    AlertTitle,
    CircularProgress, 
    Stack, 
    Typography 
} from '@mui/material'
import SuccessAlert from './SuccessAlert'
import FailureAlert from './FailureAlert'

const MuiLoading = ({isProcessing , isSuccess, isDone}) => {
  return (
    <Stack 
        spacing={4} 
        alignItems={'center'} 
        direction={'column'}
        paddingY={20}
    >
        {
            isProcessing  && !isDone ? 
                <>
                    <CircularProgress color='primary' />
                    <Typography>Processing ... </Typography>
                </>
            : isDone && isSuccess ? 
               <SuccessAlert 
                    message={'Account created sucessfully'}
                    actionName={'Go to Login'}
                />
            : (isDone && !isSuccess) && 
                <FailureAlert 
                    message={'Sign Up failed'}
                    actionName={'Try Again'}
                />
        }
    </Stack>
  )
}

export default MuiLoading