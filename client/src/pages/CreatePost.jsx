import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const generateImage = async () => {};

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {};
  const navigate = useNavigate();

  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create through ta collection of imaginative and visually stunning
          image generated by the DALL-E AI and share them with the community.
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            label="Your name"
            name="name"
            type="text"
            value={form.name}
            placeholder="Enter your name"
            handleChange={handleChange}
          />
          <FormField
            label="Prompt"
            name="prompt"
            type="text"
            value={form.prompt}
            placeholder="Prompt"
            handleChange={handleChange}
            isSurprise
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="Preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
          <div className="mt-5 flex gap-5 ">
            <button
              className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              type="button"
              onClick={generateImage}
            >
              {generatingImg ? "Generate..." : "Generate"}
            </button>
          </div>

          <div className="mt-10">
            <p className="mt-2 text-[#666e75] text-[14px]">
              Once you have created the image you want, you can share it with
              others in the community
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
