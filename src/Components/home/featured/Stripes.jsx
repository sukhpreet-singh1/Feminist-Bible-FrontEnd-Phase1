import React, { Component } from 'react';
import { Animate } from 'react-move';

export default class Stripes extends Component {
  constructor() {
    super();
    this.state = {
      stripes: [
        {
          background: '98c5e9'
        },
        {
          background: '#ffffff'
        },
        {
          background: '98c5e9'
        }
      ]
    };
  }

  showStripes() {
    const { stripes } = this.state;
    stripes.map((stripe, i) => (
      <Animate
        /* eslint-disable react/no-array-index-key */
        key={i}
        show
        start={{
          background: '#ffffff'
        }}
        enter={{
          background: [stripe.background]
        }}>
        {({ background }) => {
          return <div className="stripe" style={{ background }} />;
        }}
      </Animate>
    ));
  }

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}
