"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  let renderTask = <h2>No Task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li>
          <div className="flex justify-between mb-5">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
        </li>
      );
    });
  }
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
        <button className="text-white bg-black rounded font-semibold border-2 border-zinc-600 px-2 mx-4 my-2">
          Add task
        </button>
      </form>
      <div className="p-8 bg-slate-200 mt-2">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
