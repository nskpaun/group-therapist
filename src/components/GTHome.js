import React, { Component, PropTypes } from 'react';

import CountDown from './CountDown';
import GTHost from './GTHost';

const propTypes = {
};

class GTHome extends Component {
  render() {
    return (
      <div>
        Group Therapist
        <CountDown/>
        <GTHost/>
      </div>
    );
  }
}

GTHome.propTypes = propTypes;
export default GTHome;
