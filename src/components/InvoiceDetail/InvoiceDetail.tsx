import { useParams } from "react-router";
import { motion } from "motion/react";
const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");

const InvoiceDetail = () => {
  const { invoiceId } = useParams();
  const invoice = invoices.find(
    (inv: any) => String(inv.invoiceNumber) === String(invoiceId),
  );
  if (!invoice) {
    return <p>Invoice not found!</p>;
  }
  const textStyle = "text-lg text-sm sm:text-lg";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id={"invoiceDetail"}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="bg-[#1C2541] sm:mx-60 sm:my-10 sm:py-5 sm:px-40 py-10 px-5 rounded-2xl text-white mx-3 flex flex-col gap-2"
    >
      <h1>Invoice: 00{invoice.invoiceNumber}</h1>
      <p className={textStyle}>
        <strong>Date:</strong> {invoice.date}
      </p>
      <p className={textStyle}>
        <strong>Client:</strong> {invoice.clientName}
      </p>
      <p className={textStyle}>
        <strong>MF:</strong> {invoice.MF}
      </p>
      <p className={textStyle}>
        <strong>Phone Number:</strong> {invoice.phoneNumber}
      </p>
      <div className="flex flext-row justify-between">
        <p className={textStyle}>
          <strong>Product Name:</strong> {invoice.productName}
        </p>
        <p className={textStyle}>
          <strong>Unity:</strong> {invoice.unity}
        </p>
        <p className={textStyle}>
          <strong>Quantity:</strong> {invoice.quantity}
        </p>
        <p className={textStyle}>
          <strong>P.U.H.T:</strong> {invoice.puht}
        </p>
      </div>
      <p className={textStyle}>
        <strong>Total: </strong>
        {invoice.total} DT
      </p>
    </motion.div>
  );
};

export default InvoiceDetail;
