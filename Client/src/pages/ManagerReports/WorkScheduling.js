import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/interaction";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";

const WorkScheduling = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [standup, setStandup] = useState("");
  const [modal, setModal] = useState(false);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    toggleModal(); // Open the modal when a date is clicked
  };

  const toggleModal = () => {
    setModal(!modal); // Toggle modal visibility
  };

  const handleSubmit = (event, values) => {
    // values object contains the form field values
    console.log("Standup submitted for date:", selectedDate);
    console.log("Standup content:", values.standup);
    toggleModal(); // Close the modal after submission
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="Work Scheduling" breadcrumbItem="Work Scheduling" />
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <FullCalendar
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    multiMonthPlugin,
                    interactionPlugin,
                    BootstrapTheme,
                  ]}
                  dateClick={handleDateClick}
                  themeSystem="bootstrap"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  showNonCurrentDates={false}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add Standup</ModalHeader>
        <ModalBody>
          <AvForm className="w-100" onValidSubmit={handleSubmit}>
            <AvField
              name="standup"
              type="textarea"
              label={`Standup for ${
                selectedDate && selectedDate.toLocaleDateString()
              }`}
              value={standup}
              onChange={(e) => setStandup(e.target.value)}
              required
            />
            <AvField
              name="standup"
              type="textarea"
              label={`Standup for ${
                selectedDate && selectedDate.toLocaleDateString()
              }`}
              value={standup}
              onChange={(e) => setStandup(e.target.value)}
              required
            />
            <div className="d-flex justify-content-end">
              <Button type="submit" color="primary">
                Submit
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  setStandup(""); // Clear standup content
                  toggleModal();
                }}
                className="ms-2"
              >
                Cancel
              </Button>
            </div>
          </AvForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default WorkScheduling;
