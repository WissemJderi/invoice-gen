import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatPrice } from "./utils";

import { motion } from "motion/react";

const RecentInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("invoices");
    if (stored) {
      setInvoices(JSON.parse(stored));
    }
  }, []);
  const recentInvoices = invoices.slice(-3).reverse();

  if (recentInvoices.length === 0) {
    return (
      <section className="my-8">
        <h2 className="ml-5 text-2xl text-white">Recent Invoices</h2>
        <div className="mx-3 rounded-2xl bg-[#1C2541] p-8">
          <p className="text-center text-white/60">
            Your invoice list is empty. Let's get started!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-8">
      <h2 className="ml-5 text-2xl text-white">Recent Invoices</h2>
      <div className="mx-3 flex flex-col gap-5 rounded-2xl bg-[#1C2541] p-8">
        {recentInvoices.map((invoice: any, index: any) => {
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
      </div>
    </section>
  );
};

export default RecentInvoices;
