import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  card: {
    maxWidth: 345,
    margin: 5
  },
  media: {
    height: 20,
    paddingTop: '56.25%' // 16:9
  }
};

class BeerCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.beer = props.beer;
    this.classes = props.classes;
  }
  render() {
    return (
      <Card className={this.classes.card}>
        <CardMedia
          image={this.beer.logo}
          title={this.beer.name}
          // height="50"
          className={this.classes.media}
        >
          {/* <h2>CardMedia</h2> */}
        </CardMedia>
        <CardContent>
          {/* <img src={munnilogo} /> */}
          <Typography gutterBottom variant="headline" component="h2">
            {this.beer.name}
          </Typography>
          <Typography component="p">{this.beer.description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

BeerCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BeerCard);
