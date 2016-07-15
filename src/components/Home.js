import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventContainer from '../containers/EventContainer';

const propTypes = {
};

class Home extends Component {
  render() {
    return (
      <div>
        <EventContainer/>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
