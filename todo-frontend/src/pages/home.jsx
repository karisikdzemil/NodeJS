export default function Home() {
  return (
    <main className="m-auto w-[500px] mt-36 border-2 rounded-md p-12 flex items-center justify-center flex-col gap-6">
      <h1 className="text-2xl font-bold">ToDo App</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat
        ab mollitia neque, officiis pariatur incidunt in dolor sequi unde!
        Repellat rem animi laudantium? Consequuntur dolorem voluptates officia
        nobis quis.
      </p>
      <div className="flex gap-12">
      <a className="font-bold text-white bg-blue-600 w-[100px] text-center p-2  rounded-md" href="create-todo">Add ToDo</a>
      <a className="font-bold text-white bg-blue-600 w-[100px] p-2  rounded-md" href="all-todos">All ToDo's</a>
      </div>
    </main>
  );
}
