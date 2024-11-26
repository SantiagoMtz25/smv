import React from "react";
import { LuCigarette } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import chatbot from "@/public/chatbot.png";
import lab from "@/public/lab.gif";
import trucks from "@/public/trucks.gif";
import titanic from "@/public/titanic.gif";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Teradata | Test Engineer Intern",
    location: "Mexico City, Mexico (Remote)",
    description:
      "I collaborate with a group of software engineers and test engineers to develop test infrastructure and test automation for Teradata AI Unlimited product, utilizing tools such as Linux, SQL, and Jenkins.",
    icon: React.createElement(FaCode),
    date: "Sep 2024 - Present",
  },
  {
    title: "British American Tobacco | IDT Operations Intern",
    location: "Monterrey, Nuevo Leon, Mexico",
    description:
      "Responsible for supporting the Operations Demand team. Ensure business requirements are translated into technology implementation. \n\nReduced +120,000 hours in response times implementing a digitized form for safety procedures. \n\nDeveloped 2 more apps (Digitized Facilities Ticket Form, & Digitized Primary Check Procedures) supporting IWS Phase 2 (Digitalization) utilizing Power Automate, Power Apps and Graph API.",
    icon: React.createElement(LuCigarette),
    date: "Jan 2024 - June 2024",
  },
  {
    title: "Schneider Electric | IT Data Domain Intern",
    location: "Monterrey, Nuevo Leon, Mexico",
    description:
      "Translated business processes into data flow diagrams and data sets for analysis, using dashboards and visualizations. \n\nReviewed data discovery, profiling, and ensured data quality, using tools such as Collibra, Informatica, Excel and Pandas. Validated 100% of IT Support and End-User Assets company domains.",
    icon: React.createElement(MdElectricBolt),
    date: "June 2023 - Nov 2023",
  },
] as const;

export const projectsData = [
  {
    title: "University Learning Website Remake",
    description:
      "Re-build Tec de Monterrey virtual learning center, which offers a distance education model, accessible, without time and space limitations, focused in information technology subjects.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: lab,
  },
  {
    title: "Chatbot Application",
    description:
      "Web app to manage assistance and support to Neoris users, page is controlled by admin users, integrated with a fine-tuned chatbot to answer questions, functionalities to manage account, and visualize page use. Applied double token verification, interceptors, token blacklist, and followed ISO/IEC Standards.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Jest"],
    imageUrl: chatbot,
  },
  {
    title: "Bimbo Truck Route Optimization",
    description:
      "Project to optimize the delivery routes of Bimbo trucks, using image recognition, genetic algorithms for route optimization and a dashboard to visualize and track the trucks.",
    tags: ["React", "YOLO", "ODU", "Django"],
    imageUrl: trucks,
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Developed three ML models to predict the Titanic survival rate, using Logistic Regression, Random Forest, and Support Vector Machine, with regularization methods and k-cross validation. Preprocessed data, using tools such as PCA, Pandas, Encoders, and Confusion Matrix.",
    tags: ["Python, Scikit-learn"],
    imageUrl: titanic,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Tailwind CSS",
  "MongoDB",
  "SQL",
  "Express",
  "Python",
  "Scikit-learn",
  "Java",
  "Spring Boot",
  "Linux",
  "Linux Shell Scripting",
  "Git",
  "Figma",
  "Power Automate",
  "Power Apps", 
] as const;