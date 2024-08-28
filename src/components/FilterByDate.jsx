import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "../store/TodoSlice";

const FilterByDate = () => {
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch(setSelectedDate(selectedDate));
  };

  return (
    <div className="text-center">
      <input
        className="px-3 py-1 rounded-xl bg-[#ECDFCC] text-[#697565] font-semibold text-md"
        type="date"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default FilterByDate;
