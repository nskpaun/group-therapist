import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents, fetchEventsIfNeeded } from 'modules/Events';
import styles from './styles.scss'
import Timer from 'components/Timer';
import Host from 'components/Host';

const propTypes = {
};

class EventContainer extends Component {

  componentDidMount() {
    this.props.fetchEventsIfNeeded();
  }

  render() {
    const {event, isFetching, onClick} = this.props;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.hostContainer}>
          <div className={styles.hostInner}>
            <p className={styles.eventName}>
              {event.name}
            </p>
            <Host name={event.hostName}/>
          </div>
        </div>
        <div className={styles.timerContainer}>
          <Timer goal={event.time}/>
        </div>
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
    fetchEventsIfNeeded: () => {
      dispatch(fetchEventsIfNeeded);
    },
  };
};

EventContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventContainer);
