import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshburger from '../../assets/fresh-burger.png'
import fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects" className={styles.container} >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link="https://github.com/IgorPSUnit" h3="Vibeer" p="Coloque mais"/>
        <ProjectCard src={freshburger} link="https://github.com/IgorPSUnit" h3="FreshBurger" p="Coloque mais"/>
        <ProjectCard src={fitlift} link="https://github.com/IgorPSUnit" h3="FitLift" p="Coloque mais"/>
      </div>
    </section>
  );
}

export default Projects;