import { describe, expect, test } from "vitest";

import {
  getYearFromInvoice,
  getMonthFromInvoice,
  formatPrice,
  currentYearRevenue,
} from "./utils.ts";

describe("Testing the getYearFromInvoice with valid data", () => {
  test("Test with 2025-06-06", () => {
    expect(getYearFromInvoice({ date: "2025-06-06" })).toBe(2025);
  });
});

describe("Invalid year handling", () => {
  test("Function throw error when the number has less than 4 digits", () => {
    expect(() => getYearFromInvoice({ date: "10-06-06" })).toThrow(
      "Invalid Year",
    );
  });

  test("Function throw error when the number has more than 4 digits", () => {
    expect(() => getYearFromInvoice({ date: "20055-06-06" })).toThrow(
      "Invalid Year",
    );
  });

  test("Function throw error when the given date has a non numeric year", () => {
    expect(() => getYearFromInvoice({ date: "aaaa-05-06" })).toThrow(
      "Invalid Year",
    );
  });
});

describe("Testing the getMonthFromInvoice with valid data", () => {
  test("Test with 2025-06-06", () => {
    expect(getMonthFromInvoice({ date: "2025-06-06" })).toBe(6);
  });

  test("Test with 2025-01-06", () => {
    expect(getMonthFromInvoice({ date: "2025-01-06" })).toBe(1);
  });

  test("Test with 2025-12-06", () => {
    expect(getMonthFromInvoice({ date: "2025-12-06" })).toBe(12);
  });
});

describe("Invalid month handling", () => {
  test.for([
    ["has less than 2 digits", { date: "2025-6-06" }, "Invalid Month format"],
    ["has more than 2 digits", { date: "2025-006-06" }, "Invalid Month format"],
    ["is not numeric", { date: "2025-aa-06" }, "Invalid Month format"],
    ["is less than 1", { date: "2025-00-06" }, "Invalid Month range"],
    ["is greater than 12", { date: "2025-13-06" }, "Invalid Month range"],
  ])(
    "Function throw error when the given month %s",
    ([_text, date, expected]) => {
      expect(() => getMonthFromInvoice(date as { date: string })).toThrow(
        expected as string,
      );
    },
  );
});

describe("formatPrice ensures 3‑decimal TND output", () => {
  test("Test with 0", () => {
    expect(formatPrice(0)).toBe("0,000 TND");
  });

  test("Test with 10", () => {
    expect(formatPrice(10)).toBe("10,000 TND");
  });

  test("Test with 10.1", () => {
    expect(formatPrice(10.1)).toBe("10,100 TND");
  });

  test("Test with 10.1234", () => {
    expect(formatPrice(10.1234)).toBe("10,123 TND");
  });

  test("Test with 100000123.1234", () => {
    expect(formatPrice(100000123.1234)).toBe("100 000 123,123 TND");
  });

  test("Test with negative number must give an error", () => {
    expect(() => formatPrice(-10)).toThrow("Price cannot be negative");
  });
});

describe("currentYearRevenue calculate the total income in the current year", () => {
  test("Handling an empty invoice list", () => {
    expect(currentYearRevenue([])).toBe(0);
  });

  test("Handling an invoice with 0 total", () => {
    expect(currentYearRevenue([{ date: "2026-03-29", total: 0 }])).toBe(0);
  });

  test("Handling a list of invoices with 0 total", () => {
    const invoices = [
      { date: "2026-03-29", total: 0 },
      { date: "2026-04-29", total: 0 },
    ];
    expect(currentYearRevenue(invoices)).toBe(0);
  });

  test("Ignores invoices from other years", () => {
    const invoices = [
      { date: "2025-03-29", total: 0 },
      { date: "2024-04-29", total: 0 },
    ];
    expect(currentYearRevenue(invoices)).toBe(0);
  });

  test("Sums invoices only from current year", () => {
    const invoices = [
      { date: "2026-03-29", total: 1000 },
      { date: "2026-04-29", total: 999 },
    ];
    expect(currentYearRevenue(invoices)).toBe(1000 + 999);
  });

  test("Sums invoices with mixed years", () => {
    const invoices = [
      { date: "2026-03-29", total: 1000 },
      { date: "2026-03-29", total: 1000 },
      { date: "2025-04-29", total: 999 },
    ];
    expect(currentYearRevenue(invoices)).toBe(1000 + 1000);
  });

  test("Handles very large totals", () => {
    const invoices = [
      { date: "2026-03-29", total: 1_000_000 },
      { date: "2026-04-29", total: 2_000_000 },
    ];
    expect(currentYearRevenue(invoices)).toBe(3_000_000);
  });
});
