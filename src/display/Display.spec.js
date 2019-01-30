// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

// arrange, act, assert
describe("<Display />", () => {
  it("renders locked/closed status of door", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    getByText(/locked/i);
    getByText(/closed/i);
    render(<Display closed={false} locked={false} />);
    getByText(/unlocked/i);
    getByText(/open/i);
    render(<Display closed={false} locked={true} />);
    getByText(/locked/i);
    getByText(/open/i);
  });
  it("has red-led class when door is closed, green-led class when open", () => {
    const { getByText } = render(<Display closed={true} />);
    const closed = getByText(/closed/i);
    expect(closed).toHaveClass("red-led");

    render(<Display closed={false} />);
    const open = getByText(/open/i);
    expect(open).toHaveClass("green-led");
  });
  it("has red-led class when door is locked, green-led class when unlocked", () => {
    const { getByText } = render(<Display locked={true} />);
    const locked = getByText(/locked/i);
    expect(locked).toHaveClass("red-led");

    render(<Display locked={false} />);
    const unlocked = getByText(/unlocked/i);
    expect(unlocked).toHaveClass("green-led");
  });
});
