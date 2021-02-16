import React from 'react'

import Box from '@material-ui/core/Box'

export const LargeLogo = () => {
  return (
    <Box
      bgcolor='white'
      border='1px dotted'
      borderColor='grey.500'
      color='grey.400'
      fontSize='60px'
      mx='auto'
      my={5}
      p={10}
      textAlign='center'
      width='575px'>

      <span style={{ textDecoration: 'none !important' }}>LARGE LOGO</span>

    </Box>
  )
}
