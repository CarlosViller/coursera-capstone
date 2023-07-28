import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like "toBeInTheDocument"

import ControlledInput from './ControlledInput'; // Adjust the import path according to your project structure

describe('ControlledInput', () => {
  test('renders with initial value and handles change', () => {
    // Define an initial value for the input
    const initialValue = 'Hello, World!';

    // Create a mock function for handleChange
    const handleChange = jest.fn();

    // Render the ControlledInput with the initial value and handleChange function
    const { getByTestId } = render(
      <ControlledInput value={initialValue} handleChange={handleChange} />
    );

    // Get the input element by test id (you can use data-testid attribute in the component)
    const inputElement = getByTestId('controlled-input');

    // Check if the input element has the correct initial value
    expect(inputElement).toHaveValue(initialValue);

    // Define a new value to be typed into the input
    const newValue = 'New Value';

    // Simulate typing the new value into the input
    fireEvent.change(inputElement, { target: { value: newValue } });

    // Check if the handleChange function has been called with the new value
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(newValue);

    // Check if the input element now has the new value
    expect(inputElement).toHaveValue(newValue);
  });
});
