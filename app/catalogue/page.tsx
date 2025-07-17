import React from "react";
import Flipbook from "./components/Flipbook";

export default function cataloguePage() {
  return (
    <div className="flex flex-col items-center justify-center h-min-screen">
      <h1 className="text-4xl font-bold my-10">Catalogue Page</h1>
      <Flipbook />
    </div>
  );
}