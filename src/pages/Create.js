import React from "react";
import "../styles/Create.css";
import CreateImage from "../assets/createsvg.svg";
import { Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import Form from "react-bootstrap/Form";
import { EventContext } from "../components/EventContext";

const Create = () => {
  const [EventState, setEventState] = React.useContext(EventContext);
  console.log(EventState);
  return (
    <div className="CreatePageContainer">
      <section className="ImageSection">
        <img src={CreateImage} alt="CreateImage" />
      </section>
      <section className="TextSection">
        <h3>Create A New Event</h3>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the event"
              value={EventState.eventName}
              required
              onChange={(e) =>
                setEventState({ ...EventState, eventName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Host Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name of the host"
              value={EventState.hostName}
              onChange={(e) =>
                setEventState({ ...EventState, hostName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              placeholder="Start Date"
              required
              type="datetime-local"
              value={EventState.startDate}
              onChange={(e) =>
                setEventState({ ...EventState, startDate: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              placeholder="End Date"
              type="datetime-local"
              required
              value={EventState.endDate}
              onChange={(e) =>
                setEventState({ ...EventState, endDate: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Event Location</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Street name, State, Postcode"
              value={EventState.eventLocation}
              onChange={(e) =>
                setEventState({ ...EventState, eventLocation: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Event Photo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="image"
              placeholder="Photo of the event"
              onChange={(e) =>
                setEventState({
                  ...EventState,
                  eventPhoto: e.target.files[0],
                })
              }
            />
          </Form.Group>
        </Form>
        <div>
          <Link to="/event">
            Next <CgLogIn size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Create;
