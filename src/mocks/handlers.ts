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
    //Get all todos from re.body
    const todos = req.body;
    //Save the array to localStorage
    localStorage.setItem("todoList", JSON.stringify(todos));
    return res(
      ctx.status(200),
      ctx.json({
        message: "Successfully added todo",
      })
    );
  }),
];
