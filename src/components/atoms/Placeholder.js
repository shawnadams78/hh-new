import React from 'react'

// atoms
import Box from '@material-ui/core/Box'

// icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'

export const Placeholder = ({ isText = false, label, height = 300, ...props }) => {
  return (
    <Box
      alignItems='center'
      bgcolor={isText ? 'white' : 'grey.400'}
      border='1px solid'
      borderColor={isText ? 'grey.300' : 'grey.500' }
      color={isText ? 'grey.500' : 'white' }
      display='flex'
      height={height}
      justifyContent='center'
      {...props}>

      {!isText &&
      <PhotoCameraIcon />
      }

      <Box p={2}>{label}</Box>

    </Box>
  )
}
