import { useState } from "react";
import { Link } from "react-router";
import { months, sortInvoices } from "./utils";
import { motion } from "motion/react";

const History = () => {
  const [invoices] = useState(() => {
    const stored = localStorage.getItem("invoices");
    return stored ? JSON.parse(stored) : [];
  });
  const newInvoiceList = sortInvoices(invoices);
  const invoiceList = newInvoiceList.map((monthInvoices, monthIndex) => {
    if (monthInvoices.length === 0) return null;
    return (
      <section key={monthIndex}>
        <h2 className="text-xl font-bold">{months[monthIndex]}:</h2>{" "}
        <ul>
          {monthInvoices.map((invoice: any, i) => (
            <Link
              to={`/invoices/${invoice.invoiceNumber}`}
              key={`${invoice.clientName}${i}`}
            >
              <div className="bg-[#0B132B] rounded-md p-2 my-2 text-sm sm:text-lg cursor-pointer">
                <header>
                  <ul className="flex flex-row justify-between p-2">
                    <li className="text-[#8EC78C]">
                      00{invoices.indexOf(invoice) + 1}
                    </li>
                    <li className="text-white">{invoice.clientName}</li>
                    <li className="text-white">{invoice.address}</li>
                    <li className="text-white">{invoice.date}</li>
                  </ul>
                </header>
                <main className="px-4">
                  <section>
                    <ul className="text-white text-center my-2">
                      <li>{invoice.productName}</li>
                    </ul>
                  </section>
                  <p className="text-right text-white">{invoice.total} DT</p>
                </main>
              </div>
            </Link>
          ))}
        </ul>
      </section>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id={"history"}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="bg-[#1C2541] rounded-2xl  flex flex-col gap-2 text-white sm:mx-60 sm:my-10 sm:py-5 sm:px-40 py-10 mx-3 p-4"
    >
      {" "}
      <p className="text-gray-300 sm:text-lg text-sm text-center">
        Browse your complete invoices organized by date. Click on any invoice to
        view details, download.
      </p>
      {invoiceList}
    </motion.div>
  );
};

export default History;
