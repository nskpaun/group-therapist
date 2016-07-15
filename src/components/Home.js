import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClockContainer from '../containers/ClockContainer';
import HostContainer from '../containers/HostContainer';

import { fetchData, fetchEventData } from '../cloud/lambdas';

const propTypes = {
};

class Home extends Component {

  componentWillMount() {
    fetchData(data => {
      console.log('getting data in home');
      console.log(data);
    });

    fetchEventData(data => {
      console.log('getting event data in home');
      console.log(data);
    });
  }



  render() {
    return (
      <div>
        <HostContainer/>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
