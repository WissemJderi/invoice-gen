import { useState } from "react";
import { Link } from "react-router";
import { months, sortInvoices } from "./utils";
import { motion } from "motion/react";
import { formatPrice } from "../HomePage/utils";

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
        <ul className="mx-3 flex flex-col gap-5 rounded-2xl bg-[#1C2541] p-8">
          {monthInvoices.map((invoice: any, index) => {
            const displayNumber = invoices.length - index;
            return (
              <motion.div
                key={`${invoice.invoiceNumber}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <Link
                  to={`/invoices/${invoice.invoiceNumber}`}
                  className="block rounded-md bg-[#0B132B] p-4 transition-all duration-300 hover:bg-[#060B1A] hover:shadow-lg"
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:px-2 sm:text-base">
                    <span className="font-mono text-[#8EC78C]">
                      #{String(displayNumber).padStart(3, "0")}
                    </span>
                    <span className="font-medium text-white">
                      {invoice.clientName}
                    </span>
                    <span className="text-white/70">{invoice.address}</span>
                    <span className="text-white/70">{invoice.date}</span>
                  </div>

                  <hr className="my-3 border-[#8EC78C]/20" />

                  <div className="flex items-center justify-between px-2">
                    <p className="text-sm text-white/80 sm:text-base">
                      {invoice.productName}
                    </p>
                    <p className="text-base font-semibold text-white sm:text-lg">
                      {formatPrice(invoice.total)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
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
      className="bg-[#1C2541] rounded-2xl  flex flex-col gap-2 text-white  sm:my-10 sm:py-5 sm:px-40 py-10  p-4 xl:mx-60 mx-2"
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
