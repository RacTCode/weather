import React, { useState } from "react";

const Header = (props) => {
  const handleSubmit = (e) => {
    if (search.trim()) {
      e.preventDefault();
      props.fetch(search);
      setSearch("");
    } else {
      alert("Enter valid location");
    }
  };

  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-900 p-8 text-white flex justify-between items-center flex-row-reverse">
      <div className="rounded-full bg-white">
      <form onSubmit={handleSubmit} className="flex m-2">
        <input
          type="text"
          value={search}
          placeholder="Enter Location"
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full p-2 text-black outline-none w-[40ch]"
        ></input>
        <button><img src="right-arrow.png" className="h-6 px-2"></img></button>
      </form>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault()
          props.getLocation();
        }}
        className="rounded-full px-5 py-4 text-white font-bold text-xl bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700"
      >
        Current Location
      </button>
      <span className="font-black text-2xl ">SkyWatch</span>
    </div>
  );
};

export default Header;
