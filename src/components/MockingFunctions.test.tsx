import { render, screen } from "@testing-library/react";
import MockingFunctions from "./MockingFunctions";
import userEvent from "@testing-library/user-event";

describe("MockingFunctions", () => {
  test("should render the heading", () => {
    render(<MockingFunctions count={0} />);
    const headingEl = screen.getByText("Counter");
    expect(headingEl).toBeInTheDocument();
  });

  test("handlers should work correctly", async () => {
    userEvent.setup();

    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <MockingFunctions
        count={0}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
