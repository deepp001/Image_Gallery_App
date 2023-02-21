import React, { useCallback, useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import axiosInstance from "./components/axiosInstance";
import ImageSearch from "./components/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const loadImage = useCallback(async (search) => {
    const res = await axiosInstance.get(
      `https://pixabay.com/api/?key=33740542-f67ded09db380c4be9ac1fcf6&q=${search}&image_type=photo&pretty=true`
    );
    setImages(res.data.hits);
  }, []);
  useEffect(() => {
    loadImage(term);
    setIsLoading(false);
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={setTerm} />
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default App;
