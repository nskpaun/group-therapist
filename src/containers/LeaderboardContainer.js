import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgets } from '../modules/Widgets';

const propTypes = {
};

class LeaderboardContainer extends Component {
  render() {
    const {widgets, isFetching, onClick} = this.props;
    return (
      <div style={{background: 'red'}} onClick={onClick}>
        {'isFetching: ' + isFetching}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets,
    isFetching: state.widgets.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchWidgets);
    }
  };
};

LeaderboardContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderboardContainer);
