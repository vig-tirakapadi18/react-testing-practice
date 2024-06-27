import { render, screen } from "@testing-library/react";
import QueryBy from "./QueryBy";

describe("QueryBy", () => {
  const skills = ["HTML", "CSS", "JS", "TS"];

  test("should render Login button", () => {
    render(<QueryBy skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  // getBy... & getAllBy... will throw an error
  // test("should render Start Learning button", () => {
  //   render(<QueryBy skills={skills} />);
  //   const startLearningButton = screen.getByRole("button", {
  //     name: "Start Learning",
  //   });
  //   expect(startLearningButton).not.toBeInTheDocument();
  // });

  // queryBy... && queryAllBy... will NOT throw an error
  test("should not render Start Learning button", () => {
    render(<QueryBy skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });
});
