import { useEffect, useState } from "react";
import { currentMonthRevenue, currentYearRevenue, formatPrice } from "./utils";

const Stats = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("invoices");
    if (stored) {
      setInvoices(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-white ml-5 text-2xl">Stats:</h2>

      <div className="bg-[#1C2541] rounded-2xl mx-3 p-8 flex flex-col gap-2 sm:text-lg text-sm">
        <div id="Invoices Counter">
          <div className="flex flex-row justify-between text-white">
            <p>Total invoices: </p>
            <p>{invoices.length}</p>
          </div>
        </div>
        <hr className="text-[#8EC78C]/50 mx-10 my-2" />
        <div id="Monthly revenue">
          <div className="flex flex-row justify-between text-white">
            <p>This month</p>
            <p>{formatPrice(currentMonthRevenue(invoices))}</p>
          </div>
          <div className="flex flex-row justify-between text-white">
            <p>This year</p>
            <p>{formatPrice(currentYearRevenue(invoices))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
