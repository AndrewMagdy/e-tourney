import { connect } from "react-redux";
import TourneyTable from "../components/TourneyTable.component";
import { getTourneys, navToTourney } from "../actions/tourney.actions";

const mapStateToProps = state => ({
  tourneyList: state.tourneys.tourneyList
});

const mapDispatchToProps = dispatch => ({
  getTourneys: () => dispatch(getTourneys()),
  navToTourney: id => dispatch(navToTourney(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourneyTable);
