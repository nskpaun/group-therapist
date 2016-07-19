import React, { Component, PropTypes } from 'react';
import countdown from 'countdown';

import styles from './styles.scss';

const propTypes = {
};

class Timer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      ...this._countDown(props.goal),
    };
  }

  componentDidMount() {
    this.tick();
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      ...this._countDown(this.props.goal),
    });
  }

  _countDown(goal) {
    var countDown = countdown(null, goal*1000, countdown.HOURS | countdown.MINUTES | countdown.DAYS | countdown.SECONDS);
    return {
      days: countDown.days,
      hours: countDown.hours,
      minutes: countDown.minutes,
      seconds: countDown.seconds,
    }
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.digitContainer}>
            <div className={styles.digitValue}>
              {this.state.days}
            </div>
            <div className={styles.digitTitle}>
              DAYS
            </div>
          </div>
          <div className={styles.digitContainer}>
            <div className={styles.digitValue}>
              {this.state.hours}
            </div>
            <div className={styles.digitTitle}>
              HOURS
            </div>
          </div>
          <div className={styles.digitContainer}>
            <div className={styles.digitValue}>
              {this.state.minutes}
            </div>
            <div className={styles.digitTitle}>
              MINUTES
            </div>
          </div>
          <div className={styles.digitContainer}>
            <div className={styles.digitValue}>
              {this.state.seconds}
            </div>
            <div className={styles.digitTitle}>
              SECONDS
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Timer.propTypes = propTypes;
export default Timer;
