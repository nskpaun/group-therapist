import React, { Component, PropTypes } from 'react';
import { BarChart } from 'react-d3-components';

const propTypes = {
};

class GameLeaderboard extends Component {
  render() {
    const {widget} = this.props;

    const data = {
      label: widget.gameName,
      values: widget.people.map(person => {
        return{x: person.name, y: person.score}
      })
    };

    return (
      <div>
        <BarChart
          data={data}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
      </div>
    );
  }
}

GameLeaderboard.propTypes = propTypes;
export default GameLeaderboard;
