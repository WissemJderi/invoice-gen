import { describe, expect, test } from "vitest";

import { getYearFromInvoice, getMonthFromInvoice } from "./utils.ts";

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
  test("Function throw error when the number has less than 2 digits", () => {
    expect(() => getMonthFromInvoice({ date: "10-6-06" })).toThrow(
      "Invalid Month format",
    );
  });

  test("Function throw error when the number has more than 2 digits", () => {
    expect(() => getMonthFromInvoice({ date: "2025-125-06" })).toThrow(
      "Invalid Month format",
    );
  });

  test("Function throw error when the given date has a non numeric year", () => {
    expect(() => getMonthFromInvoice({ date: "2025-aa-06" })).toThrow(
      "Invalid Month format",
    );
  });

  test("Function throw error when the given date is less than 1", () => {
    expect(() => getMonthFromInvoice({ date: "2025-00-06" })).toThrow(
      "Invalid Month range",
    );
  });

  test("Function throw error when the given date is less greater than 12", () => {
    expect(() => getMonthFromInvoice({ date: "2025-13-06" })).toThrow(
      "Invalid Month range",
    );
  });
});
