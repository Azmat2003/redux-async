import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {set} from './features/counterSlice.js'
function CounterForm() {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Number:", Number(number));
    dispatch(set(Number(number)));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-4"
    >
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value.trim())}
        placeholder="Enter a number"
        required
        className="w-48 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Set
      </button>
    </form>
  );
}

export default CounterForm;