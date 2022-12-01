import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-primary-800">
      <div className="waterfall">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
