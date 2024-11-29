'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function Webinars() {
    const projects = [
        {
          title: "Action",
          description:
            "Action movies are characterized by high-energy sequences, physical stunts, chases, and fights.",
          link: "/",
        },
        {
          title: "Comedy",
          description:
            "Comedy films aim to entertain and amuse audiences with humor, witty dialogues, and funny situations.",
          link: "/",
        },
        {
          title: "Drama",
          description:
            "Drama focuses on realistic storytelling with emotional depth and character development. It often explores complex themes such as relationships, societal issues, or personal struggles.",
          link: "/",
        },
        {
          title: "Horror",
          description:
            "Horror movies aim to evoke fear, suspense, or dread in the audience. They often include supernatural elements, psychological thrills, or creatures that create tension (e.g., The Conjuring, A Nightmare on Elm Street)..",
          link: "/",
        },
        {
          title: "Romance",
          description:
            "Romance movies revolve around love stories, exploring themes of relationships, passion, and emotional connections. They often depict the journey of love and its challenges (e.g., The Notebook, Titanic).",
          link: "/",
        },
        {
          title: "Science Fiction (Sci-Fi)",
          description:
            "Sci-Fi films explore futuristic or speculative concepts such as advanced technology, space exploration, time travel, or alien life. They often blend science with imagination (e.g., Star Wars, Interstellar).",
          link: "/",
        },
      ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={projects.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/movies"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Movies
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Webinars
