import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import UpvoteList from "./UpvoteList";

test('should render buttons', () => {
  const setIsSelected = vi.fn();
  const setNumUpvotes = vi.fn();
  render(
    <UpvoteList
      key="123"
      id="123"
      isSelected={false}
      setIsSelected={setIsSelected}
      numUpvotes={0}
      setNumUpvotes={setNumUpvotes}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements.length).toBe(2);
});

test('should handle click events', () => {
  const setIsSelected = vi.fn();
  const setNumUpvotes = vi.fn();
  render(
    <UpvoteList
      key="123"
      id="123"
      isSelected={false}
      setIsSelected={setIsSelected}
      numUpvotes={0}
      setNumUpvotes={setNumUpvotes}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  fireEvent.click(buttonElements[0]);
  expect(setNumUpvotes).toHaveBeenCalledTimes(1);
  expect(setNumUpvotes).toHaveBeenCalledWith("123", 1);
  fireEvent.click(buttonElements[1]);
  expect(setNumUpvotes).toHaveBeenCalledTimes(2);
  expect(setNumUpvotes).toHaveBeenCalledWith("123", 0);
});

test('should set click elements to zero when the clear button is clicked multiple times', () => {
  const setIsSelected = vi.fn();
  const setNumUpvotes = vi.fn();
  render(
    <UpvoteList
      key="123"
      id="123"
      isSelected={false}
      setIsSelected={setIsSelected}
      numUpvotes={0}
      setNumUpvotes={setNumUpvotes}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  for (let i = 1; i < 4; i++) {
    fireEvent.click(buttonElements[1]);
    expect(setNumUpvotes).toHaveBeenCalledTimes(i);
    expect(setNumUpvotes).toHaveBeenCalledWith("123", 0);
  }
});
