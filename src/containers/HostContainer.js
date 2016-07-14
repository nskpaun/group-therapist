import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HostContainerForm } from '../forms/HostContainerForm';

const propTypes = {
};

class HostContainer extends Component {
  render() {
    const {onCall, handleSetNewOnCall} = this.props;
    return (
      <div>
        {'The Current on call is: ' + onCall}
        <HostContainerForm
          onSetNewOnCall={handleSetNewOnCall}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {onCall: state.home.onCall};
};
const mapDispatchToProps = (dispatch) => {
  return {handleSetNewOnCall: (value) => {
    dispatch({
      type: 'SET_ONCALL',
      onCall: value.newOnCall
    })
  }};
};

HostContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostContainer);
