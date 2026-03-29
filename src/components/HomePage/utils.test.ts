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
