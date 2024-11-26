"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import TitleHeader from "./title-header";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-0">
      <TitleHeader title="Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}