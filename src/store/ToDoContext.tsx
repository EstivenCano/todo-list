import type { ReactNode } from "react";
import { useReducer, createContext, useContext } from "react";

import { Todo } from "../models/todo";

type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: Todo }
  | { type: "OPEN_FORM" }
  | { type: "CLOSE_FORM" };
type DispatchProps = (action: Action) => void;
type State = { todoList: Todo[]; openForm: boolean };
type ToDoProviderProps = { children: ReactNode };
type ToDoContextProps = {
  state: State;
  dispatch: DispatchProps;
};

export const TodoContext = createContext<ToDoContextProps | undefined>(
  undefined
);

const ToDoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case "OPEN_FORM": {
      return { ...state, openForm: true };
    }
    case "CLOSE_FORM": {
      return { ...state, openForm: false };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const ToDoProvider = ({ children }: ToDoProviderProps) => {
  const [state, dispatch] = useReducer(ToDoReducer, {
    todoList: [],
    openForm: false,
  });
  const value = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useToDoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useToDoContext must be used within a ToDoProvider");
  }
  return context;
};

export { ToDoProvider, useToDoContext };
