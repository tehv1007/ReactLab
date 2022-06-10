import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

function RenderDish ({dish}) {
    return (
        <Card>
            <CardImg src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments ({comments}) {
    let comment = comments.map((comment) =>{
        let timeComment = new Intl.DateTimeFormat
        ('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
        return(
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {timeComment}</p>
            </div>
        )
    })
    return(
        <div>{comment}</div>
    )
}

const Dishdetail = (props) => {
    if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <RenderComments comments={props.dish.comments}/>
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

export default Dishdetail;