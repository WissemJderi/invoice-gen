import { useEffect, useState } from "react";
import { inputs } from "./data/inputs";
import PDFHolder from "../PDFHolder";

const InvoiceInput = () => {
  const [showPDF, setShowPDF] = useState(true);
  const [invoices, setInvoices] = useState(() => {
    const stored = localStorage.getItem("invoices");
    return stored ? JSON.parse(stored) : [];
  });
  const initInvoiceData = {
    invoiceNumber: invoices.length + 1,
    clientName: "",
    clientDescription: "",
    MF: "",
    address: "",
    phoneNumber: 0,
    date: new Date().toISOString().split("T")[0],
    productName: "",
    unity: "",
    quantity: 0,
    puht: 0,
    tva: 19,
    ptht: 0,
    base: 0,
    tvaAmount: 0,
    timbre: 1,
    fodec: 0,
    discount: 0,
    total: 0,
    totalAsText: "",
  };
  const [invoiceData, setInvoiceData] =
    useState<Record<string, string | number>>(initInvoiceData);
  useEffect(() => {
    const quantity = Number(invoiceData.quantity);
    const puht = Number(invoiceData.puht);
    const tva = Number(invoiceData.tva) * 0.01;
    const timbre = Number(invoiceData.timbre);
    const fodec = Number(invoiceData.fodec);
    const discount = Number(invoiceData.discount);

    const ptht = quantity * puht;
    const base = quantity * puht;
    const tvaAmount = base * tva;
    const total = base + tvaAmount + timbre + fodec - discount;

    if (invoiceData.ptht !== ptht || invoiceData.total !== total) {
      setInvoiceData((prev) => ({
        ...prev,
        ptht,
        base,
        tvaAmount,
        total,
      }));
    }
  }, [
    invoiceData.quantity,
    invoiceData.puht,
    invoiceData.tva,
    invoiceData.timbre,
    invoiceData.fodec,
    invoiceData.discount,
  ]);
  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);
  const addInvoice = (invoice: {}) => {
    setInvoices((prev: any[]) => [...prev, invoice]);
  };
  const inputStyle = "bg-[#CFE3CE] rounded-sm text-black pl-2";
  const inputTitleStyle = "pl-3 text-sm";
  const childInputTitleStyle = "text-sm text-center";

  const inputsList = inputs.map((input) => {
    if (input.inputSize === "full") {
      return (
        <div className="flex flex-col" key={input.inputName}>
          <p className={`${inputTitleStyle}`}>{input.inputName}:</p>
          <input
            type={input.type}
            value={invoiceData[input.id]}
            className={`${inputStyle}`}
            onChange={(e) => {
              setInvoiceData((prevState) => ({
                ...prevState,
                [input.id]: e.target.value,
              }));
            }}
          />
        </div>
      );
    } else if (input.inputSize === "hasChildren") {
      const input_children = input.children?.map((child) => (
        <div className="flex flex-col flex-1" key={child.inputName}>
          <p className={`${childInputTitleStyle} text-center`}>
            {child.inputName}:
          </p>
          <input
            type={child.type}
            value={invoiceData[child.id]}
            className={`${inputStyle}`}
            onChange={(e) => {
              console.log(invoiceData);

              setInvoiceData((prevState) => ({
                ...prevState,
                [child.id]: e.target.value,
              }));
            }}
          />
        </div>
      ));

      return (
        <div className="grid grid-cols-3 gap-2" key={input.inputName}>
          {input_children}
        </div>
      );
    } else if (input.inputSize === "textArea") {
      return (
        <div key={input.inputName}>
          <p className={`${inputTitleStyle}`}>{input.inputName}:</p>
          <textarea
            value={invoiceData[input.id]}
            className={`${inputStyle} p-2 w-full `}
            onChange={(e) => {
              setInvoiceData((prevState) => ({
                ...prevState,
                [input.id]: e.target.value,
              }));
            }}
          />
        </div>
      );
    }
    return null;
  });
  return (
    <div className="bg-[#1C2541] rounded-2xl  flex flex-col gap-2 text-white sm:mx-60 sm:my-10 sm:py-5 sm:px-40 py-10 mx-3 p-4">
      <p className="text-xl">Invoice Number: {invoiceData.invoiceNumber}</p>
      {inputsList}
      <button
        className="bg-[#8EC78C] rounded-md sm:mx-30 sm:my-2 text-md my-3 mx-6 p-2 cursor-pointer"
        onClick={() => {
          setShowPDF((prevState: boolean) => !prevState);
        }}
      >
        Toggle PDF Preview
      </button>
      {showPDF ? <PDFHolder invoiceData={invoiceData} /> : null}
      <button
        onClick={() => {
          addInvoice(invoiceData);
          setInvoiceData(initInvoiceData);
        }}
        className="bg-[#8EC78C] rounded-md sm:mx-30 sm:mt-10 text-md my-3 mx-6 p-2 cursor-pointer"
      >
        Generate
      </button>
    </div>
  );
};

export default InvoiceInput;
