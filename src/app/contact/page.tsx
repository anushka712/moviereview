"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="h-screen w-full rounded-md  relative flex flex-col items-center justify-center antialiased bg-gray-100 dark:bg-gray-900">
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
       The Great of All Times
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      The term "Greatest of All Time" (GOAT) signifies unparalleled excellence and timeless achievement in a specific field.&apos;Whether in sports, entertainment, science, or art, being labeled as the GOAT reflects a legacy of consistent greatness, transformative impact, and enduring inspiration..
      </p>
      <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Enter your email.."
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-fit relative z-10 mt-4   placeholder:text-neutral-700 px-2 "
      />
      
      <input
        type="text"
        placeholder="Suggest your best movie.."
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-fit relative z-10 mt-4   placeholder:text-neutral-700 px-2 "
      />
     <button className="text-white mt-4 border border-gray-600 px-4 p-2 rounded-lg cursor-pointer">Submit</button>
      </div>
    </div>
    <BackgroundBeams />
  </div>
  )
}

export default page
