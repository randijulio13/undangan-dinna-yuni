import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-primary-900 via-primary-500 to-primary-900">
      <div className="waterfall">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
