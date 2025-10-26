import { useState } from "react";
import { Link } from "react-router";
import { formatPrice } from "./utils";

const RecentInvoices = () => {
  const [invoices] = useState(() => {
    const stored = localStorage.getItem("invoices");
    return stored ? JSON.parse(stored) : [];
  });
  const invoicesList = invoices
    .slice(-3)
    .reverse()
    .map((invoice: any, i: number) => {
      return (
        <div
          className="bg-[#0B132B] text-xs sm:text-lg rounded-md p-2 cursor-pointer hover:bg-[#060B1A] transition-all duration-500"
          key={`${invoice.clientName}${i}`}
        >
          <Link to={`/invoices/${invoice.invoiceNumber}`}>
            <header>
              <ul className="flex flex-row justify-between sm:py-2 sm:px-5 px-2">
                <li className="text-[#8EC78C]">
                  00{invoices.indexOf(invoice) + 1}
                </li>
                <li className="text-white">{invoice.clientName}</li>
                <li className="text-white">{invoice.address}</li>
                <li className="text-white">{invoice.date}</li>
              </ul>
            </header>
            <hr className="text-[#8EC78C]/50 mx-10 my-2" />
            <main className="px-4">
              <section>
                <ul className="text-white text-center text-md my-2">
                  <li>{invoice.productName}</li>
                </ul>
              </section>
              <p className="text-md text-right text-white">
                {formatPrice(invoice.total)}
              </p>
            </main>
          </Link>
        </div>
      );
    });
  return (
    <section>
      <h2 className="text-white ml-5 text-2xl">Recent Invoices:</h2>
      <div className="bg-[#1C2541] rounded-2xl mx-3 p-8 flex flex-col gap-5">
        {invoicesList}
      </div>
    </section>
  );
};

export default RecentInvoices;
