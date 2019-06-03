import { connect } from "react-redux";
import { createMatchSelector } from "connected-react-router";
import TourneyDetail from "../components/TourneyDetail.component";
import { getTourney } from "../actions/tourney.actions";

const mapStateToProps = state => {
  const matchSelector = createMatchSelector({ path: "/tournament/:id" });
  const match = matchSelector(state);
  const id = match ? match.params.id : null;

  return {
    tourney: state.tourneys.tourneyDetail,
    isLoading: state.tourneys.isLoading,
    tourneyId: id
  };
};

const mapDispatchToProps = dispatch => ({
  getTourney: id => dispatch(getTourney(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourneyDetail);
