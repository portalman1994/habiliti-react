import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Faqs from './FaqsComponent';
import About from './AboutComponent';
import Features from './FeaturesComponent';
import Contact from './ContactComponent';
import Demo from './DemoComponent';

const mapStateToProps = state => {
    return {
        features: state.features
    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home
                    features={this.props.features}
                />
            );
        };

        return (
            <div id="page-container">
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/faqs' component={Faqs} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/features' component={Features} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/demo' component={Demo} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );


    }
}

export default withRouter(connect(mapStateToProps)(Main));
