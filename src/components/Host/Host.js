import React, { Component, PropTypes } from 'react';
import styles from './styles.scss'

const propTypes = {
};

class Host extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        {this.props.name}
      </div>
    );
  }
}

Host.propTypes = propTypes;
export default Host;
