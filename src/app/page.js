"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(desc);
    settitle("");
    setdesc("");
  };
  return (
    <>
      <h1 className="bg-black text-white text-center text-3xl font-bold py-2">
        Krishna Yadav's To-do list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="font-semibold border-2 border-zinc-600 my-4 mx-2 px-2  "
          placeholder="Enter the title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="font-semibold border-2 border-zinc-600 my-4 mx-2 px-2  "
          placeholder="Enter the description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="text-white bg-black rounded font-semibold border-2 border-zinc-600 px-2 mx-4">
          Add task
        </button>
      </form>
    </>
  );
};

export default page;
