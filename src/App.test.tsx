import { render, screen } from "@testing-library/react";
import App from "./App";

test("App must render successfully", () => {
  render(<App />);
  const homeElement = screen.getByText("TODO List project");
  expect(homeElement).toBeInTheDocument();
});
