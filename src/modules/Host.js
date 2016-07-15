// Constants

const UPDATE = 'group-therapist/host/UPDATE';

// Action Creators

export function updateHostName(hostName) {
  return { type: UPDATE, hostName };
}

// Reducer

export const defaultState = {
  hostName: "eithan",
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        hostName: action.hostName
      }

  default:
    return state;
  }
}
