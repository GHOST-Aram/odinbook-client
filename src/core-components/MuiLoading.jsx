import React from 'react'
import { 
    Stack, 
} from '@mui/material'
import SuccessAlert from './SuccessAlert'
import FailureAlert from './FailureAlert'
import MuiCircularProgress from './MuiCircularProgress'

const MuiLoading = (props) => {
    const {
        isProcessing , 
        isSuccess, 
        isDone, 
        failureRedirect,
        successRedirect,
        successMessage,
        failureMessage,
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
                        message={successMessage}
                        actionName={'Proceede'}
                        action={successRedirect}
                    />
                : (isDone && !isSuccess) && 
                    <FailureAlert 
                        message={failureMessage}
                        actionName={'Try Again'}
                        action={failureRedirect}
                    />
            }
        </Stack>
    )
}

export default MuiLoading