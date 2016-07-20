import { fetchEvents as fetchCloudEvents } from '../cloud/lambdas';

// Constants

const REQUEST = 'group-therapist/events/REQUEST';
const RECEIVE = 'group-therapist/events/RECEIVE';

// Action Creators

function requestEvents() {
  return { type: REQUEST };
}

function receiveEvents(events) {
  return { type: RECEIVE, events };
}

export function fetchEvents(dispatch) {
  dispatch(requestEvents());
  fetchCloudEvents((data, err) => {
    if (err) {
    } else {
      dispatch(receiveEvents(data));
    }
  });
}

function shouldFetchEvents(state) {
  return !state.events.isFetching;
}

export function fetchEventsIfNeeded(dispatch, getState) {
  if (shouldFetchEvents(getState())) {
    return dispatch(fetchEvents);
  }
}

// Reducer

export const defaultState = {
  allEvents: [],
  currentEvent: {
    name: 'Happy Hour',
    hostName: 'Alex',
    time: 14,
  },
  isFetching: false,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE:
      let events = parseEvents(action.events);
      return {
        ...state,
        isFetching: false,
        allEvents: events,
        currentEvent: determineCurrentEvent(events),
      }

  default:
    return state;
  }
}

// Reducer Helpers

function parseEvents(cloudEvents) {
  return cloudEvents.Items.map((cloudEvent) => {
    return {
      hostName: cloudEvent.host_name,
      name: cloudEvent.name,
      time: cloudEvent.timestamp,
    };
  });
}

function determineCurrentEvent(events) {
  return events[0];
}
