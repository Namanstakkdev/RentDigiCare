import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const ReminderTemplate = () => {
  const [templates, setTemplates] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const newTemplate = {
      name: file.name,
      file: file,
    };
    setTemplates([...templates, newTemplate]);
  };

  return (
    <div className="container mt-5">
      <FormGroup>
        <Label for="uiFile">Upload UI File</Label>
        <Input
          type="file"
          id="uiFile"
          name="uiFile"
          onChange={handleFileChange}
        />
      </FormGroup>

      <div className="mt-3">
        <h5>Uploaded Templates:</h5>
        <ul className="list-group">
          {templates.map((template, index) => (
            <li key={index} className="list-group-item">
              {template.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReminderTemplate;
