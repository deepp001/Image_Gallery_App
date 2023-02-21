import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={onsubmit}>
        <div className="flex justify-center items-center border-b-2 py-2 border-teal-500">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 mr-3 leading-tight focus:outline-none"
            type="text"
            placeholder="SEARCH IMAGE TERM...."
          />
          <button
            className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 py-1 px-2 text-sm text-white rounded-sm border-4"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
