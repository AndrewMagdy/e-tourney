import {
  LOAD_TOURNEYS_REQUEST,
  LOAD_TOURNEYS_SUCCESS,
  LOAD_TOURNEYS_FAIL,
  LOAD_TOURNEY_REQUEST,
  LOAD_TOURNEY_SUCCESS,
  LOAD_TOURNEY_FAIL
} from "./types";
import { push } from "connected-react-router";
import {
  getAllTourneysApi,
  getTourneyApi
} from "../services/tourneyAPI.service";

const loadTourneysRequest = () => ({
  type: LOAD_TOURNEYS_REQUEST
});

const loadTourneysSuccess = tourneyList => ({
  type: LOAD_TOURNEYS_SUCCESS,
  payload: { tourneyList }
});

const loadTourneysFail = error => ({
  type: LOAD_TOURNEYS_FAIL,
  payload: { error }
});

const loadTourneyRequest = () => ({
  type: LOAD_TOURNEY_REQUEST
});

const loadTourneySuccess = tourney => ({
  type: LOAD_TOURNEY_SUCCESS,
  payload: { tourney }
});

const loadTourneyFail = error => ({
  type: LOAD_TOURNEY_FAIL,
  payload: { error }
});

export const getTourneys = () => async dispatch => {
  dispatch(loadTourneysRequest());
  try {
    const tourneyList = await getAllTourneysApi();
    dispatch(loadTourneysSuccess(tourneyList));
  } catch (error) {
    dispatch(loadTourneysFail(error));
  }
};

export const getTourney = id => async dispatch => {
  dispatch(loadTourneyRequest());
  try {
    const tourney = await getTourneyApi(id);
    dispatch(loadTourneySuccess(tourney));
  } catch (error) {
    dispatch(loadTourneyFail(error));
  }
};

export const navToTourney = id => dispatch => {
  dispatch(push(`/tournament/${id}`));
};
