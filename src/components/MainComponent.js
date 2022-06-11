import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            comments: COMMENTS,
            leaders: LEADERS,
        }
    }
    render() {
        const HomePage = () => {
            return (
                <div className="container">
                    <Home dish={this.state.dishes.find((dish) => dish.featured === true)}
                        promotion={this.state.promotions.find((promotion) => promotion.featured === true)}
                        leader={this.state.leaders.find((leader) => leader.featured === true)}
                    />
                </div>
            )
        };

        const DishWithId = ({match}) => {
            return (
                <Dishdetail dish={this.state.dishes.find((dish) =>dish.id === parseInt(match.params.dishId, 10))}
                            comments={this.state.comments.filter((comment) =>comment.dishId === parseInt(match.params.dishId, 10))}
                />
            )
        }

        return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/contactus" component={() => <Contact/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;
