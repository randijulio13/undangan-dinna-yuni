import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import data from "../data";

export default function Password() {
  const [isOpen, setIsOpen] = useState(false);
  const passwordRef = useRef("");
  const handleSubmit = () => {
    let password = passwordRef.current.value;
    if (password == data.slug) {
      setIsOpen(true);
    }
  };

  useEffect(()=>{
    passwordRef.current.focus()
  },[])
  return (
    <div>
      {isOpen ? (
        <Outlet />
      ) : (
        <div className="flex h-screen items-center justify-center bg-primary-900">
          <form onSubmit={handleSubmit} className="flex gap-2 overflow-hidden rounded bg-primary-100 p-8 shadow">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter password..."
              className="rounded py-2 px-4 outline-none duration-300 focus:ring focus:ring-primary-500"
            />
            <button className="rounded bg-primary-800 py-2 px-4 text-primary-50 hover:bg-primary-900">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
