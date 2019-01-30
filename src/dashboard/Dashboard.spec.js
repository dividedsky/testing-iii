// Test away
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should show the controls and display", () => {
    render(<Dashboard />);
    const panel = document.querySelector(".controls");
    const display = document.querySelector(".display");
    expect(panel).toBeInTheDocument();
    expect(display).toBeInTheDocument();
  });
});
