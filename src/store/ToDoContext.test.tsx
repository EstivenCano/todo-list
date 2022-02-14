import type { FC } from "react";
import { ReactNode, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToDoProvider } from "../store/ToDoContext";
import { useToDoContext } from "../store/ToDoContext";

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

test("When setEditing is dispatch, editing must be true", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();

    useEffect(() => {
      dispatch({ type: "SET_EDITING", payload: true });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.editing}`}</div>;
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const editingState = screen.getByTestId("custom-element");
  expect(editingState.textContent).toBe("true");
});

test("When addTodo is dispatch, todoList lenght must be equal to 1", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "ADD_TODO", payload: mockTodo });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.todoList.length}`}</div>;
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const todoListState = screen.getByTestId("custom-element");
  expect(todoListState.textContent).toBe("1");
});

test("When removeTodo is dispatch, todoList lenght must be equal to 0", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "ADD_TODO", payload: mockTodo });
      dispatch({ type: "REMOVE_TODO", payload: mockTodo });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.todoList.length}`}</div>;
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const todoListState = screen.getByTestId("custom-element");
  expect(todoListState.textContent).toBe("0");
});

test("When toggleTodo is dispatch, complete attribute in todoList item must be true", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "ADD_TODO", payload: mockTodo });
      dispatch({ type: "TOGGLE_TODO", payload: mockTodo });
    }, [dispatch]);

    return (
      <>
        {state.todoList.length > 0 && (
          <div data-testid='custom-element'>{`${state.todoList[0].completed}`}</div>
        )}
      </>
    );
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const todoListState = screen.getByTestId("custom-element");
  expect(todoListState.textContent).toBe("true");
});

test("When updateTodo is dispatch, todoList item must be updted", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "ADD_TODO", payload: mockTodo });
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          ...mockTodo,
          title: "Test2",
        },
      });
    }, [dispatch]);

    return (
      <>
        {state.todoList.length > 0 && (
          <div data-testid='custom-element'>{`${state.todoList[0].title}`}</div>
        )}
      </>
    );
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const todoListState = screen.getByTestId("custom-element");
  expect(todoListState.textContent).toBe("Test2");
});

test("When setTodoToUpdate is dispatch, state todoToUpdate must be the todo selected", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "SET_TODO_TO_UPDATE", payload: mockTodo });
    }, [dispatch]);

    return (
      <>
        {state.todoToUpdate && (
          <div data-testid='custom-element'>{`${state.todoToUpdate.title}`}</div>
        )}
      </>
    );
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const todoListState = screen.getByTestId("custom-element");
  expect(todoListState.textContent).toBe("Test");
});

test("When openForm is dispatch, stateOpenForm must be true", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "OPEN_FORM" });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.openForm}`}</div>;
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const openFormState = screen.getByTestId("custom-element");
  expect(openFormState.textContent).toBe("true");
});

test("When closeForm is dispatch, stateOpenForm must be false", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "OPEN_FORM" });
      dispatch({ type: "CLOSE_FORM" });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.openForm}`}</div>;
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const openFormState = screen.getByTestId("custom-element");
  expect(openFormState.textContent).toBe("false");
});

test("When activeHistoryMode is dispatch, historyMode must be true", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "ACTIVE_HISTORY_MODE" });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.historyMode}`}</div>;
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const historyModeState = screen.getByTestId("custom-element");
  expect(historyModeState.textContent).toBe("true");
});

test("When deactiveHistoryMode is dispatch, historyMode must be false", () => {
  const MockComponent = () => {
    const { state, dispatch } = useToDoContext();
    useEffect(() => {
      dispatch({ type: "ACTIVE_HISTORY_MODE" });
      dispatch({ type: "DEACTIVE_HISTORY_MODE" });
    }, [dispatch]);

    return <div data-testid='custom-element'>{`${state.historyMode}`}</div>;
  };
  render(
    <Wrapper>
      <MockComponent />
    </Wrapper>
  );
  const historyModeState = screen.getByTestId("custom-element");
  expect(historyModeState.textContent).toBe("false");
});
