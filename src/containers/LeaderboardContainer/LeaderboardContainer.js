import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgetsIfNeeded } from 'modules/Widgets';

import GameLeaderboard from 'components/GameLeaderboard';

import styles from './styles.scss';

const propTypes = {
};

class LeaderboardContainer extends Component {

  componentDidMount() {
    this.props.fetchWidgetsIfNeeded();
  }
  render() {
    const {widgets, isFetching, onClick} = this.props;

    const leaderBoards = widgets ? widgets.map(widget =>
      <div className={styles.widget} key={widget.gameId}>
        <GameLeaderboard key={widget.gameId} widget={widget}/>
      </div>
    ) : [];

    return (
      <div className={styles.mainContainer}>
        {leaderBoards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets.allWidgets,
    isFetching: state.widgets.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchWidgetsIfNeeded: () => {
      dispatch(fetchWidgetsIfNeeded);
    },
  };
};

LeaderboardContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderboardContainer);
