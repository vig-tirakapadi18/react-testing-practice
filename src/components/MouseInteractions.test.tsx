import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import MouseInteractions from "./MouseInteractions";

describe("MouseInteraction", () => {
  test("should render h1 element", () => {
    render(<MouseInteractions />);
    const h1El = screen.getByRole("heading", { level: 1 });
    expect(h1El).toBeInTheDocument();
  });

  test("should render a button to increment the count", () => {
    render(<MouseInteractions />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("should render 0 on initial render", () => {
    render(<MouseInteractions />);
    const countEl = screen.getByRole("heading", { level: 1 });
    expect(countEl).toHaveTextContent("0");
  });

  test("should increment the count by 1 when clicked", async () => {
    user.setup();

    render(<MouseInteractions />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });

    await user.click(incrementBtn);
    const countEl = screen.getByRole("heading", { level: 1 });
    expect(countEl).toHaveTextContent("1");
  });

  test("should increment the count by 2 when clicked", async () => {
    user.setup();

    render(<MouseInteractions />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });

    await user.dblClick(incrementBtn);

    const countEl = screen.getByRole("heading", { level: 1 });
    expect(countEl).toHaveTextContent("2");
  });

  test("should set the input value of 5 to count", async () => {
    user.setup();
    render(<MouseInteractions />);

    const inputEl = screen.getByRole("spinbutton");
    await user.type(inputEl, "5");
    // expect(inputEl).toHaveValue("5");

    const setBtn = screen.getByRole("button", { name: "Set" });
    await user.click(setBtn);

    const countEl = screen.getByRole("heading", { level: 1 });
    expect(countEl).toHaveTextContent("5");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<MouseInteractions />);
    const inputEl = screen.getByRole("spinbutton");
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const setBtn = screen.getByRole("button", { name: "Set" });

    await user.tab();
    expect(inputEl).toHaveFocus();

    await user.tab();
    expect(incrementBtn).toHaveFocus();

    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
