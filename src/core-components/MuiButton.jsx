import React from 'react'
import { Button } from '@mui/material'

const MuiButton = ({handleClick, name, type}) => {
  return (
    <Button 
        variant='contained'
        onClick={handleClick}
		color='primary'
        fullWidth
		type={type || 'button'}
		size= {'medium'}
    >
        { name }
    </Button>
  )
}

export default MuiButton