import React from 'react';
import {connect} from "react-redux";

class UserInfoPanel extends React.Component {

    render() {
        const styles = {
            card:{
                width: '20em',
                position: 'relative',
                display: 'flex',
                flexDirection:'column',
                backgroundColor: '#fff',
                border: '1px solid rgba(0,0,0,.125)',
                borderRadius: '.25rem',
                padding:'3px',
                margin:'2px'
            }
        }
        return (

            <div className="card" style={styles.card}>
                { this.props.authenticated && <img className="card-img-top img-thumbnail" src = {this.props.user.photoURL} alt="Card image cap"/> }
                { this.props.authenticated &&
                <div className="card-block">
                    <h4 className="card-title">{this.props.user.displayName}</h4>
                    <p className="card-text">{this.props.user.email}</p>
                </div>
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {

        authenticated: state.auth.authenticated,
        authenticating: state.auth.authenticating,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(UserInfoPanel)