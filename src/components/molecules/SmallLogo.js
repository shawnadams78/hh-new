import React from 'react'

import Box from '@material-ui/core/Box'

export const SmallLogo = () => {
  return (
    <Box
      bgcolor='white'
      border='1px dotted'
      borderColor='grey.500'
      color='grey.400'
      fontSize='30px'
      mx={4}
      p={2}
      textAlign='center'
      width='200px'>

      <span style={{ textDecoration: 'none !important' }}>SMALL LOGO</span>

    </Box>
  )
}
