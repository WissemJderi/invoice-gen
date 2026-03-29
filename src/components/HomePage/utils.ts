function currentMonth(): number {
  return new Date().getMonth() + 1;
}

// Get the month for the given date
export function getMonthFromInvoice(invoice: { date: string }): number {
  const month = invoice.date.split("-")[1];

  if (month.length !== 2 || isNaN(Number(month))) {
    throw new Error("Invalid Month format");
  }

  const monthAsANum = Number(month);
  if (monthAsANum < 1 || monthAsANum > 12) {
    throw new Error("Invalid Month range");
  }
  return monthAsANum;
}

function currentYear(): number {
  return new Date().getFullYear();
}

// Get the year for the given date
export function getYearFromInvoice(invoice: { date: string }): number {
  const year = invoice.date.split("-")[0];
  if (year.length !== 4 || isNaN(Number(year))) {
    throw new Error("Invalid Year");
  }
  return Number(year);
}

export function currentMonthRevenue(invoices: {}[]) {
  const month = currentMonth();
  let total = 0;
  invoices.forEach((invoice: any) => {
    const invoiceMonth = getMonthFromInvoice(invoice);
    if (invoiceMonth == month) {
      total += invoice.total;
    }
  });
  return total;
}

export function currentYearRevenue(invoices: {}[]) {
  const year = currentYear();
  let total = 0;
  invoices.forEach((invoice: any) => {
    const invoiceYear = getYearFromInvoice(invoice);
    if (invoiceYear == year) {
      total += invoice.total;
    }
  });
  return total;
}
export function formatPrice(price: number): string {
  return `${price.toLocaleString("fr-TN", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  })} TND`;
}
