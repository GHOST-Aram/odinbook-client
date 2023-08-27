import React from 'react'
import { 
    CircularProgress, 
    Stack, 
    Typography 
} from '@mui/material'
import SuccessAlert from '../core-components/SuccessAlert'
import FailureAlert from '../core-components/FailureAlert'
import MuiCircularProgress from '../core-components/MuiCircularProgress'

const MuiLoading = ({isProcessing , isSuccess, isDone, retry}) => {
  return (
    <Stack 
        spacing={4} 
        alignItems={'center'} 
        direction={'column'}
        paddingY={20}
    >
        {
            isProcessing  && !isDone ? 
               <MuiCircularProgress loadingText={'Processing'}/>
            : isDone && isSuccess ? 
               <SuccessAlert 
                    message={'Account created sucessfully'}
                    actionName={'Go to Login'}
                />
            : (isDone && !isSuccess) && 
                <FailureAlert 
                    message={'Sign Up failed'}
                    actionName={'Try Again'}
                    action={retry}
                />
        }
    </Stack>
  )
}

export default MuiLoading