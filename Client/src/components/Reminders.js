import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../components/Common/Breadcrumb";
import axios from "../pages/api/axios";
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";

const Reminders = () => {
  const decode = jwt_decode(window.localStorage.accessToken);
  const [reminders, setReminders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newReminder, setNewReminder] = useState({
    title: "",
    recipients: [],
    interval: "",
    dataset: "",
    uiTemplate: "",
  });

  const dataSetOptions = [
    { value: "dataSet1", label: "Data Set 1" },
    { value: "dataSet2", label: "Data Set 2" },
    { value: "dataSet3", label: "Data Set 3" },
  ];

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    try {
      const response = await axios.get("/reminders");
      setReminders(response.data);
    } catch (error) {
      console.error("Error fetching reminders:", error);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReminder({
      ...newReminder,
      [name]: value,
    });
  };

  const handleRecipientsChange = (e) => {
    const { options } = e.target;
    const selectedRecipients = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedRecipients.push(options[i].value);
      }
    }
    setNewReminder({
      ...newReminder,
      recipients: selectedRecipients,
    });
  };

  const addReminder = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newReminder.title);
      formData.append("recipients", JSON.stringify(newReminder.recipients));
      formData.append("interval", newReminder.interval);
      formData.append("uiTemplate", newReminder.uiTemplate);
      formData.append("uiFile", newReminder.uiFile);

      await axios.post("/reminders", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setModalOpen(false);
      setNewReminder({
        title: "",
        recipients: [],
        interval: "",
        uiTemplate: "",
        uiFile: null,
      });
      fetchReminders();
    } catch (error) {
      console.error("Error adding reminder:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Rentdigicare | Reminders</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Reminders" breadcrumbItem="Reminders" />
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <Button
                    color="primary"
                    className="mb-3"
                    onClick={toggleModal}
                  >
                    Add Reminder
                  </Button>
                  <Table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Recipients</th>
                        <th>Interval</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reminders.map((reminder) => (
                        <tr key={reminder._id}>
                          <td>{reminder.title}</td>
                          <td>{reminder.recipients.join(", ")}</td>
                          <td>{reminder.interval}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Add Reminder</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={newReminder.title}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="recipients">Recipients</Label>
                <Select
                  id="recipients"
                  name="recipients"
                  isMulti
                  options={[
                    { value: "User Manager", label: "User Manager" },
                    { value: "Manager", label: "Manager" },
                    { value: "Company User", label: "Company User" },
                  ]}
                  value={newReminder.recipients}
                  onChange={handleRecipientsChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="dataset">Dataset</Label>
                <Input
                  type="select"
                  id="dataset"
                  name="dataset"
                  value={newReminder.dataset}
                  onChange={handleInputChange}
                >
                  <option value="">Select Dataset</option>
                  {dataSetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="interval">Interval</Label>
                <Input
                  type="select"
                  id="interval"
                  name="interval"
                  value={newReminder.interval}
                  onChange={handleInputChange}
                >
                  <option value="">Select Interval</option>
                  {[...Array(24)].map((_, index) => (
                    <option key={index} value={`${index}Hr`}>
                      {index} hour{index !== 1 && "s"}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="uiTemplate">UI Template</Label>
                <Input
                  type="select"
                  id="uiTemplate"
                  name="uiTemplate"
                  value={newReminder.uiTemplate}
                  onChange={handleInputChange}
                >
                  <option value="">Select UI Template</option>
                  {/* Add options for UI templates */}
                </Input>
              </FormGroup>
          
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={addReminder}>
                Save
              </Button>{" "}
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reminders;
