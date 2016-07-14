import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {
};

class ClockContainer extends Component {
  render() {
    return (
      <div onClick={this.props.onClockClick}>
        {'Next happy hour: ' + this.props.nextHappyHour}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {nextHappyHour: state.home.nextHappyHour};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClockClick: () => {
      dispatch({
        type: 'SET_HAPPY_HOUR'
      })
    }
  };
};

ClockContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClockContainer);
