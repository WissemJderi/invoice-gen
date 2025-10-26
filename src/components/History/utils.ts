export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
].reverse();

export function getMonth(date: string): number {
  const month: number = Number(date.split("-")[1]);
  return month - 1;
}

export function sortInvoices(invoices: any[]): any[][] {
  const invoicesByMonths: any[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  invoices.forEach((invoice: any) => {
    invoicesByMonths[getMonth(invoice.date)].push(invoice);
  });
  return invoicesByMonths.reverse();
}
