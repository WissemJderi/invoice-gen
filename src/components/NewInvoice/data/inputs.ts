import type { Row } from "../types";

export const inputs: Row[] = [
  {
    inputName: "Invoice Number",
    inputSize: "full",
    id: "invoiceNumber",
    type: "number",
  },
  {
    inputName: "Client Name",
    inputSize: "full",
    id: "clientName",
    type: "text",
  },
  {
    inputName: "Client Description",
    inputSize: "full",
    id: "clientDescription",
    type: "text",
  },
  { inputName: "MF", inputSize: "full", id: "MF", type: "text" },
  { inputName: "Address", inputSize: "full", id: "address", type: "text" },
  {
    inputName: "Phone Number",
    inputSize: "full",
    id: "phoneNumber",
    type: "number",
  },
  { inputName: "Date", inputSize: "full", id: "date", type: "date" },
  {
    inputName: "Product Name",
    inputSize: "full",
    id: "productName",
    type: "text",
  },
  {
    inputName: "U Q P",
    inputSize: "hasChildren",
    id: "",
    children: [
      { inputName: "Unity", id: "unity", type: "text" },
      { inputName: "Quantity", id: "quantity", type: "number" },
      { inputName: "P.U.H.T", id: "puht", type: "number" },
    ],
  },
  {
    inputName: "T P",
    inputSize: "hasChildren",
    id: "",
    children: [
      { inputName: "TVA", id: "tva", type: "number" },
      { inputName: "P.T.H.T", id: "ptht", type: "number" },
      { inputName: "Base", id: "base", type: "number" },
    ],
  },
  {
    inputName: "B T T",
    inputSize: "hasChildren",
    id: "",
    children: [
      { inputName: "TVA Amount", id: "tvaAmount", type: "number" },
      { inputName: "Timbre", id: "timbre", type: "number" },
      { inputName: "FODEC", id: "fodec", type: "number" },
      { inputName: "Discount", id: "discount", type: "number" },
    ],
  },
  {
    inputName: "Total",
    inputSize: "full",
    id: "total",
    type: "text",
  },
  {
    inputName: "The Total As A Text",
    inputSize: "textArea",
    id: "totalAsText",
    type: "text",
  },
];
