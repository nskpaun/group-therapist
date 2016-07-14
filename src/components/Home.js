import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClockContainer from '../containers/ClockContainer';

const propTypes = {
};

class Home extends Component {
  render() {
    return (
      <div>
        This is the dumb wrapper for home
        <ClockContainer/>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
