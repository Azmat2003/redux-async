import React, { useState } from "react";
import { fetchData } from "./features/githubSlice.js";
import { useDispatch } from "react-redux";

function GithubForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("GitHub Username:", username);
    dispatch(fetchData(username));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 p-4"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value.trim())}
        placeholder="Enter GitHub username"
        required
        className="w-64 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default GithubForm;