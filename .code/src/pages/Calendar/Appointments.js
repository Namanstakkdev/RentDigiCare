import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import jwt_decode from "jwt-decode";
import { SERVER_URL } from "../ServerLink";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
// import { Form, FormControl } from "./assets/scss/theme.scss";

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  CardHeader,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Label,
  Input,
  Form,
  Collapse,
} from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { FormGroup } from "react-bootstrap";
// import { toast } from "react-toastify";

const Appointment = () => {
  const decode2 = jwt_decode(window.localStorage.getItem("accessToken"));
  const authUser = JSON.parse(window.localStorage.getItem("authUser"));
  const companyId = authUser.userData.companyId;
  const [booked, setbooked] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalOne, setModalOne] = useState(false);
  const [slotId, setslotId] = useState("");
  const [total, settotal] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [startPage, setStartPage] = useState(1);
  const [pages, setPages] = useState([]);

  const [modalType, setModalType] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [propertyList, setProperyList] = useState([]);
  const [property, setProperty] = useState({});

  const [reasonList, setReasonList] = useState([]);
  const [reason, setReason] = useState({});
  const [status, setStatus] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [reasonErr, setReasonErr] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    rejected: 0,
    pending: 0,
  });
  const [statusTypeList, setStatusTypeList] = useState([]);
  const decode = jwt_decode(window.localStorage.accessToken);

  useEffect(() => {
    const getAppointmentStatusTypes = async () => {
      try {
        const response = await axios.post("appointmentStatus/getStatus", {
          company_id: companyId,
        });
        if (response.data.appointmentStatus) {
          const Data = response.data.appointmentStatus.reverse();
          setStatusTypeList(Data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAppointmentStatusTypes();
  }, [pageNumber]);

  const pageTotal = Math.ceil(stats.total / pageLimit);
  const currentDateUTC = new Date().toISOString();

  const filteredBooked = booked.map((item) => {
    if (currentDateUTC >= item.endTime) {
      return {
        ...item,
        status: "Appointment expired",
      };
    } else {
      return item;
    }
  });

  useEffect(() => {
    getAppointments();
    let total_pages = stats.total / pageLimit;
    if (stats.total % pageLimit == 0) {
      setPages(Array.from(Array(Math.round(total_pages)).keys()));
    } else {
      setPages(Array.from(Array(parseInt(total_pages) + 1).keys()));
    }
  }, [pageNumber]);

  const getAppointments = async (type) => {
    if (type === "filter") {
      setPageNumber(1);
    }
    let query = {
      pageNumber: pageNumber,
      manager_id: decode2.id,
      startDate,
      endDate,
      property: property?.value,
      reasonId: reason?.value,
      status: status?.value,
    };
    if (type === "clear") {
      query = {
        pageNumber: 1,
        manager_id: decode2.id,
      };
    }
    let res = await fetch(SERVER_URL + "/user_appointment/get-pending-slot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    let data = await res.json();
    console.log("Get_Pending_Slot:", data);
    setbooked(data?.bookedSlot);
    settotal(data?.totalCount);
    setStats({
      total: data?.total?.Total,
      booked: data?.total?.booked,
      pending: data?.total?.pending,
      rejected: data?.total?.rejected,
    });
    setProperyList(
      data?.properties.map((p) => ({ label: p.title, value: p._id }))
    );
    setReasonList(
      data?.reasons.map((r) => ({ label: r.reasonType, value: r._id }))
    );
    setSelectedId("");
  };

  const [col5, setcol5] = useState(false);
  const t_col5 = () => {
    setcol5(!col5);
  };

  const updateAppoitnment = async (id, status) => {
    if (
      (status === "rejected" || status === "canceled") &&
      rejectReason.length === 0
    ) {
      setReasonErr("Reason is required");
      return;
    }
    setReasonErr("");
    let reason = rejectReason; // Assuming 'rejectReason' is used for both rejection and cancellation reasons
    let update = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slot_id: id, status: status, reason }),
    };

    let res = await fetch(
      SERVER_URL + `/user_appointment/update-event-status`,
      update
    );
    let data = await res.json();
    if (data.status === 200) {
      getAppointments();
      if (status === "booked") {
        toggle_one();
        toast("Appointment moved to calendar.");
      } else {
        toggle();
        toast.error(
          `Appointment ${status === "rejected" ? "rejected" : "canceled"}`
        );
      }
    }
    // console.log(data, "data");
  };
  const [Confirm_model, setConfirm_model] = useState(false);
  const [apptId, setApptId] = useState("");
  const [apptStatus, setApptStatus] = useState("");

  const Confirm_view = (id, status) => {
    console.log(id, status);
    setApptId(id);
    setApptStatus(status);
    setConfirm_model(!Confirm_model);
  };

  const ChangeStatus = async (id, status) => {
    try {
      console.log({
        id,
        status: status,
      });
      const response = await axios.post("/user_appointment/update_status", {
        apptId: apptId,
        status: apptStatus,
      });
      console.log({ response });
      if (response.data.success) {
        getAppointments();
      }
    } catch (error) {
      console.log("Unable to fetch");
    }
  };

  const bookedAndSyncWithGoogleCalendar = async (id, status) => {
    const update = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slot_id: id, status, reason }),
    };
    try {
      const res = await fetch(
        SERVER_URL + `/user_appointment/update-event-status`,
        update
      );
      const data = await res.json();
      if (data.status === 200) {
        getAppointments();
        if (status === "booked") {
          const event = data.event;

          toggle_one();
          toast("Appointment moved to calendar.");

          let role = decode2.role;

          if (role == "manager" || role == "company") {
            role = "PropertyManager";
          } else if (role == "technical staff") {
            role = "technicalStaff";
          }

          const filteredEvent = filteredBooked.find(
            (event) => event._id === id
          );

          const reqData = {
            userId: decode2.id,
            day: moment(event.date).format("ddd"),
            eventDate: event.date,
            StartTime: event.startTime,
            endTime: event.endTime,
            createdBy: decode2.id,
            type: filteredEvent.reasonType[0].reasonType,
            propertyId: filteredEvent.properties[0].title,
            companyDomain: decode2?.managerOf
              ? decode2?.managerOf
              : decode2?.domain,
            title: event.name,
            description: event.description,
            event_id: id,
            role: role,
            available: true,
          };

          setTimeout(async () => {
            toast("Sync with calendar process start");

            try {
              const ADD_EVENT = "/calender/create-event";
              const response = await axios.post(ADD_EVENT, reqData);
              if (response.status === 200) {
                toast.success(response.data.message);
              }
            } catch (error) {
              console.log(error);
            }
          }, 2000);
        }
      }
    } catch (error) {
      console.error("Error updating event status:", error);
    }
  };

  const deleteAppoitnment = async () => {
    let update = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slot_id: slotId }),
    };

    let res = await fetch(
      SERVER_URL + `/user_appointment/delete-event`,
      update
    );
    let data = await res.json();
    if (data.success === true) {
      getAppointments();
      toast("Appoinment declined successfully.");
    }
    console.log(data, "data");
  };

  const toggle = (id, type) => {
    setReasonErr("");
    setslotId(id);
    setModalType(type);
    setModal(!modal);
  };

  const toggle_one = (id) => {
    setSelectedId(id);
    // setslotId(id);
    setModalOne(!modalOne);
  };

  const handlePageChange = (page) => {
    setPageNumber(page);

    if (page > startPage + pageLimit - 1 || page < startPage) {
      setStartPage(Math.max(1, page - pageLimit / 2));
    }
  };

  const convertToLocalTime = (utcTime) => {
    if (typeof utcTime === "string" && utcTime.endsWith("Z")) {
      const utcDate = new Date(utcTime);
      const localTime = utcDate.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      return localTime;
    } else {
      return utcTime;
    }
  };

  const clearFunc = async () => {
    setStartDate("");
    setEndDate("");
    setProperty("");
    setReason("");
    t_col5();
    getAppointments("clear");
  };
  const getColor = (val) => {
    switch (val) {
      case "Completed":
        return "btn btn-success";
      case "Unresolved":
        return "btn btn-danger";
      case "Inprogress":
        return "btn btn-warning";
      default:
        return "btn btn-primary";
    }
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Rentdigicare | Appointments</title>
        </MetaTags>
        <ToastContainer />
        <div className="container-fluid">
          <Breadcrumbs title="Home" breadcrumbItem="Appointments" />
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="mb">
                        <h5 className="card-title">
                          Total Appointments ({total})
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex flex-wrap align-items-center justify-content-end">
                      <div className="mb d-flex flex-wrap">
                        <button
                          onClick={t_col5}
                          className="btn btn-primary mo-mb-2 mr-10"
                          type="button"
                          style={{ cursor: "pointer" }}
                        >
                          Filters
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Collapse className="mt-4" isOpen={col5}>
                          <Card>
                            <CardBody>
                              <div className="filter-sec">
                                <Form>
                                  <div class="row align-items-center">
                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <Label
                                          htmlFor="example-date-input"
                                          className="form-Label"
                                        >
                                          From
                                        </Label>
                                        <Input
                                          className="form-control"
                                          onChange={(e) => {
                                            setStartDate(e.target.value);
                                          }}
                                          value={startDate}
                                          type="date"
                                          // defaultValue={Date.now()}
                                          id="example-date-input"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <Label
                                          htmlFor="example-date-input"
                                          className="form-Label"
                                        >
                                          To
                                        </Label>
                                        <Input
                                          className="form-control"
                                          type="date"
                                          value={endDate}
                                          onChange={(e) => {
                                            setEndDate(e.target.value);
                                          }}
                                          // defaultValue={Date.now()}
                                          id="example-date-input"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Property
                                        </Label>
                                        <Select
                                          value={property}
                                          onChange={(e) => {
                                            setProperty(e);
                                          }}
                                          options={propertyList}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Reason
                                        </Label>
                                        <Select
                                          value={reason}
                                          onChange={(e) => {
                                            setReason(e);
                                          }}
                                          options={reasonList}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Status
                                        </Label>
                                        <Select
                                          value={status}
                                          onChange={(e) => {
                                            setStatus(e);
                                          }}
                                          options={[
                                            {
                                              value: "pending",
                                              label: "Pending",
                                            },
                                            {
                                              value: "booked",
                                              label: "Booked",
                                            },
                                            {
                                              value: "rejected",
                                              label: "Rejected",
                                            },
                                            {
                                              value: "canceled",
                                              label: "Canceled",
                                            },
                                          ]}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 btn-group d-flex justify-content-end">
                                      <div className="srch-btn">
                                        <button
                                          type="submit"
                                          id="ticketfilter"
                                          onClick={(e) => {
                                            e.preventDefault();

                                            getAppointments("filter");
                                          }}
                                          className="btn btn-primary"
                                        >
                                          Search
                                        </button>
                                      </div>
                                      <div
                                        className="srch-btn"
                                        style={{ marginLeft: "10px" }}
                                      >
                                        <button
                                          onClick={(e) => {
                                            e.preventDefault();
                                            clearFunc();
                                          }}
                                          className="btn btn-primary"
                                        >
                                          Clear
                                        </button>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="col-md-4"></div>
                                    </div>
                                  </div>
                                </Form>
                              </div>
                            </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive ">
                    <Table className="table-striped table-bordered mb-0">
                      <thead>
                        <tr>
                          {/* <th scope="col">ID</th> */}
                          {/* <th scope="col">Name</th>
                          <th scope="col">Email</th> */}
                          <th scope="col">User Details</th>
                          <th scope="col">Property</th>
                          <th scope="col">Reason Type</th>
                          <th scope="col">Comment</th>
                          <th scope="col">Updates</th>
                          <th scope="col">Time Slot</th>
                          <th scope="col">Date</th>

                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredBooked &&
                          filteredBooked.map((item, index) => {
                            console.log({
                              item: item?.statusUpdate,
                            });
                            return (
                              <>
                                <tr>
                                  {/* <td>{item.slotId} </td> */}

                                  <td>
                                    {item.name}
                                    <br />
                                    {item.email}
                                    <br />
                                    {item.phone}
                                    {item.phone1 ? `, ${item.phone1}` : ""}
                                  </td>
                                  <td>
                                    <div>
                                      {item.properties?.length > 0
                                        ? item.properties[0].title
                                        : " N/A"}
                                      <br />
                                      <small>
                                        {item.layouts?.length > 0
                                          ? item.layouts[0].layoutName
                                          : " N/A"}
                                      </small>
                                    </div>
                                  </td>
                                  <td>
                                    {item.reasonType?.length > 0
                                      ? item.reasonType[0].reasonType
                                      : " N/A"}
                                  </td>
                                  <td>{item.description}</td>
                                  <td>
                                    <select
                                      className={`form-select applicant-status btn-sm ${getColor(
                                        item?.statusUpdate
                                      )}`}
                                      style={{ width: "120px" }}
                                      onChange={(event) => {
                                        Confirm_view(
                                          item._id,
                                          event.target.value
                                        );
                                        ChangeStatus(
                                          item._id,
                                          event.target.value
                                        );
                                      }}
                                      defaultValue={item?.statusUpdate}
                                    >
                                      {statusTypeList.map((status) => (
                                        <option
                                          key={status._id}
                                          className={`btn btn-light`}
                                          value={status.status}
                                        >
                                          {status.status}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                  <td>
                                    {convertToLocalTime(item.startTime)} -{" "}
                                    {convertToLocalTime(item.endTime)}
                                  </td>
                                  <td>
                                    {moment(item.date)
                                      .utc()
                                      .format("YYYY-MM-DD")}
                                  </td>

                                  <td
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    {item.status === "pending" ? (
                                      <>
                                        {/* Accept and Reject buttons */}
                                        <button
                                          type="button"
                                          onClick={() => toggle_one(item._id)}
                                          className="btn btn-light"
                                          style={{
                                            marginBottom: "4px",
                                            color: "white",
                                            backgroundColor: "#33cc33",
                                          }}
                                        >
                                          <span>Accept</span>
                                        </button>
                                        <button
                                          type="button"
                                          style={{
                                            color: "white",
                                            backgroundColor: "#ff1a1a",
                                          }}
                                          className="btn btn-light"
                                          onClick={() => {
                                            setSelectedId(item._id);
                                            toggle(item._id, "rejected");
                                          }}
                                        >
                                          <span>Reject</span>
                                        </button>
                                      </>
                                    ) : item.status === "booked" ? (
                                      // Disable Booked button and show Cancel button
                                      <>
                                        <button
                                          disabled
                                          type="button"
                                          className="btn btn-light"
                                          style={{
                                            marginBottom: "4px",
                                            color: "white",
                                            backgroundColor: "#33cc33",
                                            cursor: "not-allowed",
                                          }}
                                        >
                                          <span>{item.status}</span>
                                        </button>
                                        <button
                                          type="button"
                                          style={{
                                            marginBottom: "4px",
                                            color: "white",
                                            backgroundColor: "#ff1a1a",
                                          }}
                                          className="btn btn-light"
                                          onClick={() => {
                                            setSelectedId(item._id);
                                            toggle(item._id, "canceled");
                                          }}
                                        >
                                          <span>Cancel</span>
                                        </button>
                                      </>
                                    ) : (
                                      // Display status for other cases (rejected, canceled)
                                      <button
                                        disabled
                                        type="button"
                                        className="btn btn-light"
                                        style={{
                                          marginBottom: "4px",
                                          color: "white",
                                          backgroundColor: "#ff1a1a",
                                          cursor: "not-allowed",
                                        }}
                                      >
                                        <span
                                          style={{
                                            textTransform: "capitalize",
                                          }}
                                        >
                                          {item.status}
                                        </span>
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </Table>
                  </div>
                  <Modal
                    isOpen={Confirm_model}
                    toggle={() => {
                      Confirm_view();
                    }}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <ModalHeader
                      toggle={() => {
                        Confirm_view();
                      }}
                    >
                      <h3> Change Status!</h3>
                    </ModalHeader>
                    {/* <div className="modal-header"> */}
                    <button
                      onClick={() => {
                        Confirm_view();
                        // setmodal_large2(false)
                      }}
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    {/* </div> */}
                    <ModalBody>
                      <div className="modal-body">
                        <h5>Are You Sure?</h5>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <button
                        onClick={() => {
                          ChangeStatus();
                          Confirm_view();
                          setConfirm_model(false);
                        }}
                        className="btn btn-primary mr-10"
                        type="button"
                      >
                        <span aria-hidden="true">Yes</span>
                      </button>
                      <button
                        onClick={() => {
                          Confirm_view();
                          // setmodal_large2(false)
                        }}
                        className="btn btn-light"
                        type="button"
                      >
                        <span aria-hidden="true">No</span>
                      </button>
                    </ModalFooter>
                  </Modal>
                  <Row className="proress-style mt-3">
                    <Col xl={3}></Col>
                    <Col xl={9}>
                      <div className="pagination-bar text-end">
                        <Pagination>
                          <PaginationItem disabled={pageNumber === 1}>
                            <PaginationLink
                              first
                              onClick={() => handlePageChange(1)}
                            />
                          </PaginationItem>
                          <PaginationItem disabled={pageNumber === 1}>
                            <PaginationLink
                              previous
                              onClick={() => handlePageChange(pageNumber - 1)}
                            />
                          </PaginationItem>
                          {Array.from(
                            { length: pageLimit },
                            (_, i) => i + startPage
                          ).map((page) => {
                            if (page > pageTotal) return null;
                            return (
                              <PaginationItem
                                key={page}
                                active={pageNumber === page}
                              >
                                <PaginationLink
                                  onClick={() => handlePageChange(page)}
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          })}
                          <PaginationItem disabled={pageNumber === pageTotal}>
                            <PaginationLink
                              next
                              onClick={() => handlePageChange(pageNumber + 1)}
                            />
                          </PaginationItem>
                          <PaginationItem disabled={pageNumber === pageTotal}>
                            <PaginationLink
                              last
                              onClick={() => handlePageChange(pageTotal)}
                            />
                          </PaginationItem>
                        </Pagination>
                      </div>
                    </Col>
                  </Row>
                  <Modal
                    isOpen={modal}
                    toggle={() => toggle(selectedId, modalType)}
                  >
                    <ModalHeader
                      style={{ border: "none" }}
                      toggle={() => toggle(selectedId, modalType)}
                    >
                      {modalType === "rejected"
                        ? "Reject Appointment"
                        : "Cancel Appointment"}
                    </ModalHeader>
                    <ModalBody style={{ border: "none" }}>
                      <div className="d-flex flex ml-2">
                        {modalType === "rejected" ? (
                          <textarea
                            rows={2}
                            name="reason"
                            placeholder="Type reason for rejecting"
                            className="w-100 me-2 px-2"
                            onChange={(e) => setRejectReason(e.target.value)}
                            type="text"
                          ></textarea>
                        ) : (
                          <textarea
                            rows={2}
                            name="reason"
                            placeholder="Type reason for canceling"
                            className="w-100 me-2 px-2"
                            onChange={(e) => setRejectReason(e.target.value)}
                            type="text"
                          ></textarea>
                        )}
                        {reasonErr.length > 0 && (
                          <p className="text-danger">{reasonErr}</p>
                        )}
                      </div>
                    </ModalBody>
                    <ModalFooter style={{ border: "none" }}>
                      <Button
                        color="primary"
                        onClick={() => {
                          updateAppoitnment(selectedId, modalType);
                        }}
                      >
                        Yes
                      </Button>{" "}
                      <Button
                        color="secondary"
                        onClick={() => toggle(selectedId, modalType)}
                      >
                        No
                      </Button>
                    </ModalFooter>
                  </Modal>
                  <Modal isOpen={modalOne} toggle={toggle_one}>
                    <ModalHeader style={{ border: "none" }} toggle={toggle_one}>
                      Are you sure you want to schedule the current appointment?
                    </ModalHeader>
                    <ModalFooter style={{ border: "none" }}>
                      <Button
                        color="primary"
                        onClick={() => updateAppoitnment(selectedId, "booked")}
                      >
                        Yes
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "#4285f4",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={() => {
                          bookedAndSyncWithGoogleCalendar(selectedId, "booked");
                        }}
                      >
                        <span style={{ color: "white" }}>Sync</span>
                        <div
                          style={{
                            height: "24px",
                            width: "27px",
                            borderRadius: "50%",
                          }}
                        >
                          <img
                            src="/images/google.png"
                            alt="Google Logo"
                            style={{ height: "21px" }}
                          />
                        </div>
                      </Button>
                      <Button color="secondary" onClick={toggle_one}>
                        No
                      </Button>
                    </ModalFooter>
                  </Modal>
                  {/* <Row className="proress-style mt-3">
                    <Col xl={3}></Col>
                    <Col xl={9}>
                      <div className="pagination-bar">
                        <Pagination aria-label="Page navigation example" key={currentPage}>
                          <PaginationItem
                            onClick={goToPreviousPage}

                          >
                            <PaginationLink href="#" tabIndex="-1">
                              Previous
                            </PaginationLink>
                          </PaginationItem>
                          {pages.map((index, i) => {
                            let crr = currentPage == i + 1 ? 'true' : ''
                            console.log(currentPage, i + 1)

                            return <PaginationItem active={crr}
                              key={i + 1}
                              onClick={() => changePage(i + 1)}
                            >
                              <PaginationLink href="#">
                                {i + 1} <span className="sr-only">(current)</span>
                              </PaginationLink>
                            </PaginationItem>

                          })}



                          <PaginationItem
                            onClick={goToNextPage}
                          >
                            <PaginationLink href="#">Next</PaginationLink>
                          </PaginationItem>
                        </Pagination>


                      </div>
                    </Col>
                  </Row> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Appointment;
