import React from 'react'
import { Paper } from '@mui/material'
import { Margin } from '@mui/icons-material'

const MuiPaper = ({children}) => {
  return (
    <Paper 
        sx={{
            width:{
                xs: '100%',
                sm: '100%',
                md: '60%',
                lg:'50%',
                xl: '30%'
            },
            padding: 2,
            marginInline: 'auto'
            
        }}
    >{children}</Paper>
  )
}

export default MuiPaper