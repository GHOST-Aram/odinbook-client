import React from 'react'
import { Box } from '@mui/material'

const Container = ({children, sx}) => {
  return (
    <Box 
    	component={'div'}
		sx={sx || null}
	>{children}</Box>
  )
}

export default Container