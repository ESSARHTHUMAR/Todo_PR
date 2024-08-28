import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/TodoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //Handles the Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Only dispatch when there is something in Input field
    if (input.trim()) {
      //Date & Time of Todo Creation
      const createdAt = new Date().toISOString();
      dispatch(addTodo({ text: input, createdAt }));
      setInput("");
    }
  };

  return (
    <div className="m-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex gap-3">
            <label className="text-[#ECDFCC] text-lg font-bold">
              Enter the task:{" "}
            </label>
            <input
              className="border-solid rounded-md bg-[#ECDFCC] px-2 py-1 border-2 border-gray-500"
              type="text"
              value={input}
              onChange={handleInput}
              placeholder="Type here..."
            />
          </div>
          <button className="w-[200px] bg-[#697565] text-white px-4 py-2 rounded-lg ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
