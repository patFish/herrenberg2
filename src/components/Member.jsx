import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 100,
    margin: 10,
    width: '13vw'
  },
  media: {
    height: 0,
    transform: 'rotate(90deg)',
    paddingTop: '100%', // 16:9
    backgroundPosition: 'unset'
  }
};

class Member extends Component {
  constructor(props) {
    super(props);
    this.member = props.member;
    this.classes = props.classes;
  }
  render() {
    return (
      <Card className={this.classes.card}>
        <CardMedia
          image={this.member.picture}
          title={this.member.name}
          // height="50"
          className={this.classes.media}
        >
          {/* <h2>CardMedia</h2> */}
        </CardMedia>
        <CardContent>
          {/* <img src={munnilogo} /> */}
          <Typography gutterBottom variant="headline" component="h3">
            {this.member.name} {this.member.surname}
          </Typography>
          {/* <Typography component="p">
            {' '}
            {this.member.name} {this.member.surname}
          </Typography> */}
        </CardContent>
      </Card>
    );
  }
}

Member.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Member);
