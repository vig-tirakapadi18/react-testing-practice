import { findByRole, render, screen } from "@testing-library/react";
import FindBy from "./FindBy";

describe("FindBy", () => {
  test("should NOT render Start Learning button", async () => {
    render(<FindBy skills={["HTML", "CSS", "JS", "TS"]} />);
    // screen.debug();
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(startLearningBtn).toBeInTheDocument();
  });
});
