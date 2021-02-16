import React from 'react'

import Box from '@material-ui/core/Box'

export const TopBar = ({ children }) => {
  return (
    <Box
      bgcolor='grey.600'
      color='white'
      fontSize={14}
      p={1}
      textAlign='center'>

      {children}

    </Box>
  )
}
