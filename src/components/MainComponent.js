import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent'
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            comments: COMMENTS,
            leaders: LEADERS,
            selectedDish: null,
        }
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    render() {
        let dishes = this.state.dishes;
        let dish = dishes.find((dish) => dish.id === this.state.selectedDish);
        
        const HomePage = () => {
            return (
                <Home />
            )
        }

        const DishWithId = ({match}) => {
            return(
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
                    <Route path='/menu/:dishId' coponent={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;