import { connect } from "react-redux";
import LoginAuth from "../login";
import { login } from "../../actions/auth";
import { bindActionCreators } from "redux";


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        login
    }, dispatch)
)

const LoginContainer = connect(null, mapDispatchToProps)(LoginAuth)

export default LoginContainer