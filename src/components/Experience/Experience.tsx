import { useEffect, useState } from "react";
import styles from "./Experience.module.scss";
import fetchDataFromCMS from "../../utils/fetchDataFromCMS";

// constants for education section
const educationDegreeDesc = `Bachelor of Computing in Computer Science (Honours) · NUS`;
const educationOtherDesc = `Specialised in: SWE, AI | Minor in Statistics`;
const educationDates = `2023 Aug - 2027 Aug`;

// format date helper
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${year} ${month}`;
}

type Tab = "work" | "education" | "volunteering";

type ResponseFormat = {
  data: {
    type: "work" | "education" | "volunteering";
    start: string;
    end?: string;
    role: string;
    organisation: string;
    description: string;
    visible: boolean;
  }[];
}

type WorkExperience = {
  start: string;
  end?: string;
  role: string;
  organisation: string;
  description: string;
}

type VolunteeringExperience = {
  start: string;
  end?: string;
  role: string;
  organisation: string;
  description: string;
}


const Experience = () => {

  const [tab, setTab] = useState<Tab>("work");

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [volunteeringExperiences, setVolunteeringExperiences] = useState<VolunteeringExperience[]>([]);

  useEffect(() => {
    async function fetchData() {

      try {
        const response = await fetchDataFromCMS("/api/experiences") as ResponseFormat;
        const workExperiences: WorkExperience[] = response.data
          .filter((item) => item.type === "work" && item.visible)
          .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())
          .map((item) => ({
            start: formatDate(item.start),
            end: item.end ? formatDate(item.end) : "",
            role: item.role,
            organisation: item.organisation,
            description: item.description
          }));

        const volunteeringExperiences: VolunteeringExperience[] = response.data
          .filter((item) => item.type === "volunteering" && item.visible)
          .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())
          .map((item) => ({
            start: formatDate(item.start),
            end: item.end ? formatDate(item.end) : "",
            role: item.role,
            organisation: item.organisation,
            description: item.description
          }));

        setWorkExperiences(workExperiences);
        setVolunteeringExperiences(volunteeringExperiences);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setWorkExperiences([]);
        setVolunteeringExperiences([]);
      }
    }

    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <h2>Experience</h2>

      <div className={styles.tabgroup}>
        <button
          onClick={() => setTab("work")}
          className={tab === "work" ? styles.active : undefined}>
          Work
        </button>
        <button
          onClick={() => setTab("education")}
          className={tab === "education" ? styles.active : undefined}>
          Education
        </button>
        <button
          onClick={() => setTab("volunteering")}
          className={tab === "volunteering" ? styles.active : undefined}>
          Volunteering
        </button>
      </div>

      <div>
        {tab === "work" && (
          <div className={styles.experienceList}>
            {
              workExperiences.map((experience, index) => (
                <div key={index} className={styles.experience}>
                  <div className={styles.dates}>
                    <p>{experience.end ? `${experience.start} - ${experience.end}` : experience.start}</p>
                  </div>
                  <div className={styles.meta}>
                    <h3 className={styles.title}>{experience.role}</h3>
                    <p className={styles.company}>{experience.organisation}</p>
                    <p className={styles.description}>{experience.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        )}
        {tab === "education" && (
          <div className={styles.experienceList}>

            <div className={styles.experience}>
              <div className={styles.dates}>
                <p>{educationDates}</p>
              </div>
              <div className={styles.meta}>
                <h3 className={styles.title}>
                  {educationDegreeDesc}
                </h3>
                <p className={styles.company}>
                  {educationOtherDesc}
                </p>
              </div>
            </div>

          </div>
        )}
        {tab === "volunteering" && (
          <div className={styles.experienceList}>
            {
              volunteeringExperiences.map((experience, index) => (
                <div key={index} className={styles.experience}>
                  <div className={styles.dates}>
                    <p>{experience.end ? `${experience.start} - ${experience.end}` : experience.start}</p>
                  </div>
                  <div className={styles.meta}>
                    <h3 className={styles.title}>{experience.role}</h3>
                    <p className={styles.company}>{experience.organisation}</p>
                    <p className={styles.description}>{experience.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        )}
      </div>

    </section>
  )
}

export default Experience;