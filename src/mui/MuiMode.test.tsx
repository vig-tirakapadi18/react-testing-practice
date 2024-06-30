import { render, screen } from "@testing-library/react";
import { MuiMode } from "./MuiMode";
import { AppProviders } from "../providers/AppProviders";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    const hh = render(<MuiMode />, { wrapper: AppProviders });
    console.log(hh);
    const themeTextEl = screen.getByRole("asdfg");
    expect(themeTextEl).toHaveTextContent("dark mode");
  });
});
