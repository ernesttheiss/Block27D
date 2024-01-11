import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App component", () => {
  test("displays the details of a featured puppy when clicked", () => {
    // Render the App component
    render(<App />);

    // Finding the puppy with name "Sir Waggington"
    const puppyName = screen.getByText("Sir Waggington");

    // Simulating a click on the puppy
    fireEvent.click(puppyName);

    // Asserting that the featured puppy's name is displayed
    const featuredPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyName).toBeInTheDocument();

    // Asserting that the featured puppy's age is displayed
    const featuredPuppyAge = screen.getByText(/Age: \d+/);
    expect(featuredPuppyAge).toBeInTheDocument();

    // Asserting that the featured puppy's email is displayed
    const featuredPuppyEmail = screen.getByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeInTheDocument();
  });

  test("does not display the details of a featured puppy initially", () => {
    // Render the App component
    render(<App />);

    // Asserting that the featured puppy's name is not displayed
    expect(screen.queryByRole("heading", { name: /Sir Waggington/i })).toBeNull();

    // Asserting that the featured puppy's age is not displayed
    expect(screen.queryByText(/Age: \d+/)).toBeNull();

    // Asserting that the featured puppy's email is not displayed
    expect(screen.queryByText(/Email: \S+/)).toBeNull();
  });

  test("does not change the featured puppy when the same puppy is clicked twice", () => {
    // Render the App component
    render(<App />);

    // Find the puppy with name "Sir Waggington"
    const puppyName = screen.getByText("Sir Waggington");

    // Simulate a click on the puppy
    fireEvent.click(puppyName);

    // Asserting that the initial featured puppy's name is displayed
    const initialFeaturedPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(initialFeaturedPuppyName).toBeInTheDocument();

    // Simulating another click on the same puppy
    fireEvent.click(puppyName);

    // Asserting that the featured puppy's name is still displayed and is the same as the initial featured puppy
    const updatedFeaturedPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(updatedFeaturedPuppyName).toBeInTheDocument();
    expect(updatedFeaturedPuppyName).toBe(initialFeaturedPuppyName);
  });

  test("displays the details of a different featured puppy when clicked", () => {
    // Render the App component
    render(<App />);

    // Find the puppy with name "Miss Furbulous"
    const puppyName = screen.getByText("Miss Furbulous");

    // Simulating a click on the puppy
    fireEvent.click(puppyName);

    // Asserting that the featured puppy's name is displayed
    const featuredPuppyName = screen.getByRole("heading", {
      name: /Miss Furbulous/i,
    });
    expect(featuredPuppyName).toBeInTheDocument();

    // Asserting that the featured puppy's age is displayed
    const featuredPuppyAge = screen.getByText(/Age: \d+/);
    expect(featuredPuppyAge).toBeInTheDocument();

    // Asserting that the featured puppy's email is displayed
    const featuredPuppyEmail = screen.getByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeInTheDocument();
  });
});
