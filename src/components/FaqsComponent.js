import React, { Component } from "react";

class Faqs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <h2>FAQs (Frequently Asked Questions)</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-sm-7">
                        <h5>How do I submit an issue?</h5>
                        <p>Follow the documentation located at our repo: Habiliti</p>
                        <h5>How do I request a feature?</h5>
                        <p>Follow the documentation located at our repo: Habiliti</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faqs;