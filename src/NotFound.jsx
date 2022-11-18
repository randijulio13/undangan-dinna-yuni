import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 font-sans text-8xl font-bold">
      <h1 className="bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 bg-clip-text text-transparent drop-shadow-2xl duration-1000 hover:scale-110">
        404 NOT FOUND
      </h1>
    </div>
  );
}
