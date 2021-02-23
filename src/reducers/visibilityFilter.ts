import { ActionTypes } from "../actionTypes";
import { VisibilityFilterTypes } from "../types";
import { TodoActions } from "../actions";

const visibilityFilter = (
  state: VisibilityFilterTypes,
  action: TodoActions
) => {
  switch (action.type) {
    case ActionTypes.SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
