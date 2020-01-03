import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from './constants';

const initialState = {
  number: 0
};

const reducer = (state = initialState, action) => {
  let number;
  switch (action.type) {
    case INCREMENT_COUNTER:
      number = state.number + 1;
      return {
        ...state,
        number
      };
    case DECREMENT_COUNTER:
      number = state.number === 0 ? 0 : state.number - 1;
      return {
        ...state,
        number
      };
    case RESET_COUNTER:
      return {
        ...state,
        number: 0
      };

    default:
      return state;
  }
};

export default reducer;
