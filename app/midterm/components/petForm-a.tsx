"use client";

import { useEffect, useState } from "react";

export default function PetForm() {

  const [title, setTitle] = useState("");
  const [selectedComp, setSelectedComp] = useState(false);

  const handleChange = (e) => setSelectedComp(e.target.value === 'true');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`In handleSubmit: ${title} | ${selectedComp}`);

    if(!title.trim()) return;
 
    setTitle("");
    setSelectedComp(false);
  };

  const handleCancel = (e) => { 
    setTitle("");
    setSelectedComp(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="m-3 p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">เพิ่มข้อมูลสัตว์เลี้ยง</h3>
        <div className="flex">
          <label className="mb-2 text-sm font-medium text-slate-700">ชื่อสัตว์เลี้ยง:</label>
          <input
            type="text"
            placeholder="Enter task..."
            className="w-9/12 ms-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <label className="mt-4 py-4 text-sm font-medium text-slate-700">ประเภทสัตว์เลี้ยง:</label>
          <label className="mt-4 px-4 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="completed" value='true' checked={selectedComp === true} onChange={handleChange} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">น้องหมา</span>
          </label>
          <label className="ms-2 mt-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="completed" value='false' checked={selectedComp === false} onChange={handleChange} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">น้องแมว</span>
          </label>
          <label className="ms-2 mt-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="completed" value='false' checked={selectedComp === false} onChange={handleChange} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">อื่น ๆ</span>
          </label>
        </div>
        <div className="flex">
          <label className="mb-2 text-sm font-medium text-slate-700">ข้อมูลผู้ติดต่อ:</label>
          <input
            type="text"
            placeholder="Enter task..."
            className="w-9/12 ms-8 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex mt-4 gap-2 justify-center">
          <button className="bg-blue-600 text-white px-4 py-1 rounded">
            บันทึก
          </button>
          <button className="bg-gray-600 text-white px-4 rounded" onClick={handleCancel}>
            เคลียร์
          </button>
        </div>
      </div>
    </form>

  );
}