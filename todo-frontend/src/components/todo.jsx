export default function Todo({ title, description }) {
  return (
    <li className="w-full cursor-pointer py-3 px-2 rounded-md flex flex-row items-center gap-7 justify-between border-2 border-gray-500 ">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex gap-5">
        <a href="" className="font-bold text-white bg-blue-600 w-[100px] text-center p-2  rounded-md">Edit</a>
        <a href="" className="font-bold text-white bg-red-600 w-[100px] text-center p-2  rounded-md">Delete</a>
      </div>
    </li>
  );
}
