import React from 'react'
import { Paper } from '@mui/material'

const MuiPaper = ({children}) => {
  return (
    <Paper 
        sx={{
            width:{
                xs: '90%',
                sm: '90%',
                md: '60%',
                lg:'50%',
                xl: '30%'
            },
            padding: 2,
            marginInline: 'auto'
            
        }}
        aria-live='polite'
    >{children}</Paper>
  )
}

export default MuiPaper