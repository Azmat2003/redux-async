import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counterSlice.js";

function Btns() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <button
        onClick={() => dispatch(increment())}
        className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700 transition"
      >
        INC
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700 transition"
      >
        DEC
      </button>

      <button
        onClick={() => dispatch(reset())}
        className="rounded-lg bg-gray-600 px-6 py-2 font-semibold text-white hover:bg-gray-700 transition"
      >
        RESET
      </button>
    </div>
  );
}

export default Btns;