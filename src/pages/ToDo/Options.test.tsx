import type { FC } from "react";
import { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Options from "./Options";
import { ToDoProvider } from "../../store/ToDoContext";

const Wrapper: FC<ReactNode> = ({ children }) => (
  <ToDoProvider>
    <Router>
      <Routes>
        <Route index element={children} />
        <Route path='/' element={<div>Home page</div>} />
      </Routes>
    </Router>
  </ToDoProvider>
);

test("When history mode is active, button must change", () => {
  render(
    <Wrapper>
      <Options />
    </Wrapper>
  );
  const historyModeButton = screen.getByText("Todo history");
  fireEvent.click(historyModeButton);
  expect(historyModeButton).toHaveTextContent("Actual Todos");
});

test("When click event is dispatch on Go home button, actual route should be /", () => {
  render(
    <Wrapper>
      <Options />
    </Wrapper>
  );
  const goHomeButton = screen.getByText("Go home");
  fireEvent.click(goHomeButton);
  //Get actual route of the window
  const actualRoute = window.location.pathname;
  expect(actualRoute).toBe("/");
});
