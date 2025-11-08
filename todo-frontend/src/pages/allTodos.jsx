import { useEffect, useState } from "react";
import Todo from "../components/todo";

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
      <ul className="mt-6 flex flex-col gap-5">
        {allTodos && allTodos.map((todo) => (
          <Todo key={todo._id} _id={todo._id} title={todo.title} description={todo.description}/>
        ))}
      </ul>
    </section>
  );  
}
