import React from 'react'

import Box from '@material-ui/core/Box'

export const TopBar = ({ children }) => {
  return (
    <Box
      bgcolor='#485059'
      color='white'
      fontFamily='Lato, Helvetica, sans-serif'
      fontSize={14}
      p={1}
      textAlign='center'>

      {children}

    </Box>
  )
}
