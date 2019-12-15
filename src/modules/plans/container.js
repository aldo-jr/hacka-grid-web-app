import PlansView from './view';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  searchResult: state.form.data
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlansView)