import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/Projectcard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Akshayd079/JavaScript/tree/main/Expense%20tracker"
          h3="Viberr"
          p="Expense Tracker"
        />
        <ProjectCard
          src={freshBurger}
          link="https://mcgarage.netlify.app/"
          h3="MC Garage"
          p="Car Garage"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Akshayd079/JavaScript/tree/main/to%20do%20list"
          h3="To Do"
          p="To do list "
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/geeyas222/startup"
          h3="SoftHat"
          p="Web Solution"
        />
      </div>
    </section>
  );
}

export default Projects;
