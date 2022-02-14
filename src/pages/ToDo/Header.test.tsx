import type { FC } from "react";
import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import { ToDoProvider } from "../../store/ToDoContext";

const Wrapper: FC<ReactNode> = ({ children }) => (
  <ToDoProvider>
    <Router>
      <Routes>
        <Route index element={children} />
      </Routes>
    </Router>
  </ToDoProvider>
);

test("Header title must be displayed correctly", () => {
  render(
    <Wrapper>
      <Header />
    </Wrapper>
  );
  const header = screen.getByText("TODO List project");
  expect(header).toBeInTheDocument();
});
