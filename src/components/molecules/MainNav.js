import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// material-ui
import Box from '@material-ui/core/Box'

export const MainNav = () => {
  return (
    <Box
      as='nav'
      className='main-nav'
      textAlign='center'>

      <Box
        alignItems='top'
        display='flex'
        justifyContent='space-between'
        mx='auto'
        width='66%'>

        <HashLink to='/#about'>ABOUT</HashLink>
        <Link to='/menu'>MENU</Link>
        <Link to='/inn'>INN</Link>
        <Link to='/catering'>PRIVATE PARTIES</Link>
        <Link to='/packages'>PACKAGES</Link>
        <Link to='/events'>EVENTS</Link>
        <Link to='/holidays'>HOLIDAYS</Link>

      </Box>

    </Box>
  )
}
