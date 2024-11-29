"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";


const people = [
    {
      id: 1,
      name: "Prabal Acharya",
      designation: "Civil Engineer",
      image:
       "/movies/photo.jpg"
    },
    {
      id: 2,
      name: "Prerana Sapkota",
      designation: ".Net Developer",
      image:
        "/movies/shiva.jpg",
    },
    {
      id: 3,
      name: "Ankita Subedi",
      designation: "Frontend Developer",
      image:
        "/movies/photo.jpg",
    },
    {
      id: 4,
      name: "Shristi Chapagain",
      designation: "Backend Developer",
      image:
      "/movies/purna.jpg" ,
    },
    {
      id: 5,
      name: "Saurab Rijal",
      designation: "UI Designer",
      image:
      "/movies/shiva.jpg",
    },
    {
      id: 6,
      name: "Anushka Aryal",
      designation: "Frontend Developer",
      image:
        "/movies/photo.jpg",
    },
  ];

function Instructor() {
  return (
    
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your Technical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructor
