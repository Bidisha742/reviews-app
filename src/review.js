import React, { useState } from "react";
import { Button, Card, CardImg, Container } from "react-bootstrap";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Reviews } from "./data";
import Popup from "./modal";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState(Reviews);
  const { name, job, image, text } = reviews[index];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkNumber = (number) => {
    if (number > reviews?.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews?.length - 1;
    }
    return number;
  };
  const prevCheck = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextCheck = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const saveNewReview = (enteredNewReview) => {
    const newData = {
      ...enteredNewReview,
      id: reviews?.length + 1,
    };
    const tempReview = [...reviews, newData];
    console.log(tempReview);
    console.log(newData);
    setReviews(tempReview);
    handleClose();
  };

  return (
    <Container className=" d-flex align-items-center flex-column">
      {show && (
        <Popup
          show={show}
          close={handleClose}
          modal={handleShow}
          saveNewReview={saveNewReview}
        />
      )}
      <h3 className="justify-content-center text-center fw-bold p-2">
        Our Reviews
      </h3>
      <div
        style={{ height: "3px", width: "8%" }}
        className="bg-primary m-auto"
      ></div>

      <Card className="d-flex align-items-center flex-column mt-4 w-50">
        <div className="d-flex align-items-center flex-column rounded-start ">
          <CardImg
            variant="top"
            src={image}
            style={{ width: "150px", height: "150px" }}
            className="rounded-circle mt-2 position-relative border border-2 border-primary "
          />
          <span className="position-absolute top-0 left-0 translate-middle-x text-primary rounded-circle bg-warning">
            <FaQuoteRight />
          </span>
        </div>
        <Card.Body className="p-2 p-md-4 justify-content-center text-center">
          <Card.Title className=" justify-content-center text-center ">
            <h4 className="fw-bold">{name}</h4>
            <p className="text-info ">{job}</p>
          </Card.Title>

          <Card.Text className="justify-content-center text-center">
            {text}
          </Card.Text>
          <div className="d-flex justify-content-center text-center mb-2">
            <Button onClick={prevCheck}>
              <FaChevronLeft />
            </Button>
            &nbsp;&nbsp;
            <Button onClick={nextCheck}>
              <FaChevronRight />
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Button
        variant="outline-danger"
        className="btn-md mt-3"
        modal={show}
        onClick={handleShow}
      >
        Add New Review
      </Button>
    </Container>
  );
};
export default Review;
