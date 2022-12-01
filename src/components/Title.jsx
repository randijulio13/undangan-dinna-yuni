import React from "react";

export default function Title({ children, className }) {
  return (
    <h1 className={`${className ? className : "text-white"} text-center font-cursive text-6xl font-medium text`} data-aos="fade-up">
      {children}
    </h1>
  );
}
