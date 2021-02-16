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

// home
export const Home = () => {
  return (
    <Page header={<Header size='large' />}>
      <Box p={1} pb={4}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Placeholder label='Dining/View' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Placeholder label='Dinner' />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Placeholder label='Breakfast' />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Placeholder label='Room' />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Placeholder label='Cold Spring' />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Placeholder label='River' />
          </Grid>
        </Grid>
      </Box>

      <Box
        alignItems='center'
        bgcolor='grey.300'
        display='flex'
        minHeight='100vh'
        p={12}>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <Placeholder label='Historic marker' />
          </Grid>
          <Grid item xs={12} sm={7}>
            <a id='about' />
            <p>
              <b>About/History text here </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </Grid>
        </Grid>
      </Box>

      <Box
        alignItems='center'
        bgcolor='white'
        display='flex'
        minHeight='100vh'
        p={12}>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={7}>
            <p>
              <b>Dining/Chef text here? </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Placeholder label='Food images' />
          </Grid>
        </Grid>
      </Box>

      <Box
        alignItems='center'
        bgcolor='grey.300'
        display='flex'
        minHeight='100vh'
        p={12}>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={8}>
            <Placeholder label='Map' height={500} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>
              <b>Hours </b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p>
              <b>Directions </b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p>
              <b>Contact </b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </Grid>
        </Grid>
      </Box>
    </Page>
  )
}
