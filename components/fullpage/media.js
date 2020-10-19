import React from "react";
import { HomePage } from "../../template-pages/home/home";
import { ProjectsPage } from "../../template-pages/projects/projects";
import { CursusPage } from "../../template-pages/cursus/cursus";
import { ContactPage } from "../../template-pages/contact/contact";
// import "./fullpage.css";

export const media = [
  {
    slug: "",
    className: "slide home-page",
    children: <HomePage />
  },
  {
    slug: "page-projects",
    className: "slide projects-page",
    children: <ProjectsPage />

  },
  {
    slug: "page-cursus",
    className: "slide cursus-page",
    children: <CursusPage />
  }
  ,
  {
    slug: "page-contact",
    className: "slide contact-page",
    children: <ContactPage />
  }
];