import React from 'react'

import Box from '@material-ui/core/Box'

import Watermark from '../../assets/images/hh-inn-watermark.png'

export const LargeLogo = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${Watermark})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
      color='#3e454d'
      fontFamily='Lato, Helvetica, sans-serif'
      fontWeight='400'
      mx='auto'
      my={5}
      p={10}
      textAlign='center'>

      <Box
        fontSize='85px'
        letterSpacing={-1}
        mb='8px'
        style={{
          textDecoration: 'none !important',
          textShadow: '1px 1px 0 #fff'
        }}>
        HUDSON HOUSE
      </Box>

      <Box
        bgcolor='#6081a6'
        border='1px solid'
        borderColor='#fff'
        color='#fff'
        display='inline-block'
        fontSize='20px'
        mx='auto'
        pb='6px'
        px='50px'
        pt='4px'
        width='auto'>
        RIVER INN
      </Box>

    </Box>
  )
}
