import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Popup = (props) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [text, setText] = useState("");
  const handleAddReview = () => {
    const newReview = {
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      name,
      job,
      text,
    };
    props.saveNewReview(newReview);
    setName("");
    setJob("");
    setText("");
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div className=" m-2 align-items-center">
              <label className="mb-2">Name: </label>
              <input
                placeholder="Enter a name"
                type="text"
                onChange={(event) => setName(event.target.value)}
                className="form-control"
              />
            </div>
            <div className=" m-2 align-items-center">
              <label className="mb-2">Job: </label>
              <input
                placeholder="Enter a job"
                type="text"
                onChange={(event) => setJob(event.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className=" m-2">
            <label className="mb-2">Info: </label>
            <input
              placeholder="Enter information"
              type="text"
              onChange={(event) => setText(event.target.value)}
              className="form-control"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddReview}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
