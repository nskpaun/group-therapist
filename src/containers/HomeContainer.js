import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClockContainer from './ClockContainer';

const propTypes = {
};

class HomeContainer extends Component {
  render() {
    return (
      <div>
        Home Container Nate
        <ClockContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

HomeContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
