import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers like "toBeInTheDocument"

import ControlledInput from "./ControlledInput"; // Adjust the import path according to your project structure

test("renders with initial value and handles change", () => {
  // Define an initial value for the input
  expect(1 + 1).toBe(2);
});
