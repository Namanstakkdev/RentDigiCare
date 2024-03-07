import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import jwt_decode from "jwt-decode";

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  CardHeader,
  Label,
  Form,
  Input,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AppointmentStatus = () => {
  const decode = jwt_decode(window.localStorage.accessToken);

  //  database
  const [selectedId, setSelectedId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [newAppointmentStatus, setNewAppointmentStatus] = useState("");
  const [appointmentStatus, setAppointmentStatus] = useState([]);

  const createOption = (label) => ({
    label,
    value: label,
  });

  const defaultOptions = [
    createOption("No show"),
    createOption("Completed"),
    createOption("Scheduled"),
  ];
  const [appointmentStatusTypes, setAppointmentStatusTypes] =
    useState(defaultOptions);
  const [createLoadings, setCreateLoadings] = useState(false);

  const handleCreate = (inputValue) => {
    setCreateLoadings(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setCreateLoadings(false);
      setAppointmentStatusTypes((prev) => [...prev, newOption]);
      setNewAppointmentStatus(newOption);
    }, 1000);
  };

  async function addAppointmentStatusType(event) {
    event.preventDefault();

    if (newAppointmentStatus == "") {
      setshowError(true);
    } else {
      setshowError(false);
    }
    if (newAppointmentStatus != "") {
      try {
        const response = await axios.post("appointmentStatus/addstatustype", {
          company_id: decode.id,
          appointment_status_type: newAppointmentStatus?.value,
        });

        if (response.data.status === 200) {
          getAppointmentStatusTypes();
          setIsEdit(false);
          setNewAppointmentStatus("");
          tog_large();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function editAppointmentStatusType(event) {
    event.preventDefault();

    // if (newRequestType == "") {
    //   setshowError(true);
    // } else {
    //   setshowError(false);
    // }
    // if (newRequestType != "") {
    // try {
    // const response = await axios.post("requesttype/editrequesttype", {
    //   id: selectedId,
    //   request_type: newRequestType?.value,
    // });

    // if (response.data.status === 200) {
    //   getRequestTypes();
    //   setIsEdit(false);
    //   setNewRequestType("");
    //   tog_large();
    // }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }

  const [modal_large, setmodal_large] = useState(false);

  const [showError, setshowError] = useState(false);

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  function tog_large() {
    setmodal_large(!modal_large);
    removeBodyCss();
  }

  const getAppointmentStatusTypes = async () => {
    try {
      const response = await axios.post("appointmentStatus/getStatus", {
        company_id: decode.id,
      });
      if (response.data.appointmentStatus) {
        const temp = response.data.appointmentStatus.reverse();
        setAppointmentStatus(temp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteStatusTypes(requestTypeID) {
    if (window.confirm("Are you sure?")) {
      try {
        const response = await axios.post(`appointmentStatus/delete`, {
          id: requestTypeID,
        });
        if (response.data.status === 200) {
          getAppointmentStatusTypes();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    getAppointmentStatusTypes();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Rentdigicare | Appointment Status Types </title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Home" breadcrumbItem="Request Type" />
          <Row>
            <Col xl={12}>
              <Card>
                {
                  <CardHeader>
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="mb">
                          <h5 className="card-title">
                            Total
                            <span className="text-muted fw-normal ms-2">
                              ({appointmentStatus.length})
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6 d-flex flex-wrap align-items-center justify-content-end">
                        <div className="mb">
                          {!(
                            decode.role === "manager" || decode.role === "admin"
                          ) ? (
                            <button
                              type="button"
                              onClick={async () => {
                                setNewAppointmentStatus("");
                                setIsEdit(false);
                                tog_large();
                              }}
                              className="btn btn-light "
                              data-toggle="modal"
                              data-target=".bs-example-modal-lg"
                            >
                              <i className="bx bx-plus me-1"></i> Add Status
                              Type
                            </button>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                }
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table-striped table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>

                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointmentStatus.map((item, i) => {
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              <td>{item.status}</td>

                              <td>
                                <div className="d-flex gap-3">
                                  {/* <Link className="text-success" to="#">
                                    <i
                                      className="mdi mdi-pencil font-size-18"
                                      id="edittooltip"
                                      onClick={() => {
                                        setIsEdit(true);
                                        setSelectedId(item._id);
                                        setNewAppointmentStatus(item.status);
                                        tog_large();
                                      }}
                                      data-toggle="modal"
                                      data-target=".bs-example-modal-lg"
                                    ></i>
                                  </Link> */}
                                  <Link className="text-danger" to="#">
                                    <i
                                      className="mdi mdi-delete font-size-18"
                                      id="deletetooltip"
                                      onClick={async (e) => {
                                        e.preventDefault();
                                        await deleteStatusTypes(item._id);
                                      }}
                                    ></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal
            size="lg"
            isOpen={modal_large}
            toggle={() => {
              tog_large();
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="myLargeModalLabel">
                {isEdit ? "Edit Appointment Status" : "Add Appointment Status"}
              </h5>
              <button
                onClick={() => {
                  setmodal_large(false);
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form
                onSubmit={
                  isEdit ? editAppointmentStatusType : addAppointmentStatusType
                }
              >
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="formrow-title-input"
                      >
                        Appointment Status *
                      </Label>

                      <CreatableSelect
                        isClearable
                        isDisabled={createLoadings}
                        isLoading={createLoadings}
                        onChange={(newValue) =>
                          setNewAppointmentStatus(newValue)
                        }
                        onCreateOption={handleCreate}
                        options={appointmentStatusTypes}
                        value={newAppointmentStatus}
                      />
                      {showError ? (
                        <h6 style={{ color: "red" }}>Cannot be empty</h6>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-success save-user"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppointmentStatus;
