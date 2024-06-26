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

    // using getByLabelElement(): gets element by label element
    const jobLocationEl = screen.getByLabelText("Job location");
    expect(jobLocationEl).toBeInTheDocument();

    // using getByPlaceholderText(): gets element by placeholder
    const bioPlaceholderEl = screen.getByPlaceholderText("Bio");
    expect(bioPlaceholderEl).toBeInTheDocument();

    // using getByText(): gets element by textContent
    const pEl = screen.getByText("All fields are mandatory");
    expect(pEl).toBeInTheDocument();

    // using getByDisplayValue(): gets element by "value" attribute
    const inputValueEl = screen.getByDisplayValue("Vig");
    expect(inputValueEl).toBeInTheDocument();

    // using getByAltText(): gets element by "alt" attribute
    const imageEl = screen.getByAltText("a person with a laptop");
    expect(imageEl).toBeInTheDocument();

    // using getByTitleEl(): gets element by "title" attribute
    const titleEl = screen.getByTitle("close");
    expect(titleEl).toBeInTheDocument();

    // using getByTestId(): gets element by "data-testid" attribute
    const testIdEl = screen.getByTestId("custom-element");
    expect(testIdEl).toBeInTheDocument();
  });
});
