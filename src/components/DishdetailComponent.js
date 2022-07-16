import React, { Component }from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button,
        Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDish ({dish}) {
    return (
        <Card>
            <CardImg src={baseUrl + dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModelCommentForm: false,
        };
        this.toggleCommentForm = this.toggleCommentForm.bind(this);
    };

    toggleCommentForm () {
        this.setState({ 
            isModelCommentForm: !this.state.isModelCommentForm
        });
    };

    handleSubmitComment (values) {
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val && val.length <= len);
        const minLength = (len) => (val) => !val || (val && val.length >= len);

        return (
            <div className="container">
                <Button outline onClick={this.toggleCommentForm}><i className="fa fa-solid fa-pencil"></i>{' '} Submit Comment</Button>
                <Modal isOpen={this.state.isModelCommentForm} toggle={this.toggleCommentForm}>
                    <ModalHeader toggle={this.toggleCommentForm}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" 
                                            id="rating" name="rating" 
                                            className="form-control"
                                            defaultValue="1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            <Label htmlFor="author" className="mt-2">Your Name</Label>
                            <Control.text model=".author" 
                                        id="author"
                                        name="author" 
                                        className="form-control"
                                        placeholder="Your Name"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                            <Errors className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be greater than 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }}
                            />
                            <Label htmlFor="comment" className="mt-2">Comment</Label>
                            <Control.textarea model=".comment" 
                                            id="comment"
                                            name="comment"
                                            rows="12"
                                            className="form-control"
                            />
                            <Button type="submit" color="primary" className="mt-3">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

function RenderComments ({comments, postComment, dishId}) {
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
            <div>
                {comment}
                <CommentForm postComment={postComment} dishId={dishId}/>
            </div>
        )
}

const Dishdetail = (props) => {
    if(props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (        
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
        
    }
    else
    
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id}
                    /> 
                </div>
            </div>
        </div>

    )
}

export default Dishdetail;