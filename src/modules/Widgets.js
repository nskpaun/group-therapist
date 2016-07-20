import { fetchWidgets as fetchCloudWidgets } from '../cloud/lambdas';

// Constants

const REQUEST = 'group-therapist/widgets/REQUEST';
const RECEIVE = 'group-therapist/widgets/RECEIVE';

// Action Creators

function request() {
  return { type: REQUEST };
}

function receive(widgets) {
  return { type: RECEIVE, widgets };
}

export function fetchWidgets(dispatch) {
  dispatch(request());
  fetchCloudWidgets((data, err) => {
    if (err) {
      console.log("[fetchWidgets] bummer...");
    } else {
      dispatch(receive(data));
    }
  });
}

function shouldFetchWidgets(state) {
  return !state.widgets.isFetching;
}

export function fetchWidgetsIfNeeded(dispatch, getState) {
  if (shouldFetchWidgets(getState())) {
    return dispatch(fetchWidgets);
  }
}

// Reducer

export const defaultState = {
  allWidgets: [],
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
      let allWidgets = parseWidgets(action.widgets);
      return {
        ...state,
        isFetching: false,
        allWidgets
      }

  default:
    return state;
  }
}

// Reducer Helpers

function parseWidgets(cloudWidgets) {
  return cloudWidgets.map((cloudWidget) => {
    return cloudWidget;
  });
}
