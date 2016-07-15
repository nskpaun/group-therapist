import { fetchEvents } from '../cloud/lambdas';

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
  fetchEvents((data, err) => {
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
      console.log(action.hostName);
      return {
        ...state,
        isFetching: false,
      }

  default:
    return state;
  }
}
