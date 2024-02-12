import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Table, Row, Col, Card, CardBody, CardHeader, Label } from "reactstrap";
import Select from "react-select";
import jwt_decode from "jwt-decode";
import axios from "../api/axios";

const ManagementReports = () => {
  const [sortingOption, setSortingOption] = useState("");
  const [selectPropertyName, setSelectPropertyName] = useState(null);
  const [filterPropertyManager, setFilterPropertyManager] = useState("");
  const [propertyManagerList, setPropertyManagerList] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [availabilities, setAvailability] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [technicalStaffReports, setTechnicalStaffReport] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const decode = jwt_decode(window.localStorage.getItem("accessToken"));
  const userRole = JSON.parse(window.localStorage.getItem("authUser")).role;

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const convertToLocalTime = (utcTime) => {
    const utcDate = new Date(`1970-01-01T${utcTime}`);

    const localTime = utcDate.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    return localTime;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/property_manager/admin`, {
          company: decode.id,
        });
        if (response?.data?.managers) {
          setPropertyManagerList(response.data.managers);

          // Fetch tickets and appointments only if the user is a company
          if (decode.role === "company") {
            const getTickets = async () => {
              try {
                const ticketResponse = await axios.post("/ticket/report", {
                  companyDomain: decode.domain,
                  pageNumber: 1,
                });

                console.log("TicketResponse:", ticketResponse.data.tickets);

                setTickets(ticketResponse.data.tickets);
              } catch (error) {
                console.error("Error fetching tickets:", error.message);
              }
            };

            const getAppointments = async () => {
              try {
                const appointmentResponse = await axios.post(
                  "/calender/report",
                  {
                    companyDomain: decode.domain,
                    pageNumber: 1,
                  }
                );
                setAppointments(appointmentResponse.data.appointmentsReport);
              } catch (error) {
                console.error("Error fetching appointments:", error.message);
              }
            };

            const getApplicants = async () => {
              try {
                const applicantResponse = await axios.post(
                  "/applicant/report",
                  {
                    companyDomain: decode.domain,
                  }
                );

                setApplicants(applicantResponse.data.applicants);
              } catch (error) {
                console.error("Error fetching Applicants:", error.message);
              }
            };

            const getVendorsTicket = async () => {
              try {
                const vendorResponse = await axios.post("/ticket/report2", {
                  companyDomain: decode.domain,
                });

                console.log(
                  "Vendors Response:",
                  vendorResponse.data.vendorsTicketReport
                );

                setTechnicalStaffReport(
                  vendorResponse.data.vendorsTicketReport
                );
              } catch (error) {
                console.error("Error fetching Applicants:", error.message);
              }
            };

            // Fetch tickets and appointments sequentially
            await getTickets();
            await getAppointments();
            await getApplicants();
            await getVendorsTicket();
          }
        }
      } catch (error) {
        console.error("Error fetching property manager list:", error.message);
      }
    };

    fetchData();
  }, [decode.id, decode.role, decode.domain]);

  const handleSorting = (e) => {
    setSortingOption(e.target.value);
    // Add sorting logic here
  };

  const renderSortingDropdown = () => (
    <select
      onChange={handleSorting}
      className="form-select custom-select"
      style={{
        borderRadius: "4px",
        marginBottom: "10px",
        borderColor: "#d1d1d5",
      }}
    >
      <option value="">Sorting</option>
      <option value={1}>A-Z</option>
      <option value={2}>Z-A</option>
      <option value={3}>Created Latest</option>
      <option value={4}>Created Oldest</option>
    </select>
  );

  const renderPropertyManagerFilter = () => (
    <div className="col-md-3">
      <div className="mb-3">
        <Label className="form-Label">Property Manager</Label>
        <Select
          value={selectPropertyName}
          options={propertyManagerList?.map((item) => ({
            value: item._id,
            label: `${item.firstname} ${item.lastname}`,
          }))}
          placeholder="Search By Name"
          onChange={(e) => {
            setSelectPropertyName(e);
            setFilterPropertyManager(e.value);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <h1 className="card-title">Managerial Reports</h1>
                {userRole === "company" && renderPropertyManagerFilter()}
              </CardHeader>
              <CardBody>
                {/* Appointments Report */}
                <Accordion>
                  <AccordionItem>
                    <Accordion.Header className="accordion-header">
                      Appointments Report
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="table-responsive">
                        {renderSortingDropdown()}
                        <Table className="table table-striped table-bordered mb-0">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Manager Name</th>
                              <th scope="col">Property Name</th>
                              <th scope="col">Availabilities</th>
                              <th scope="col">Total</th>
                              <th scope="col">Pending</th>
                              <th scope="col">Booked</th>
                              <th scope="col">Canceled</th>
                            </tr>
                          </thead>
                          <tbody>
                            {appointments.map((appointment, index) =>
                              appointment.propertiesData.map(
                                (property, propertyIndex) => {
                                  const propertyId = property.propertyId;
                                  const appointmentData =
                                    appointment.appointmentsData.find(
                                      (data) => data.propertyId === propertyId
                                    );

                                  return (
                                    <tr>
                                      {propertyIndex === 0 && (
                                        <td
                                          rowSpan={
                                            appointment.propertiesData.length
                                          }
                                        >
                                          {propertyIndex === 0
                                            ? index + 1
                                            : null}
                                        </td>
                                      )}
                                      {propertyIndex === 0 && (
                                        <td
                                          rowSpan={
                                            appointment.propertiesData.length
                                          }
                                        >
                                          {appointment.managerName}
                                        </td>
                                      )}
                                      <td>{property.name}</td>
                                      {propertyIndex === 0 && (
                                        <td
                                          rowSpan={
                                            appointment.propertiesData.length
                                          }
                                          style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                          }}
                                        >
                                          {appointment.managerAvailabilities
                                            .length === 0 ? (
                                            <button
                                              className="btn btn-secondary btn-sm"
                                              disabled
                                            >
                                              No Availabilities
                                            </button>
                                          ) : (
                                            <button
                                              className="btn btn-primary btn-sm"
                                              onClick={() => {
                                                handleShowModal();
                                                setAvailability(
                                                  appointment
                                                    .managerAvailabilities[0]
                                                    .daysOfWeekAvailability
                                                );
                                              }}
                                            >
                                              Show Availabilities
                                            </button>
                                          )}
                                        </td>
                                      )}
                                      <td>
                                        {appointmentData
                                          ? appointmentData.appointments
                                          : 0}
                                      </td>
                                      <td>
                                        {appointmentData
                                          ? appointmentData.totalPending
                                          : 0}
                                      </td>
                                      <td>
                                        {appointmentData
                                          ? appointmentData.totalBooked
                                          : 0}
                                      </td>
                                      <td>
                                        {appointmentData
                                          ? appointmentData.totalCanceled
                                          : 0}
                                      </td>
                                    </tr>
                                  );
                                }
                              )
                            )}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="4">Total</td>
                              <td>
                                {appointments.reduce(
                                  (acc, curr) =>
                                    acc +
                                    curr.appointmentsData.reduce(
                                      (a, c) => a + c.appointments,
                                      0
                                    ),
                                  0
                                )}
                              </td>
                              <td>
                                {appointments.reduce(
                                  (acc, curr) =>
                                    acc +
                                    curr.appointmentsData.reduce(
                                      (a, c) => a + c.totalPending,
                                      0
                                    ),
                                  0
                                )}
                              </td>
                              <td>
                                {appointments.reduce(
                                  (acc, curr) =>
                                    acc +
                                    curr.appointmentsData.reduce(
                                      (a, c) => a + c.totalBooked,
                                      0
                                    ),
                                  0
                                )}
                              </td>
                              <td>
                                {appointments.reduce(
                                  (acc, curr) =>
                                    acc +
                                    curr.appointmentsData.reduce(
                                      (a, c) => a + c.totalCanceled,
                                      0
                                    ),
                                  0
                                )}
                              </td>
                            </tr>
                          </tfoot>
                        </Table>
                        <Modal
                          show={showModal}
                          onHide={handleCloseModal}
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Availabilities</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Day</th>
                                  <th>Available</th>
                                  <th>Time Slots</th>
                                </tr>
                              </thead>
                              <tbody>
                                {availabilities.map((availability, index) => (
                                  <tr key={index}>
                                    <td>{availability.day}</td>
                                    <td>
                                      {availability.available ? "Yes" : "No"}
                                    </td>
                                    <td>
                                      {availability.slots.length > 0 ? (
                                        <ul className="list-unstyled">
                                          {availability.slots.map(
                                            (slot, slotIndex) => (
                                              <li key={slotIndex}>
                                                {convertToLocalTime(
                                                  slot.startTime
                                                )}{" "}
                                                -{" "}
                                                {convertToLocalTime(
                                                  slot.endTime
                                                )}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      ) : (
                                        <p>No time slots available</p>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={handleCloseModal}
                            >
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </Accordion.Body>
                  </AccordionItem>
                </Accordion>

                {/* Maintenance Requests Report */}
                <Accordion>
                  <AccordionItem>
                    <Accordion.Header className="accordion-header">
                      Maintenance Requests Report
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="table-responsive">
                        {renderSortingDropdown()}
                        <Table className="table table-striped table-bordered mb-0">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Manager Name</th>
                              <th scope="col">Property Name</th>
                              <th scope="col">Total</th>
                              <th scope="col">Open</th>
                              <th scope="col">Inprogress</th>
                              <th scope="col">Completed</th>
                              <th scope="col">Assign To TechnicalStaff</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tickets.map((ticket, index) =>
                              ticket.properties.map(
                                (property, propertyIndex) => (
                                  <tr>
                                    {propertyIndex === 0 && (
                                      <td rowSpan={ticket.properties.length}>
                                        {propertyIndex === 0 ? index + 1 : null}
                                      </td>
                                    )}
                                    {propertyIndex === 0 && (
                                      <td rowSpan={ticket.properties.length}>
                                        {ticket._id}
                                      </td>
                                    )}
                                    <td>{property.name}</td>
                                    <td>{property.totalTickets}</td>
                                    {["Open", "Inprogress", "Completed"].map(
                                      (status, statusIndex) => (
                                        <td
                                          key={`${index}-${propertyIndex}-${statusIndex}`}
                                        >
                                          {property.statusCounts.find(
                                            (count) => count.status === status
                                          )?.count || 0}
                                        </td>
                                      )
                                    )}
                                    {["technicalStaff"].map(
                                      (assignedToType, assignTypeIndex) => (
                                        <td>
                                          {property.assignedToTypes.find(
                                            (count) =>
                                              count.assignedToType ===
                                              assignedToType
                                          )?.count || 0}
                                        </td>
                                      )
                                    )}
                                  </tr>
                                )
                              )
                            )}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="3">Total</td>
                              <td>
                                {tickets.reduce((total, ticket) => {
                                  return (
                                    total +
                                    ticket.properties.reduce(
                                      (acc, property) => {
                                        return acc + property.totalTickets;
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                              <td>
                                {tickets.reduce((total, ticket) => {
                                  return (
                                    total +
                                    ticket.properties.reduce(
                                      (acc, property) => {
                                        return (
                                          acc +
                                          (property.statusCounts.find(
                                            (count) => count.status === "Open"
                                          )?.count || 0)
                                        );
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                              <td>
                                {tickets.reduce((total, ticket) => {
                                  return (
                                    total +
                                    ticket.properties.reduce(
                                      (acc, property) => {
                                        return (
                                          acc +
                                          (property.statusCounts.find(
                                            (count) =>
                                              count.status === "Inprogress"
                                          )?.count || 0)
                                        );
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                              <td>
                                {tickets.reduce((total, ticket) => {
                                  return (
                                    total +
                                    ticket.properties.reduce(
                                      (acc, property) => {
                                        return (
                                          acc +
                                          (property.statusCounts.find(
                                            (count) =>
                                              count.status === "Completed"
                                          )?.count || 0)
                                        );
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                            </tr>
                          </tfoot>
                        </Table>
                      </div>
                    </Accordion.Body>
                  </AccordionItem>
                </Accordion>

                {/* Vendors Report */}
                <Accordion>
                  <AccordionItem>
                    <Accordion.Header className="accordion-header">
                      Maintenance Requests under Technical Staff Report
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="table-responsive">
                        {renderSortingDropdown()}
                        <Table className="table table-striped table-bordered mb-0">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Vendor Name</th>
                              <th scope="col">Property Name</th>
                              <th scope="col">Total</th>
                              <th scope="col">Open</th>
                              <th scope="col">Inprogress</th>
                              <th scope="col">Completed</th>
                            </tr>
                          </thead>
                          <tbody>
                            {technicalStaffReports.map(
                              (technicalStaffReport, index) =>
                                technicalStaffReport.properties.map(
                                  (property, propertyIndex) => (
                                    <tr>
                                      {propertyIndex === 0 && (
                                        <td
                                          rowSpan={
                                            technicalStaffReport.properties
                                              .length
                                          }
                                        >
                                          {propertyIndex === 0
                                            ? index + 1
                                            : null}
                                        </td>
                                      )}
                                      {propertyIndex === 0 && (
                                        <td
                                          rowSpan={
                                            technicalStaffReport.properties
                                              .length
                                          }
                                        >
                                          {technicalStaffReport._id}
                                        </td>
                                      )}
                                      <td>{property.name}</td>
                                      <td>{property.totalTickets}</td>
                                      {["Open", "Inprogress", "Completed"].map(
                                        (status, statusIndex) => (
                                          <td
                                            key={`${index}-${propertyIndex}-${statusIndex}`}
                                          >
                                            {property.statusCounts.find(
                                              (count) => count.status === status
                                            )?.count || 0}
                                          </td>
                                        )
                                      )}
                                    </tr>
                                  )
                                )
                            )}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="3">Total</td>
                              <td>
                                {technicalStaffReports.reduce(
                                  (total, technicalStaffReport) => {
                                    return (
                                      total +
                                      technicalStaffReport.properties.reduce(
                                        (acc, property) => {
                                          return acc + property.totalTickets;
                                        },
                                        0
                                      )
                                    );
                                  },
                                  0
                                )}
                              </td>
                              <td>
                                {technicalStaffReports.reduce(
                                  (total, technicalStaffReport) => {
                                    return (
                                      total +
                                      technicalStaffReport.properties.reduce(
                                        (acc, property) => {
                                          return (
                                            acc +
                                            (property.statusCounts.find(
                                              (count) => count.status === "Open"
                                            )?.count || 0)
                                          );
                                        },
                                        0
                                      )
                                    );
                                  },
                                  0
                                )}
                              </td>
                              <td>
                                {technicalStaffReports.reduce(
                                  (total, technicalStaffReport) => {
                                    return (
                                      total +
                                      technicalStaffReport.properties.reduce(
                                        (acc, property) => {
                                          return (
                                            acc +
                                            (property.statusCounts.find(
                                              (count) =>
                                                count.status === "Inprogress"
                                            )?.count || 0)
                                          );
                                        },
                                        0
                                      )
                                    );
                                  },
                                  0
                                )}
                              </td>
                              <td>
                                {technicalStaffReports.reduce(
                                  (total, technicalStaffReport) => {
                                    return (
                                      total +
                                      technicalStaffReport.properties.reduce(
                                        (acc, property) => {
                                          return (
                                            acc +
                                            (property.statusCounts.find(
                                              (count) =>
                                                count.status === "Completed"
                                            )?.count || 0)
                                          );
                                        },
                                        0
                                      )
                                    );
                                  },
                                  0
                                )}
                              </td>
                            </tr>
                          </tfoot>
                        </Table>
                      </div>
                    </Accordion.Body>
                  </AccordionItem>
                </Accordion>

                {/* Resident Applications Report */}
                <Accordion>
                  <AccordionItem>
                    <Accordion.Header className="accordion-header">
                      Resident Applications Report
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="table-responsive">
                        {renderSortingDropdown()}
                        <Table className="table table-striped table-bordered mb-0">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Manager Name</th>
                              <th scope="col">Property Name</th>
                              <th scope="col">Total</th>
                              <th scope="col">Pending</th>
                              <th scope="col">Approved</th>
                              <th scope="col">Denied</th>
                            </tr>
                          </thead>
                          <tbody>
                            {applicants.map((applicant, index) =>
                              applicant.properties.map(
                                (property, propertyIndex) => (
                                  <tr>
                                    {propertyIndex === 0 && (
                                      <td rowSpan={applicant.properties.length}>
                                        {propertyIndex === 0 ? index + 1 : null}
                                      </td>
                                    )}
                                    {propertyIndex === 0 && (
                                      <td rowSpan={applicant.properties.length}>
                                        {applicant._id}
                                      </td>
                                    )}
                                    <td>{property.name[0].title}</td>
                                    <td>{property.totalApplicants}</td>
                                    {["Pending", "Approved", "Denied"].map(
                                      (status, statusIndex) => (
                                        <td
                                          key={`${index}-${propertyIndex}-${statusIndex}`}
                                        >
                                          {property.statusCounts.find(
                                            (count) => count.status === status
                                          )?.count || 0}
                                        </td>
                                      )
                                    )}
                                  </tr>
                                )
                              )
                            )}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="3">Total</td>
                              <td>
                                {/* Calculate and display the sum of Total */}
                                {applicants.reduce((total, applicant) => {
                                  return (
                                    total +
                                    applicant.properties.reduce(
                                      (acc, property) => {
                                        return acc + property.totalApplicants;
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                              <td>
                                {applicants.reduce((total, applicant) => {
                                  return (
                                    total +
                                    applicant.properties.reduce(
                                      (acc, property) => {
                                        return (
                                          acc +
                                          (property.statusCounts.find(
                                            (count) =>
                                              count.status === "Pending"
                                          )?.count || 0)
                                        );
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                              <td>
                                {applicants.reduce((total, applicant) => {
                                  return (
                                    total +
                                    applicant.properties.reduce(
                                      (acc, property) => {
                                        return (
                                          acc +
                                          (property.statusCounts.find(
                                            (count) =>
                                              count.status === "Approved"
                                          )?.count || 0)
                                        );
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                              <td>
                                {applicants.reduce((total, applicant) => {
                                  return (
                                    total +
                                    applicant.properties.reduce(
                                      (acc, property) => {
                                        return (
                                          acc +
                                          (property.statusCounts.find(
                                            (count) => count.status === "Denied"
                                          )?.count || 0)
                                        );
                                      },
                                      0
                                    )
                                  );
                                }, 0)}
                              </td>
                            </tr>
                          </tfoot>
                        </Table>
                      </div>
                    </Accordion.Body>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ManagementReports;
