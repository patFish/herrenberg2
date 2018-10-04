import React, { Component } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import '../styles/NavigationTab.css';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import HBlogo from '../assets/HB_logobalken.jpg';

// import PropTypes from 'prop-types';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const routes = ['/', '/beers', '/news', '/about-us'];

const getIndexForRoute = route => {
  return Object.keys(routes).find(index => routes[index] === route);
};

class NavigationTab extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {
      value: 0
    };
  }
  static getDerivedStateFromProps(props, currentState) {
    const newState = Object.apply({}, currentState);
    newState.value =
      parseInt(getIndexForRoute(props.location.pathname), 10) || 0;
    return newState;
  }
  handleChange = (event, value) => {
    this.props.history.push(routes[value]);
  };

  render() {
    const { value } = this.state;
    // const { classes } = this.props;
    return (
      <div className="Tab">
        <AppBar position="inherit">
          <img src={HBlogo} className="hblogo" alt="hblogo" />
          {/* <IconButton
            // className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label="Unsere Biere" />
            <Tab label="News" />
            <Tab label="Über uns" />
          </Tabs>
          {/* {this.state.value === 0 ? <h1>Whats item one</h1> : null}
          {this.state.value === 1 ? <h1>Whats item two</h1> : null}
          {this.state.value === 2 ? <h1>Whats item three</h1> : null} */}
        </AppBar>
      </div>
    );
  }
}
NavigationTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(NavigationTab));
