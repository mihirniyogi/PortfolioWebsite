import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Projects.module.scss";
import fetchDataFromCMS from "../../utils/fetchDataFromCMS";

type ResponseFormat = {
  data: {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    technologies: {
      id: number;
      name: string;
    }[];
    image?: {
      url: string;
    }
  }[];
}

type Project = {
  title: string;
  desc: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const Projects = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {

      try {
        const response = await fetchDataFromCMS("/api/projects?populate=*") as ResponseFormat;
        const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;
        const projects: Project[] = response.data.map((item) => ({
          title: item["title"],
          desc: item["description"],
          image: item["image"]?.url
            ? `${BASE_URL}${item["image"].url}`
            : '',
          technologies: item["technologies"].map((tech) => tech.name),
          githubLink: item["githubLink"],
          liveLink: item["liveLink"],
        }));
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    }

    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <h2>Projects</h2>

      <div className={styles.cardsSection}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
