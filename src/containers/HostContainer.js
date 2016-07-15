import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHostName } from '../modules/Host';

const propTypes = {
};

class HostContainer extends Component {
  render() {
    const {hostName} = this.props;
    return (
      <div>
        {'The Current on call is: ' + hostName}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {hostName: state.host.hostName};
};

HostContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(HostContainer);
