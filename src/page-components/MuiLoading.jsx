import React from 'react'
import { 
    Stack, 
} from '@mui/material'
import SuccessAlert from '../core-components/SuccessAlert'
import FailureAlert from '../core-components/FailureAlert'
import MuiCircularProgress from '../core-components/MuiCircularProgress'

const MuiLoading = (props) => {
    const {
        isProcessing , 
        isSuccess, 
        isDone, 
        handleFailure,
        handleSuccess
    } = props
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
                        action={handleSuccess}
                    />
                : (isDone && !isSuccess) && 
                    <FailureAlert 
                        message={'Sign Up failed'}
                        actionName={'Try Again'}
                        action={handleFailure}
                    />
            }
        </Stack>
    )
}

export default MuiLoading