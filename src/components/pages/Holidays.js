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

export const Holidays = () => {
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
          Holidays
        </Box>

        <Box mb={20}>
          <Grid
            alignItems='flex-end'
            container
            justify='center'
            spacing={2}>

            <Grid item xs={12} sm={7}>
              <Placeholder height={800} isText label='Holiday' />
            </Grid>

          </Grid>
        </Box>

      </Box>
    </Page>
  )
}
