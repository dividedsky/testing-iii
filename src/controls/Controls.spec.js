// Test away!
import React from "react";
import { cleanup, render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("displays button to open gate when closed", () => {
    const { getByText } = render(<Controls closed={true} />);
    getByText(/open gate/i);
  });
  it("displays button to close gate when open", () => {
    const { getByText } = render(<Controls closed={false} />);
    getByText(/close gate/i);
  });
  it("displays a button to lock gate when unlocked", () => {
    const { getByText } = render(<Controls locked={false} />);
    getByText(/lock gate/i);
  });
  it("displays a button to unlock gate when locked", () => {
    const { getByText } = render(<Controls locked={true} />);
    getByText(/unlock gate/i);
  });
  it("lock button should be disabled if door is open", () => {
    const { getByText } = render(<Controls closed={false} />);
    const lockButton = getByText(/lock gate/i);
    expect(lockButton).toBeDisabled();
  });
  it("lock button should not be disabled if door is closed", () => {
    const { getByText } = render(<Controls closed={true} />);
    const lockButton = getByText(/lock gate/i);
    expect(lockButton).not.toBeDisabled();
  });
});
