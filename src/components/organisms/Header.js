import React from 'react'

// material-ui
import Box from '@material-ui/core/Box'

// molecules
import { LargeLogo } from '../molecules/LargeLogo'
import { MainNav } from '../molecules/MainNav'
import { SmallLogo } from '../molecules/SmallLogo'

export const Header = ({ size = 'small' }) => {
  return size === 'small' ? (
    <Box
      alignItems='center'
      display='flex'
      py={3}>

      <a href='/' style={{ textDecoration: 'none' }}>
        <SmallLogo style={{ textDecoration: 'none' }} />
      </a>

      <Box flexGrow={2}>
        <MainNav />
      </Box>
    </Box>
  ) : (
    <Box mb={6}>
      <a href='/' style={{ textDecoration: 'none' }}>
        <LargeLogo style={{ textDecoration: 'none' }} />
      </a>
      <MainNav />
    </Box>
  )
}
