import Header from "./view";
import { connect } from "react-redux";
import { logout } from "./actions";

const mapStateToProps = (state) => ({
  currentUser: state.login.data
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
