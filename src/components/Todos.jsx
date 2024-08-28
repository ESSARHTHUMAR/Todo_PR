import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateStatus } from "../Store/TodoSlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useState } from "react";

const Todos = () => {

  const [isHover, setIsHover] = useState(false);

  const handleMove = () => {
    setIsHover(true)
  }

  const todos = useSelector((state) => state.todo.todos);
  const selectedDate = useSelector((state) => state.todo.selectedDate);
  const dispatch = useDispatch();

  //Filter the list using selected date
  const filteredTodos = selectedDate
    ? todos.filter((todo) => todo.createdAt.startsWith(selectedDate))
    : todos;

  return (
    <div className="grid xl:grid-cols-4 gap-2 m-6 justify-items-center lg:grid-cols-3 md:grid-cols-2 z-1">
      {filteredTodos.map((item) => (
        <div
          onMouseMove={handleMove}
          key={item.id}
          className="z-1 drop-shadow-xl relative flex flex-col items-start justify-start bg-[#3C3D37] m-4 h-[150px] rounded-lg w-[300px]"
        >
          <h1 className="text-lg font-semibold mx-2 mb-2 mt-5 text-[#ECDFCC] ">
            {item.text}
          </h1>
          <div className="absolute text-sm bottom-0 right-0 m-2 text-cyan-100 italic">
            {item.status}
          </div>
          <p className="absolute text-xs flex items-center justify-center bottom-0 left-0 m-2 text-gray-300">
            {new Date(item.createdAt).toLocaleString()}
          </p>
          <select
            className="absolute top-0 right-0 rounded-md bg-[#697565] text-white text-xs"
            value={item.status}
            onChange={(e) =>
              dispatch(updateStatus({ id: item.id, newStatus: e.target.value }))
            }
          >
            <option value="Pending">Pending</option>
            <option value="Todo">Todo</option>
            <option value="Completed">Completed</option>
          </select>
          <MdOutlineDeleteForever
            className={`w-6 h-6 text-red-500 cursor-pointer absolute right-[-10%] top-[40%] opacity-0 ${isHover ? "opacity-100 transition-opacity duration-300" : ""} `}
            onClick={() => dispatch(removeTodo(item.id))}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;
