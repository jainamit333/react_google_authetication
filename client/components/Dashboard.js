import React, {Component} from "react";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {login} from "../../services/firebase/auth";
import UserInfoPanel from "./UserInfoPanel";


class Dashboard extends Component {

    componentDidMount() {
        login()
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="mui-row">
                </div>
                <div className="mui-row">
                    <UserInfoPanel/>
                </div>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return state;
}

export default connect(mapStateToProp)(Dashboard)
