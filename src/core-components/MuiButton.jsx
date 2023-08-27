import React from 'react'
import { Button } from '@mui/material'

const MuiButton = ({handleClick, name}) => {
  return (
    <Button 
        variant='contained'
        onClick={handleClick}
		color='primary'
        fullWidth
    >
        { name }
    </Button>
  )
}

export default MuiButton