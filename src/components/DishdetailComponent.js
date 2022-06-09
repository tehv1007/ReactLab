import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class Dishdetail extends Component {
    render() {
        const dish = this.props.dish;
        if(dish != null) {
            let comment = dish.comments.map((comment) => {
                let timeComment = new Intl.DateTimeFormat
                ('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {timeComment}</p>
                    </div>
                )
            })
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg with="100%" src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                            <h3>Comments</h3>
                            {comment}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default Dishdetail;