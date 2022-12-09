import { GET_ALBUMS } from "../actions";

const initialState = {
  data: [],
};

const albumReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default albumReducer;
