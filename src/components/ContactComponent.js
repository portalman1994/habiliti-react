import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Contact</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col">
                        <h5>Made in TX</h5>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="mailto:thompson.paul.carl@gmail.com"><i className="fa fa-envelope-o" /> admin@habilit.com</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;