import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import NoSsr from '@material-ui/core/NoSsr'
import { createMuiTheme } from '@material-ui/core/styles'

import { Home } from './components/pages/Home'
import { Menu } from './components/pages/Menu'
import { Inn } from './components/pages/Inn'
import { Catering } from './components/pages/Catering'
import { Packages } from './components/pages/Packages'
import { Events } from './components/pages/Events'
import { Holidays } from './components/pages/Holidays'

import './App.scss'

const theme = createMuiTheme()

function App() {
  return (
    <>
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>

              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/menu'>
                <Menu />
              </Route>
              <Route exact path='/inn'>
                <Inn />
              </Route>
              <Route exact path='/catering'>
                <Catering />
              </Route>
              <Route exact path='/packages'>
                <Packages />
              </Route>
              <Route exact path='/events'>
                <Events />
              </Route>
              <Route exact path='/holidays'>
                <Holidays />
              </Route>

            </Switch>
          </Router>
        </ThemeProvider>
      </NoSsr>
    </>
  );
}

export default App;
