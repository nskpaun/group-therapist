import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {
};

class HostContainer extends Component {
  render() {
    return (
      <div>
        {'The Current on call is: ' + this.props.onCall}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {onCall: state.home.oncall};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

HostContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostContainer);
