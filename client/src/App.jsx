import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";

import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#E5F4F6] sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        </Link>
        <Link
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          to="/create-post"
        >
          Create
        </Link>
      </header>
      {/* need to subtract 73px? */}
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
