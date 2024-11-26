"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import TitleHeader from "./title-header";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <TitleHeader title="About Me" />
      <p className="mb-3">
        I am Santiago Martinez Vallejo student at Tecnológico de Monterrey
        currently enrolled in{" "}
        <span className="font-medium">
          B.S. Computer Science and Technology
        </span>
        , I decided to pursue my passion for programming building a strong
        foundation in{" "}
        <span className="font-medium">full-stack web development</span>. My core
        stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, NestJS, Spring Boot, TailwindCSS, MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">
          TypeScript, SQL, Python, Linux, and Machine Learning
        </span>{" "}
        (since I took an AI concentration track). I am always looking to master
        and improve in the technologies I know. I am currently working as a Test
        Engineer Intern at Teradata. I am graduating by the end of June 2025, so
        I am looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer or a related field.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I love listening to
        music, watching movies, reading books, playing chess, working out,
        boxing and playing the guitar. 
      </p>
    </motion.section>
  );
}
