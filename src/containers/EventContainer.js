import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../modules/Events';

const propTypes = {
};

class EventContainer extends Component {
  render() {
    const {event, isFetching, onClick} = this.props;
    return (
      <div style={{background: 'blue'}} onClick={onClick}>
        {'The Current on call is: ' + event.hostName}<br/>
        {'isFetching: ' + isFetching}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.events.currentEvent,
    isFetching: state.events.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchEvents);
    }
  };
};

EventContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventContainer);
