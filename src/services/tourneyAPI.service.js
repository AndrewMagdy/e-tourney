import tournaments from "../constants/tournaments";

export const getAllTourneysApi = async () => {
  return tournaments;
};

export const getTourneyApi = async id => {
  return tournaments.filter(tourney => tourney.id === Number(id))[0];
};
