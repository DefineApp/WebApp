import {
  ADD_CHALLENGE,
  DELETE_CHALLENGE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHALLENGE,
  FILTER_CHALLENGE,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CHALLENGE:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
