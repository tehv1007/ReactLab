import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <div className="container">
                    <Home dish={this.props.dishes.find((dish) => dish.featured === true)}
                        promotion={this.props.promotions.find((promotion) => promotion.featured === true)}
                        leader={this.props.leaders.find((leader) => leader.featured === true)}
                    />
                </div>
            )
        };

        const DishWithId = ({match}) => {
            return (
                <Dishdetail dish={this.props.dishes.find((dish) =>dish.id === parseInt(match.params.dishId, 10))}
                            comments={this.props.comments.filter((comment) =>comment.dishId === parseInt(match.params.dishId, 10))}
                />
            )
        }

        return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/contactus" component={() => <Contact/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));
