<<<<<<< HEAD
import { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./AboutComponent";
import Calendar from "./CalendarComponent";
import Contact from "./ContactComponent";
import Demo from "./DemoComponent";
import Faqs from "./FaqsComponent";
import Features from "./FeaturesComponent";
import Footer from "./FooterComponent";
import Habiliti from "./HabilitiComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 0,
                    image: '/habiliti-react/assets/images/track.png',
                    title: {
                        short: 'Track',
                        detailed: 'A'
                    },
                    description: {
                        short: 'Track Habits',
                        detailed: 'A'
                    }
                },
                {
                    id: 1,
                    image: '/habiliti-react/assets/images/progress.jpg',
                    title: {
                        short: 'Progress',
                        detailed: 'B'
                    },
                    description: {
                        short: 'View Progress',
                        detailed: 'B'
                    }
                },
                {
                    id: 2,
                    image: '/habiliti-react/assets/images/remind.png',
                    title: {
                        short: 'Remind',
                        detailed: 'C'
                    },
                    description: {
                        short: 'Set Reminders',
                        detailed: 'C'
                    }
                }

            ]
        }
    }
    render() {
        const HomePage = () => {
            return <Home features={this.state.features} />
        }
        return (
            <div>
                <Header />
                <Routes>
                    <Route path='/'>
                    <Route index element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/faqs' element={<Faqs />} />
                    <Route path='/features' element={<Features />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/demo' element={<Demo />} />
                    <Route path='/habiliti' element={<Habiliti />} />
                    <Route exact path='/habiliti/calendar/:calendarId' element={<Calendar />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
=======
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
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
