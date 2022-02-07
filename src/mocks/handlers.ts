import { rest } from "msw";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    //Get all todos from localStorage
    const todos = localStorage.getItem("todoList");
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        todos: todos ? JSON.parse(todos) : [],
      })
    );
  }),
  rest.post("/todos", (req, res, ctx) => {
    //Save todo to localStorage
    const todo = req.body;
    const todos = localStorage.getItem("todoList");
    const newTodos = todos ? [...JSON.parse(todos), todo] : [todo];
    localStorage.setItem("todoList", JSON.stringify(newTodos));
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        message: "Successfully added todo",
      })
    );
  }),
];
