import Me from "./view";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  currentUser: state.login.data
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Me);
