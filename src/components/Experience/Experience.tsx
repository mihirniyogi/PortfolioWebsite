import { useState } from "react";
import styles from "./Experience.module.scss";

type Tab = "work" | "education" | "volunteering";

const Experience = () => {

  const [tab, setTab] = useState<Tab>("work");

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

            <div className={styles.experience}>
              <div className={styles.dates}>
                <p>2025 Mar - 2025 Jul</p>
              </div>
              <div className={styles.meta}>
                <h3 className={styles.title}>Coding Educator / Software Engineer</h3>
                <p className={styles.company}>Lyza Education</p>
                <p className={styles.description}>
                  Taught programming courses to upper primary and secondary school students, covering advanced coding concepts and hands-on projects. Developed educational materials and provided mentorship to students.
                </p>
              </div>
            </div>

            <div className={styles.experience}>
              <div className={styles.dates}>
                <p>2023 Mar - 2023 Jul</p>
              </div>
              <div className={styles.meta}>
                <h3 className={styles.title}>Coding Educator</h3>
                <p className={styles.company}>Marshall Cavendish</p>
                <p className={styles.description}>
                  Created and taught programming courses for hundreds of primary and secondary school students covering basic coding concepts and hands-on projects.
                </p>
              </div>
            </div>

          </div>
        )}
        {tab === "education" && (
          <div>
            <h3>Education</h3>
            <p>Details about education...</p>
          </div>
        )}
        {tab === "volunteering" && (
          <div>
            <h3>Volunteering</h3>
            <p>Details about volunteering...</p>
          </div>
        )}
      </div>

    </section>
  )
}

export default Experience;