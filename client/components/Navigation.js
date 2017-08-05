import React from "react";
import {connect} from "react-redux";
import {login, logout} from "../../services/firebase/auth";


class Navigation extends React.Component {

    render() {

        var styles = {

            marginTop:{
                marginTop:'10px'
            },
            baseColor:{
                color:'#a83808'
            }

        }
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#" >
                            <span  className="glyphicon glyphicon-bishop " aria-hidden="true" style={styles.baseColor}></span>
                        </a>
                    </div>

                    <ul className="nav navbar-nav navbar-right ">
                        <li>
                            {this.props.authenticated && <span style={styles.marginTop} onClick={logout} className="btn btn-sm btn-danger">Logout</span>}
                            {!this.props.authenticated && <span style={styles.marginTop} onClick={login(this.props.dispatch)} className="btn btn-sm btn-danger">Login</span>}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
    }
}

export default connect(mapStateToProps)(Navigation)