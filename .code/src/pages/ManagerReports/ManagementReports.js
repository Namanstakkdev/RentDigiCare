import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "react-bootstrap";
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
  const [applicants, setApplicants] = useState([]);

  const decode = jwt_decode(window.localStorage.getItem("accessToken"));
  const userRole = JSON.parse(window.localStorage.getItem("authUser")).role;

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
                console.log(
                  "Appointment Response:",
                  appointmentResponse.data.appointments
                );
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

            // Fetch tickets and appointments sequentially
            await getTickets();
            await getAppointments();
            await getApplicants();
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
                              <th scope="col">Properties</th>
                              <th scope="col">Reason Types</th>
                              <th scope="col">Availabilities</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </Table>
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
                                  </tr>
                                )
                              )
                            )}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="4">Total</td>
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
                              <td colSpan="4">Total</td>
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
