import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import UpvoteButton from "./UpvoteButton";

test("should render button", () => {
  render(
    <UpvoteButton key="123" isSelected={false} setIsSelected={() => {}} />
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test('should handle click events', () => {
  const setIsSelected = vi.fn();
  render(
    <UpvoteButton key="123" isSelected={false} setIsSelected={setIsSelected} />
  );
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(setIsSelected).toHaveBeenCalledTimes(1);
});