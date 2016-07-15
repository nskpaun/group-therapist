import { fetchEvents as fetchCloudEvents } from '../cloud/lambdas';

// Constants

const REQUEST = 'group-therapist/events/REQUEST';
const RECIEVE = 'group-therapist/events/RECIEVE';

// Action Creators

function requestEvents() {
  return { type: REQUEST };
}

function receiveEvents(events) {
  return { type: RECIEVE, events };
}

export function fetchEvents(dispatch) {
  dispatch(requestEvents());
  fetchCloudEvents((data, err) => {
    if (err) {
      console.log("[fetchEvents] bummer...");
    } else {
      dispatch(receiveEvents(data));
    }
  });
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
    case RECIEVE:
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
      time: cloudEvent.ts,
    };
  });
}

function determineCurrentEvent(events) {
  return events[0];
}
