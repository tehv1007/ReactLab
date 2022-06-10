import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <RenderComments comments={props.comments}/>
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