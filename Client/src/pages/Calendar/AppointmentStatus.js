import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
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

  const [selectedId, setSelectedId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [newAppointmentStatus, setNewAppointmentStatus] = useState("");
  const [appointmentStatus, setAppointmentStatus] = useState([]);
  const [showError, setShowError] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [loading, setLoading] = useState(false);

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };

  const toggleModal = () => {
    setModalLarge(!modalLarge);
    removeBodyCss();
  };

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

  const addAppointmentStatusType = async (event) => {
    event.preventDefault();

    if (!newAppointmentStatus.trim()) {
      setShowError(true);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "appointmentStatus/addstatustype",
        {
          company_id: decode.id,
          appointment_status_type: newAppointmentStatus,
        }
      );

      if (response.data.status === 200) {
        getAppointmentStatusTypes();
        setIsEdit(false);
        setNewAppointmentStatus("");
        toggleModal();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteStatusTypes = async (requestTypeID) => {
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
  };

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
                <CardHeader>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="mb">
                        <h5 className="card-title">
                          Total{" "}
                          <span className="text-muted fw-normal ms-2">
                            ({appointmentStatus.length})
                          </span>
                        </h5>
                      </div>
                    </div>

                    <div className="col-md-6 d-flex flex-wrap align-items-center justify-content-end">
                      <div className="mb">
                        {!(
                          decode.role === "manager" ||
                          decode.role === "admin"
                        ) ? (
                          <button
                            type="button"
                            onClick={() => {
                              setNewAppointmentStatus("");
                              setIsEdit(false);
                              toggleModal();
                            }}
                            className="btn btn-light"
                          >
                            <i className="bx bx-plus me-1"></i> Add Status Type
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
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
                        {appointmentStatus.map((item, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.status}</td>
                            <td>
                              <div className="d-flex gap-3">
                                <Link className="text-danger" to="#">
                                  <i
                                    className="mdi mdi-delete font-size-18"
                                    onClick={async (e) => {
                                      e.preventDefault();
                                      await deleteStatusTypes(item._id);
                                    }}
                                  ></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal
            size="lg"
            isOpen={modalLarge}
            toggle={toggleModal}
          >
            <div className="modal-header">
              <h5 className="modal-title mt-0">
                {isEdit ? "Edit Appointment Status" : "Add Appointment Status"}
              </h5>
              <button
                onClick={() => {
                  setModalLarge(false);
                }}
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form onSubmit={addAppointmentStatusType}>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <Label className="form-label">
                        Appointment Status *
                      </Label>
                      <Input
                        type="text"
                        value={newAppointmentStatus}
                        onChange={(e) =>
                          setNewAppointmentStatus(e.target.value)
                        }
                      />
                      {showError && (
                        <h6 style={{ color: "red" }}>Cannot be empty</h6>
                      )}
                    </div>
                  </div>
                  
                  <div className="col-md-12">
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-success save-user"
                        disabled={loading}
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

