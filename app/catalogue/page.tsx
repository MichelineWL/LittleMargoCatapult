import React from "react";
import Flipbook from "./components/Flipbook";

export default function cataloguePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <h1 className="text-2xl md:text-4xl font-bold my-6 md:my-10 text-center">Catalogue Page</h1>
      <Flipbook />
    </div>
  );
}