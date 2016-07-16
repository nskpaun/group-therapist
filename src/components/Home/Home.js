import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventContainer from 'containers/EventContainer';
import LeaderboardContainer from 'containers/LeaderboardContainer';
import styles from './styles.scss'

const propTypes = {
};

class Home extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <EventContainer/>
        <LeaderboardContainer/>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
