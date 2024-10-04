"use client"
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Card-Genius: Digital Business Card Web App",
      description:
        "Card-Genius is a Digital business card sharing app allowing businesses and individual to create beautiful and easy to share business cards",
      tags: ["Redis", "NextAuth", "Typescript", "Nextjs"],
      link: "https://www.cardgenius.me/",
    },
    {
      title: "Student Marketplace Using SQL",
      description:
        "The Student Marketplace is a digital platform designed to create an ecosystem within the student community, offering a convenient space for students to buy and sell various items.",
      tags: ["SQL", "Tableau", "Streamlit"],
      link: "https://github.com/Dhruv64/DAMG6210_Project",
    },
    {
      title: "Portfolio Website",
      description:
        "Simple Portfolio website made using Nextjs and Shadcn Ui",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "#",
    }
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <div>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </div>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
          <HoverEffect items={Projects} />
      </div>
    </div>
  );
};

export default projectsPage;
