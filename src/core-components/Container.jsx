import React from 'react'
import { Box } from '@mui/material'

const Container = ({children}) => {
  return (
    <Box component={'div'}>{children}</Box>
  )
}

export default Container