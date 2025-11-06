import { useRef, useState } from "react";

export default function CreateTodo() {
    const [loading, setLoading] = useState(false);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    const description = descriptionRef.current.value;
    try {
        setLoading(true);
      const response = await fetch("http://localhost:8080/api/todo/create-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      const data = await response.json();
      titleRef.current.value = '';
      descriptionRef.current.value = '';
      alert(data.message)
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="w-full h-full p-25 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        action="/create-todo"
        method="post"
        className="w-[650px] rounded-md p-8 h-[500px] border-2 rouonded-md flex flex-col items-center justify-center gap-6"
      >
        <h1 className="text-2xl font-bold">Add a New ToDo</h1>
        <div className="flex flex-col gap-2 justify-start w-full">
          <label className="text-blue-800 font-bold" htmlFor="title">
            Title
          </label>
          <input
            ref={titleRef}
            type="text"
            name="title"
            placeholder="Enter title"
            className="pl-5 py-2 w-full border-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-full">
          <label htmlFor="description" className="text-blue-800 font-bold">
            Description
          </label>
          <input
            ref={descriptionRef}
            type="text"
            name="description"
            placeholder="Enter description"
            className="pl-5 py-5 w-full border-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="text-white px-8 py-4 rounded-md font-bold cursor-pointer bg-blue-800"
        >
          {loading ? 'Creating...' : 'Add ToDo'}
        </button>
      </form>
    </section>
  );
}
