import React, { Component } from "react";

class Features extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Features</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col">
                        <h5>Track your Habits</h5>
                    </div>
                    <div className="col">
                        <h5>View Your Progress</h5>
                    </div>
                    <div className="col">
                        <h5>Set Reminders</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;