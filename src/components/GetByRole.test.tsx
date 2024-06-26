import { render, screen } from "@testing-library/react";
import GetByRole from "./GetByRole";

describe("Application", () => {
  test("check if the textbox is present", () => {
    render(<GetByRole />);
    // const textbox = screen.getByTestId("textbox");
    // expect(textbox).toBeInTheDocument();

    const nameTextboxEl = screen.getByRole("textbox", { name: "Name:" });
    expect(nameTextboxEl).toBeInTheDocument();

    const bioTextBoxEl = screen.getByRole("textbox", { name: "Bio:" });
    expect(bioTextBoxEl).toBeInTheDocument();

    const dropdownEls = screen.getByRole("combobox");
    expect(dropdownEls).toBeInTheDocument();

    const termsCheckBoxEl = screen.getByRole("checkbox");
    expect(termsCheckBoxEl).toBeInTheDocument();

    const submitButtonEl = screen.getByRole("button");
    expect(submitButtonEl).toBeInTheDocument();

    // Heading Elements
    const headingEl = screen.getByRole("heading", {
      name: "Job application form",
    });
    expect(headingEl).toBeInTheDocument();

    const sectionHeadingEl = screen.getByRole("heading", {
      name: /section 1/i,
    });
    expect(sectionHeadingEl).toBeInTheDocument();
  });
});
