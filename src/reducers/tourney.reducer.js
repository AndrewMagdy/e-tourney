import {
  LOAD_TOURNEYS_REQUEST,
  LOAD_TOURNEYS_SUCCESS,
  LOAD_TOURNEYS_FAIL,
  LOAD_TOURNEY_REQUEST,
  LOAD_TOURNEY_SUCCESS,
  LOAD_TOURNEY_FAIL
} from "../actions/types";

const initialState = {
  tourneyList: [],
  tourneyDetail: {},
  isLoading: false,
  isError: false,
  errorMessage: ""
};

const tourneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TOURNEYS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: ""
      };
    }
    case LOAD_TOURNEYS_SUCCESS: {
      return {
        ...state,
        tourneyList: action.payload.tourneyList,
        isLoading: false,
        isError: false,
        errorMessage: ""
      };
    }
    case LOAD_TOURNEYS_FAIL: {
      return {
        ...state,
        tourneyList: [],
        isLoading: false,
        isError: true,
        errorMessage: action.payload.error
      };
    }
    case LOAD_TOURNEY_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: ""
      };
    }
    case LOAD_TOURNEY_SUCCESS: {
      return {
        ...state,
        tourneyDetail: action.payload.tourney,
        isLoading: false,
        isError: false,
        errorMessage: ""
      };
    }
    case LOAD_TOURNEY_FAIL: {
      return {
        ...state,
        tourneyDetail: {},
        isLoading: false,
        isError: true,
        errorMessage: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
};

export default tourneyReducer;
