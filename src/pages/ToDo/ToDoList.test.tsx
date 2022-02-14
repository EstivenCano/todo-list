import { FC, useEffect } from "react";
import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDoList from "./ToDoList";
import { ToDoProvider } from "../../store/ToDoContext";
import { useToDoContext } from "../../store/ToDoContext";

const Wrapper: FC<ReactNode> = ({ children }) => (
  <ToDoProvider>
    <Router>
      <Routes>
        <Route index element={children} />
      </Routes>
    </Router>
  </ToDoProvider>
);

const mockTodo = {
  id: "1",
  title: "Test",
  completed: false,
  ondueDate: new Date(2022, 12, 31),
  createdDate: new Date(),
};

test("TodoList component must be rendered correctly", () => {
  render(
    <Wrapper>
      <ToDoList />
    </Wrapper>
  );
  const todoList = screen.getByLabelText("ToDo List");
  expect(todoList).toBeInTheDocument();
});

test("When todo list have length greater than 0, must be display todo item", () => {
  const MockComponent = () => {
    const { dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "ADD_TODO", payload: mockTodo });
    }, [dispatch]);

    return <div data-testid='custom-element'></div>;
  };

  render(
    <Wrapper>
      <ToDoList />
      <MockComponent />
    </Wrapper>
  );
  const todoItem = screen.getByLabelText("Todo item");
  expect(todoItem).toBeInTheDocument();
});

test("When todo list have length greater than 0, must be display custom text", () => {
  render(
    <Wrapper>
      <ToDoList />
    </Wrapper>
  );
  const customText = screen.getByText("No ToDo's yet");
  expect(customText.textContent).toBe("No ToDo's yet");
});
