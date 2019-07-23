import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Submit from './Submit'
import Confirm from './Confirm'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0095B2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF7600',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#9C3C08',
    },
  },
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Route exact path={'/'} render={(routerProps) => <Home routerProps={routerProps} />} />
        <Route exact path={'/submit'} render={(routerProps) => <Submit routerProps={routerProps} />} />
        <Route exact path={'/confirm'} render={(routerProps) => <Confirm routerProps={routerProps} />} />
      </MuiThemeProvider>
    )
  }
}

export default App
