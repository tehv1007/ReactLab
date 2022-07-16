import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())}
});

class Main extends Component {
    
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }
    
    render() {
        console.log(this.props)
        const HomePage = () => {
            return (
                <div className="container">
                    <Home dish={this.props.dishes.dishes.find((dish) => dish.featured === true)}
                        dishesLoading={this.props.dishes.isLoading}
                        dishesErrMess={this.props.dishes.errMess}
                        promotion={this.props.promotions.promotions.find((promotion) => promotion.featured === true)}
                        promosLoading={this.props.promotions.isLoading}
                        promosErrMess={this.props.promotions.errMess}
                        leader={this.props.leaders.find((leader) => leader.featured === true)}
                    />
                </div>
            )
        };

        const DishWithId = ({match}) => {
            return (
                <Dishdetail dish={this.props.dishes.dishes.find((dish) =>dish.id === parseInt(match.params.dishId, 10))}
                            isLoading={this.props.dishes.isLoading}
                            errMess={this.props.dishes.errMess}
                            comments={this.props.comments.comments.filter((comment) =>comment.dishId === parseInt(match.params.dishId, 10))}
                            commentsErrMess={this.props.comments.errMess}
                            addComment={this.props.addComment}
                />
            )
        }

        return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                    <Route exact path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));