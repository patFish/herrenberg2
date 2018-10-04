import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import '../styles/App.css';
// import Content from './Content';
import BeerOverview from './BeerOverview';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  createMuiTheme,
  withTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#444444',
      // main: '#000000'
      main: '#ababab'
      // dark: '#002884',
      // contrastText: '#fff'
    },
    secondary: {
      // light: '#ff7961',
      main: '#f3cd56'
      // dark: '#ba000d',
      // contrastText: '#000'
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} className="App">
        <BrowserRouter>
          <div className="entrypoint">
            <Header />
            <Switch>
              <Route path="/beers" component={BeerOverview} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default withTheme()(App);
