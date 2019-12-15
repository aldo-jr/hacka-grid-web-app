import FormView from "./view";
import { connect } from "react-redux";
import { searchPlansByData } from "./actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  searchPlansByData: data => dispatch(searchPlansByData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormView)