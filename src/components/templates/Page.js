import React from 'react'

// atoms
import { TopBar } from '../atoms/TopBar'

// material-ui
import Box from '@material-ui/core/Box'

export const Page = ({ children, header }) => {
  return (
    <>
      <TopBar>
        <Box display='inline'>2 Main Street</Box>
        <Box display='inline' mx={6}>Cold Spring, New York</Box>
        <Box display='inline'>845-265-9355</Box>
      </TopBar>

      {header}

      {children}

      <Box
        bgcolor='grey.600'
        color='white'
        fontSize={14}
        p={2}
        pr={4}
        textAlign='right'>

        <Box display="inline" ml={5}>
          Hudson's Ribs &amp; Fish
        </Box>

        <Box display="inline" ml={5}>
          Reviews
        </Box>

        <Box display="inline" ml={5}>
          Area Attractions
        </Box>

      </Box>
      <Box
        bgcolor='grey.500'
        fontSize={12}
        p={1}
        textAlign='center'>
        &copy; 2021 Hudson House River Inn
      </Box>
    </>
  )
}
