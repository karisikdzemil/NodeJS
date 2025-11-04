import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AllTodos from "./pages/allTodos";
import CreateTodo from "./pages/createTodo";

export default function Outlet(){
    const router = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/all-todos", element: <AllTodos /> },
      { path: "/create-todo", element: <CreateTodo /> },
    ]);
    
    return <RouterProvider router={router}/>
}