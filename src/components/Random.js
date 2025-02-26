import React, { useState, useEffect } from "react";
import axios from "axios";

function Random() {
  const API = "API_KEY";
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-full max-w-2xl bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-2xl p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-white underline underline-offset-8">A Random GIF</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-purple-600"></div>
        </div>
      ) : (
        <img className="w-full h-64 object-cover rounded-lg shadow-md" src={gif} alt="Random GIF" />
      )}

      <button
        className="w-full max-w-md px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        onClick={clickHandler}
      >
        Generate Random GIF
      </button>
    </div>
  );
}

export default Random;