import type { FC } from "react";
import { ReactNode, useEffect } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TodoItem from "./TodoItem";
import Options from "./Options";
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

test("Todo item must display content successfully", () => {
  render(
    <Wrapper>
      <TodoItem index={0} todo={mockTodo} />
    </Wrapper>
  );
  expect(screen.getByText("Test")).toBeInTheDocument();
});

test("When checkbox is selected, its state must be selected", () => {
  render(
    <Wrapper>
      <TodoItem index={0} todo={mockTodo} />
    </Wrapper>
  );
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test("When history mode is active, checkbox must be disabled", () => {
  render(
    <Wrapper>
      <Options />
      <TodoItem index={0} todo={mockTodo} />
    </Wrapper>
  );
  const historyModeButton = screen.getByText("Todo history");
  fireEvent.click(historyModeButton);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeDisabled();
});

test("When history mode is active, edit icon button must be disabled", () => {
  render(
    <Wrapper>
      <Options />
      <TodoItem index={0} todo={mockTodo} />
    </Wrapper>
  );
  const historyModeButton = screen.getByText("Todo history");
  fireEvent.click(historyModeButton);
  const edit = screen.getByLabelText("Edit ToDo");
  expect(edit).toBeDisabled();
});

test("When onClick event is dispatch on edit button, state editing must be true", () => {
  const MockComponent = () => {
    const { state } = useToDoContext();
    return <div data-testid='custom-element'>{`${state.editing}`}</div>;
  };

  render(
    <Wrapper>
      <TodoItem index={0} todo={mockTodo} />
      <MockComponent />
    </Wrapper>
  );
  const edit = screen.getByLabelText("Edit ToDo");
  fireEvent.click(edit);
  const editingState = screen.getByTestId("custom-element");
  expect(editingState.textContent).toBe("true");
});

test("When onClick event is dispatch on delete button, todoList must be empty", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();

    useEffect(() => {
      dispatch({ type: "ADD_TODO", payload: mockTodo });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.todoList.length}`}</div>;
  };

  render(
    <Wrapper>
      <TodoItem index={0} todo={mockTodo} />
      <MockComponent />
    </Wrapper>
  );
  const deleteButton = screen.getByLabelText("Delete ToDo");
  fireEvent.click(deleteButton);
  const todoListState = screen.getByTestId("custom-element");
  expect(todoListState.textContent).toBe("0");
});
