import React, { useState, useEffect } from "react";
import axios from "axios";

function Tag() {
  const API = "API_KEY";
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");

  async function fetchData(tag) {
    setLoading(true);

    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=${tag}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData(tag);
  }, []);

  function clickHandler() {
    fetchData(tag);
  }

  function clickText(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-full max-w-2xl bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-2xl p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-white underline underline-offset-8">
        A Tag GIF
      </h1>

      {loading ? (
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-red-700"
          role="status"
        ></div>
      ) : (
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md"
          src={gif}
          alt="Random GIF"
        />
      )}

      <input
        className="w-full max-w-md px-4 py-2 rounded-lg bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        placeholder="Enter Text"
        onChange={clickText}
      />

      <button
        className="w-full max-w-md px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
