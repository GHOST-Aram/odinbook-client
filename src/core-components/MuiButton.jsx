import React from 'react'
import { Button } from '@mui/material'

const MuiButton = ({handleClick, name, size}) => {
  return (
    <Button 
        variant='contained'
        onClick={handleClick}
		color='primary'
        fullWidth
		size= {size || 'medium'}
    >
        { name }
    </Button>
  )
}

export default MuiButton