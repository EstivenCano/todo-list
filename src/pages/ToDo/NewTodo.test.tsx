import type { FC } from "react";
import { ReactNode, useEffect } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewTodo from "./NewTodo";
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

test("NewTodo form must be visible when add todo button is clicked", () => {
  render(
    <Wrapper>
      <Options />
      <NewTodo />
    </Wrapper>
  );
  const addTodoButton = screen.getByText("Add todo");
  fireEvent.click(addTodoButton);
  expect(screen.getByText("New ToDo")).toBeInTheDocument();
});

test("When cancel button is clicked, NewTodo form must disapper", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();

    useEffect(() => {
      dispatch({ type: "OPEN_FORM" });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.openForm}`}</div>;
  };

  render(
    <Wrapper>
      <NewTodo />
      <MockComponent />
    </Wrapper>
  );
  const cancelButton = screen.getByText("Cancel");
  fireEvent.click(cancelButton);

  const openFormState = screen.getByTestId("custom-element");
  expect(openFormState.textContent).toBe("false");
});

test("When add button is clicked, TodoList must have lenght of one", () => {
  const MockComponent = () => {
    const { state } = useToDoContext();
    return <div data-testid='custom-element'>{`${state.todoList.length}`}</div>;
  };

  render(
    <Wrapper>
      <NewTodo />
      <MockComponent />
    </Wrapper>
  );
  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);

  const openFormState = screen.getByTestId("custom-element");
  expect(openFormState.textContent).toBe("1");
});
