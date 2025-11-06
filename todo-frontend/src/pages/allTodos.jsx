import { useEffect, useState } from "react";

export default function AllTodos() {
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    const getToDos = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/todo/all-todos"
        );
        const data = await response.json();
        setAllTodos(data.todos);
      } catch (err) {
        console.log(err);
      }
    };
    getToDos();
  }, []);

  return (
    <section className="p-25 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">All ToDo's</h1>
      <ul>
        {allTodos && allTodos.map((todo) => (
          <li key={todo._id}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
