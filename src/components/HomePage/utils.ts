function currentMonth(): number {
  return new Date().getMonth() + 1;
}

function getMonthFromInvoice(invoice: { date: string }): number {
  const month = invoice.date.split("-")[1];
  return Number(month);
}

function currentYear(): number {
  return new Date().getFullYear();
}

function getYearFromInvoice(invoice: { date: string }): number {
  const year = invoice.date.split("-")[0];
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
