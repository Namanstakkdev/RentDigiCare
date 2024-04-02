import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Container } from "reactstrap";
import logoSvg from "../assets/images/logo-sm.svg";

const MasterHeader = () => {
  return (
    <div className="text-center">
      <div className="logo-top text-center">
        <img src={logoSvg} alt="" height="70" />
      </div>
      <h3 className="display-4 mb-4">FYI for Tenants</h3>
      <p className="lead">
        Welcome to our renting property company. Below are important sections
        for your information.
      </p>
    </div>
  );
};

const RequestTypeFYI = [
  {
    header: "Plumbing Issue",
    body: "For a minor leaking faucet, consider tightening the faucet's fittings or replacing the washer. For a clogged sink, use a sink plunger or a chemical drain cleaner to clear the clog.",
  },
  {
    header: "Electrical Problem",
    body: "If an outlet is not working, check the circuit breaker to see if the corresponding circuit has tripped. Reset the breaker if necessary. If lights are flickering, try replacing the lightbulbs to see if that resolves the issue.",
  },
  {
    header: "HVAC System Malfunction",
    body: "Check the air filters in the HVAC system and replace them if they are dirty. Also, ensure that the thermostat is set correctly and the vents are open and unobstructed.",
  },
  {
    header: "Appliance Malfunction",
    body: "For a malfunctioning refrigerator, check the temperature settings and clean the condenser coils. For a dishwasher issue, ensure that the filters are clean and not blocked.",
  },
  {
    header: "Structural Issues",
    body: "Use temporary sealants or patches for minor leaks. For cracks or damage to walls or floors, notify the landlord immediately, as these issues may require professional attention.",
  },
  {
    header: "Pest Infestation",
    body: "Implement preventive measures such as sealing cracks and crevices, keeping food tightly sealed, and maintaining cleanliness. Notify the landlord promptly for professional pest control measures.",
  },
  {
    header: "General Maintenance",
    body: "Use basic DIY skills to address minor issues, such as tightening loose fixtures or adjusting cabinet doors. For flooring issues, place temporary rugs or mats to cover minor damage.",
  },
  {
    header: "Safety or Security Concerns",
    body: "Notify the landlord immediately about non-functional smoke detectors or compromised door locks. These issues may require prompt professional attention for safety reasons.",
  },
  {
    header: "What are my rights as a tenant in Canada?",
    body: "The Residential Tenancies Act, which outlines the rights and responsibilities of both tenants and landlords. This includes protection against unlawful eviction, rent increases, and maintenance standards.",
  },
  {
    header: "What should I consider before renting an apartment or row house?",
    body: "Before renting, it's important to consider the location, amenities, transportation access, and the terms of the lease such as the duration, rent amount, and any included utilities.",
  },
  {
    header: "What is your the typical lease terms ?",
    body: "Lease terms can vary, but the most common lease is for one year. However, shorter-term leases and month-to-month rentals are also available.",
  },
  {
    header: "What costs should I expect beyond rent?",
    body: "Depending on the lease agreement, tenants may be responsible for utilities such as electricity, gas, water, and the internet. They may also need to budget for renter's insurance and possibly parking fees.",
  },
  {
    header:
      "What rights do I have if the landlord doesn't fulfill their responsibilities?",
    body: "If the landlord fails to maintain the property, tenants have the right to request repairs within a reasonable timeframe. If the landlord doesn't respond, tenants may have the right to withhold rent or terminate the lease under certain conditions, as outlined in the relevant tenancy act.",
  },
  {
    header: "Can the landlord raise the rent?",
    body: "Yes they can.",
  },
  {
    header: "What are the obligations of the landlord?",
    body: "Landlords must maintain a safe, clean, and habitable living environment. This includes ensuring the property meets health, safety, and maintenance standards, as well as addressing any necessary repairs.",
  },
  {
    header: "Can I sublet my apartment or row house?",
    body: "Subletting regulations can vary by province and are typically subject to the landlord's approval. Tenants should review their lease and consult with their landlord before subletting the property.",
  },
  {
    header: "How much notice is required to end a tenancy?",
    body: "The amount of notice required to end a tenancy can vary depending on the length of the lease and the specific conditions outlined in the tenancy agreement or local regulations.",
  },
  {
    header: "Is renter's insurance mandatory?",
    body: "While it may not be legally required, many landlords strongly recommend or even require tenants to have renter's insurance in case of accidents, damages, or losses within the rented property.",
  },
  {
    header: "What are my rights if the landlord wants to enter the property?",
    body: "Landlords are generally required to provide reasonable notice before entering a rental property, except in cases of emergency. The notice period may vary by jurisdiction.",
  },
  {
    header: "Who is responsible for general maintenance and repairs?",
    body: "Landlords are typically responsible for major repairs and maintenance, while tenants are responsible for day-to-day upkeep and minor repairs. The specifics may be outlined in the lease agreement or local regulations.",
  },
];

const FYI = () => {
  return (
    <React.Fragment>
      <div className="bg-soft-light min-vh-100 py-5">
        <div className="py-4">
          {/* Header */}
          <MasterHeader />
          <Container>
            <Accordion defaultActiveKey="0">
              {RequestTypeFYI.map((section, index) => (
                <Card key={index}>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>{section.header}</Accordion.Header>
                    <Accordion.Body>{section.body}</Accordion.Body>
                  </Accordion.Item>
                </Card>
              ))}
            </Accordion>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FYI;
