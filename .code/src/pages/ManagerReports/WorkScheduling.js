import React, { useState, useEffect } from "react";
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
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AvForm, AvField } from "availity-reactstrap-validation";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import jwt_decode from "jwt-decode";
import axios from "../api/axios";

const WorkScheduling = () => {
  const decode = jwt_decode(window.localStorage.getItem("accessToken"));
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [tasks, setTasks] = useState([{ description: "", status: "To Do" }]);
  const [achievements, setAchievements] = useState("");
  const [nextSteps, setNextSteps] = useState("");
  const [challenges, setChallenges] = useState("");
  const [companyManagers, setCompanyManagers] = useState([]);
  const [newData, setNewData] = useState([]);
  const [events, setEvents] = useState([]);

  console.log("Events:", events);

  useEffect(() => {
    const storedAuthUser = localStorage.getItem("authUser");
    if (storedAuthUser) {
      setAuthUser(JSON.parse(storedAuthUser));
    }
    getManagers();
  }, []);

  useEffect(() => {
    if (newData.length > 0) {
      getManagersStandups(newData);
    }
  }, [newData]);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      // Don't reset the form here
    } else {
      resetForm();
    }
  };

  const resetForm = () => {
    setTasks([{ description: "", status: "To Do" }]);
    setNextSteps("");
    setChallenges("");
    setAchievements("");
  };

  const handleDateClick = (arg) => {
    const formattedDate = new Date(arg.date).toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    toggleModal();
  };

  const getManagers = async () => {
    try {
      const response = await axios.post("/company/get_managers", {
        company_id: decode.id,
      });
      if (response.data.status === 200) {
        const managersList = response?.data?.managers.map((item, index) => ({
          label: `${item.firstname} ${item.lastname}`,
          value: item._id,
          color: index + 1,
        }));
        setCompanyManagers(managersList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getManagersStandups = async (managers) => {
    try {
      const ids = managers.map((manager) => manager.value);
      const response = await axios.post(`/workScheduling/get_standups`, {
        managerIds: ids,
      });

      console.log("Response:", response.data.reports);

      const formattedEvents = response.data.reports.map((report) => ({
        title: `${report.firstname} ${report.lastname}`,
        start: new Date(report.date),
        extendedProps: report,
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changedata = (data) => {
    setNewData((prev) => [...prev, data]);
  };

  const handleEventClick = (info) => {
    const reportData = info.event.extendedProps;
    console.log("Report Data:", reportData);
    console.log("Tasks:", reportData.tasks);
    console.log("Next Steps:", reportData.nextSteps);
    console.log("Challenges:", reportData.challenges);
    console.log("Achievements:", reportData.achievements);
    console.log(
      "Selected Date:",
      new Date(reportData.date).toISOString().split("T")[0]
    );

    setTasks(reportData.tasks);
    setNextSteps(reportData.nextSteps);
    setChallenges(reportData.challenges);
    setAchievements(reportData.achievements);
    setSelectedDate(new Date(reportData.date).toISOString().split("T")[0]);
    toggleModal();
  };

  const handleSubmit = async (event, values) => {
    try {
      if (
        ![
          selectedDate,
          tasks.length,
          nextSteps,
          challenges,
          achievements,
        ].every(Boolean)
      ) {
        throw new Error(
          "Please fill out all required fields before submitting."
        );
      }

      const dataToLog = {
        managerId: decode.id,
        firstname: authUser?.userData?.firstname,
        lastname: authUser?.userData?.lastname,
        role: authUser?.userData?.role,
        companyDomain:
          authUser?.userData?.managerOf || authUser?.userData?.domain,
        date: selectedDate,
        tasks,
        nextSteps,
        challenges,
        achievements,
      };

      // Log the data using console.table()
      console.table(dataToLog);

      const response = await axios.post(`/workScheduling/add_report`, {
        managerId: decode.id,
        firstname: authUser?.userData?.firstname,
        lastname: authUser?.userData?.lastname,
        role: authUser?.userData?.role,
        companyDomain:
          authUser?.userData?.managerOf || authUser?.userData?.domain,
        date: selectedDate,
        tasks,
        nextSteps,
        challenges,
        achievements,
      });
      toast.success(response.data.message);
      toggleModal();
    } catch (error) {
      console.error("Error submitting standup report:", error.message);
      toast.error("Failed to submit standup report. Please try again later.");
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="page-content">
        <Container fluid>
          <Breadcrumb
            title="Work Scheduling"
            breadcrumbItem="Work Scheduling"
          />
          {decode.role === "company" && (
            <Row className="mb-3">
              <Col md={4} sm={6}>
                <label className="form-label">Select Manager:</label>
                <Select
                  isClearable={false}
                  className="appsCalender-filter-select"
                  value={newData}
                  options={companyManagers}
                  isMulti={true}
                  onChange={changedata}
                  components={{
                    Option: ({ data }) => (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          changedata(data);
                        }}
                        className={`multipleOpts bg-${data.color} `}
                        style={{
                          color: "#FFF",
                        }}
                      >
                        {data.label}
                      </div>
                    ),
                    MultiValue: ({ data }) => (
                      <div className="d-flex align-items-center mt-1">
                        <div className={`multiselectOpt bg-${data.color}`}>
                          {data.label}
                        </div>
                        <div
                          className="multiselectOptClose"
                          onClick={() => {
                            const newOpts = [...newData]?.filter(
                              (v) => v.value !== data.value
                            );

                            setNewData(newOpts);
                          }}
                        >
                          x
                        </div>
                      </div>
                    ),
                  }}
                  styles={{
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#f0f0f0" : "",
                      ":hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }),
                  }}
                />
              </Col>
            </Row>
          )}
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <FullCalendar
                    plugins={[
                      dayGridPlugin,
                      timeGridPlugin,
                      interactionPlugin,
                      BootstrapTheme,
                    ]}
                    events={events}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
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
            <AvForm onValidSubmit={handleSubmit}>
              <AvField
                name="date"
                type="date"
                label="Selected Date"
                value={selectedDate}
                className="form-control mb-3"
                disabled
              />
              <AvField
                name="description"
                type="textarea"
                label="Description"
                placeholder="Enter task description"
                value={tasks[0]?.description}
                onChange={(e) => setTasks([{ description: e.target.value }])}
                required
                className="form-control mb-3"
              />
              <AvField
                name="status"
                type="select"
                label="Status"
                value={tasks[0]?.status}
                onChange={(e) =>
                  setTasks([
                    {
                      description: tasks[0]?.description,
                      status: e.target.value,
                    },
                  ])
                }
                required
                className="form-select mb-3"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </AvField>
              <AvField
                name="nextSteps"
                type="textarea"
                label="Next Steps"
                placeholder="Enter next steps"
                value={nextSteps}
                onChange={(e) => setNextSteps(e.target.value)}
                className="form-control mb-3"
              />
              <AvField
                name="challenges"
                type="textarea"
                label="Challenges"
                placeholder="Enter challenges"
                value={challenges}
                onChange={(e) => setChallenges(e.target.value)}
                className="form-control mb-3"
              />
              <AvField
                name="achievements"
                type="textarea"
                label="Achievements"
                placeholder="Enter achievements"
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
                className="form-control mb-3"
              />
              <div className="d-flex justify-content-end mb-3">
                <Button type="submit" color="primary">
                  Submit
                </Button>
                <Button
                  color="secondary"
                  onClick={toggleModal}
                  className="ms-2"
                >
                  Cancel
                </Button>
              </div>
            </AvForm>
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default WorkScheduling;
