import App from "@/components/App";
import { fireEvent, render, screen } from "@testing-library/react";

test("Render app", () => {
  render(<App />);
  expect(screen.getByText("Reserve a table")).not.toBeNull();
});

test("Render error if full name is not submited", () => {
  render(<App />);

  const confirmButton = screen.getByText("Confirm");
  confirmButton.click();

  fireEvent(
    confirmButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(screen.getByText("Full Name is required")).toBeVisible();
});

test("Render error if phone number is not submited", () => {
  render(<App />);

  const confirmButton = screen.getByText("Confirm");

  fireEvent.change(screen.getByTestId("fullname-input"), {
    target: { value: "23" },
  });

  fireEvent(
    confirmButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(screen.getByText("Phone number is required")).toBeVisible();
});
