"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote:
        "A leading Bollywood actress, Deepika made her debut with Om Shanti Om (2007). Known for her versatility, she has starred in blockbuster films like Padmaavat, Chennai Express, and PikuShe's also a mental health advocate and the founder of the Live Love Laugh Foundation..",
      name: "Deepika Padukone",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Priyanka is a global icon, actress, and singer who won the Miss World 2000 title. She gained fame in Bollywood with hits like Fashion, Barfi!, and Bajirao Mastani. She has also starred in Hollywood projects .",
      name: "Priyanka Chopra Jonas",
      title: "Hamlet",
    },
    {
      quote: "Known for her strong performances, Kangana has won multiple National Film Awards. She gained fame with films like Queen, Tanu Weds Manu, and Manikarnika: The Queen of Jhansi. K",
      name: "EKangana Ranaut",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "A young and talented actress, Alia debuted with Student of the Year (2012). She is known for her acting in critically acclaimed films like Raazi, Highway, and Gangubai Kathiawadi. She has also launched her own sustainable clothing line, Ed-a-Mamma..",
      name: "Alia Bhatt",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "ne of Bollywood's most popular actresses, Katrina is known for her dancing skills and glamorous roles. She gained fame with movies like Zindagi Na Milegi Dobara, Ek Tha Tiger, and Jab Tak Hai Jaan..",
      name: "Katrina Kaif",
      title: "Moby-Dick",
    },
  ];


function Testimonials() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-0 text-white">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
      />
            </div>
        </div>
    </div>
      );
}

export default Testimonials
