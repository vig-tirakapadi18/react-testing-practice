import { render, screen } from "@testing-library/react";
import GetAllByRole from "./GetAllByRole";

describe("GetAllByRole", () => {
  const skills = ["HTML", "CSS", "JS", "TS"];

  test("should have a list", () => {
    render(<GetAllByRole skills={skills} />);
    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();
  });

  test("should render all skills correctly", () => {
    render(<GetAllByRole skills={skills} />);
    const listSkillEls = screen.getAllByRole("listitem");
    expect(listSkillEls).toHaveLength(skills.length);
  });
});
