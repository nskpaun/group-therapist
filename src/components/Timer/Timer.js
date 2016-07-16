import React, { Component, PropTypes } from 'react';
import styles from './styles.scss'

const propTypes = {
};

class Timer extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>{}
        {this.props.goal}
      </div>
    );
  }
}

Timer.propTypes = propTypes;
export default Timer;
