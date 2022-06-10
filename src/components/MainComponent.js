import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        }
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    render() {
        let dishes = this.state.dishes;
        let dish = dishes.find((dish) => dish.id === this.state.selectedDish);
        return (
            <div className="container">
                <Header/>
                <Menu dishes={this.state.dishes} onDishSelect={(dishId) => this.onDishSelect(dishId)}/>
                <Dishdetail dish={dish}/>
                <Footer/>
            </div>
        )
    }
}

export default Main;