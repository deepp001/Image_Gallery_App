import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <h1 className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </h1>
        <ul>
          <li>
            <h1 className="inline-block">Views:</h1>
            {image.views}
          </li>
          <li>
            <h1 className="inline-block">Likes:</h1>
            {image.likes}
          </li>
          <li>
            <h1 className="inline-block">downloads:</h1>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-3 py-6 my-2 ">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-slate-300 rounded-full px-2 py-1 text-sm font-semibold text-slate-700 mx-2 my-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
