import { describe, expect, test } from "vitest";
import { greeting } from "./greeting.ts";

test("function show good morning", () => {
  expect(greeting(6)).toBe("Good Morning");
  expect(greeting(5)).toBe("Good Morning");
});

test("function show good afternoon", () => {
  expect(greeting(13)).toBe("Good Afternoon");
  expect(greeting(12)).toBe("Good Afternoon");
});

test("function show good evening", () => {
  expect(greeting(18)).toBe("Good Evening");
});

test("function show good night", () => {
  expect(greeting(23)).toBe("Good Night");
});

describe("invalid hour handling", () => {
  test("function throw error when the number is greater than 24", () => {
    expect(() => greeting(100)).toThrow("Invalid Hour");
  });

  test("function throw error when the number is 0", () => {
    expect(() => greeting(0)).toThrow("Invalid Hour");
  });

  test("function throw error when the number is 24", () => {
    expect(() => greeting(24)).toThrow("Invalid Hour");
  });

  test("function throw error when the number is less than 0", () => {
    expect(() => greeting(-10)).toThrow("Invalid Hour");
  });
});
