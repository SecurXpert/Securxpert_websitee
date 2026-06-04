export const initialFormState = {
  name: "",
  email: "",
  contact: "",
  totalExp: "",
  relExp: "",
  location: "",
  currentCtc: "",
  expectedCtc: "",
  noticePeriod: "",
};

export const formStructure = [
  {
    type: "row",
    fields: [
      { name: "name", label: "Candidate Name", placeholder: "Enter full name", type: "text", required: true }
    ]
  },
  {
    type: "row",
    fields: [
      { name: "email", label: "Email ID", placeholder: "Enter email address", type: "email", required: true }
    ]
  },
  {
    type: "row",
    fields: [
      { name: "contact", label: "Contact Number", placeholder: "Enter phone number", type: "tel", required: true }
    ]
  },
  {
    type: "grid",
    fields: [
      { name: "totalExp", label: "Total Exp (Yrs)", placeholder: "e.g. 3.5", type: "number", min: "0", step: "0.5", required: true },
      { name: "relExp", label: "Rel Exp (Yrs)", placeholder: "e.g. 2", type: "number", min: "0", step: "0.5", required: true }
    ]
  },
  {
    type: "row",
    fields: [
      { name: "location", label: "Current Location", placeholder: "City, Country", type: "text", required: true }
    ]
  },
  {
    type: "grid",
    fields: [
      { name: "currentCtc", label: "Current CTC (LPA)", placeholder: "e.g. 6.5", type: "text", required: true },
      { name: "expectedCtc", label: "Expected CTC", placeholder: "e.g. 9.5", type: "text", required: true }
    ]
  },
  {
    type: "row",
    fields: [
      { name: "noticePeriod", label: "Notice Period", placeholder: "e.g. Immediate / 30 Days", type: "text", required: true }
    ]
  }
];

