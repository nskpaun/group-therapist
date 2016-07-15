import { fetchWidgets as fetchCloudWidgets } from '../cloud/lambdas';

// Constants

const REQUEST = 'group-therapist/widgets/REQUEST';
const RECIEVE = 'group-therapist/widgets/RECIEVE';

// Action Creators

function request() {
  return { type: REQUEST };
}

function receive(widgets) {
  return { type: RECIEVE, widgets };
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

// Reducer

export const defaultState = {
  widgets: [],
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
      let widgets = parseWidgets(action.widgets);
      return {
        ...state,
        isFetching: false,
        widgets
      }

  default:
    return state;
  }
}

// Reducer Helpers

function parseWidgets(cloudWidgets) {
  return cloudWidgets.Items.map((cloudWidget) => {
    return cloudWidget;
  });
}
