import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClockContainer from '../containers/ClockContainer';
import HostContainer from '../containers/HostContainer';

const propTypes = {
};

class Home extends Component {
  render() {
    return (
      <div>
        This is the dumb wrapper for home
        <ClockContainer/>
        <HostContainer/>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
