import React from 'react'

// atoms
import { Placeholder } from '../atoms/Placeholder'

// organisms
import { Header } from '../organisms/Header'

// template
import { Page } from '../templates/Page'

// material-ui
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

// icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'

export const Packages = () => {
  return (
    <Page header={<Header />}>
      <Box
        bgcolor='#ddd'
        minHeight={2000}
        px={25}
        py={5}
        textAlign='center'>

        <Box
          color='#666'
          fontSize={60}
          mb={5}>
          Packages
        </Box>

        <Box mb={20}>
          <Grid
            alignItems='flex-end'
            container
            justify='center'
            spacing={2}>

            <Grid item xs={12} sm={7}>
              <Placeholder height={800} isText label='Package' />
            </Grid>

          </Grid>
        </Box>

      </Box>
    </Page>
  )
}
