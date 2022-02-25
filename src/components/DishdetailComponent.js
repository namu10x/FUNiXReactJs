import React, { Component, useLayoutEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat, { masks } from "dateformat";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';
// const baseUrl =  'http://localhost:3001/';

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments, addComment, dishId }) {
  return (
    <div>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <ul className="list-unstyled">
          <li>{comment.comment}</li>
          <li>
            --{comment.author}, {dateFormat(comment.date, "mmm dd, yyyy")}
          </li>
        </ul>
      ))}
      <CommentForm dishId={dishId} addComment={addComment} />
    </div>
  );
}

function CommentForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState({
    rating: "",
    name: "",
    comment: "",
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const comment = { ...newComment };
    const target = e.target;
    comment[target.name] = target.value;
    setNewComment(comment);
  };

  const handleSubmit = (e) => {
    props.addComment(
      props.dishId,
      newComment.rating,
      newComment.name,
      newComment.comment
    );
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Button outline onClick={toggleModal}>
        Submit Comment
      </Button>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Hello</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="rating">Rating</Label>
              <Input
                type="select"
                name="rating"
                id="rating"
                onChange={handleInputChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Your Name"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="comment">Comment</Label>
              <Input
                type="textarea"
                id="comment"
                name="comment"
                onChange={handleInputChange}
              ></Input>
            </FormGroup>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;