import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("should render a default initial value", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should render provided initial value", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });

    expect(result.current.count).toBe(10);
  });
});
