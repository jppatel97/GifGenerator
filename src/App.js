import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-black text-blue-700 bg-white rounded-lg px-8 py-4 shadow-lg mb-12">
        Random and Tag-Based GIF Generator
      </h1>
      <div className="w-full flex flex-col items-center gap-12">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;