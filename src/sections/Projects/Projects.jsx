import React from 'react';
import styles from './ProjectsStyles.module.css';
import little from '../../assets/lemon.png';
import florescer from '../../assets/Florescer-logo-marca-oficial.png'
import ProjectCard from '../../common/ProjectCard.jsx';
import { useLanguage } from '../../common/LanguageContext';
import { translations } from '../../common/translations';

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section id="projects" className={styles.container} >
      <h1 className="sectionTitle">{t.projectsTitle}</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={little} link="https://github.com/IgorPSUnit/little-lemon" h3="Little Lemon" p={t.littleDescription}/>
        <ProjectCard src={florescer} link="https://github.com/IgorPSUnit/florescer-social/tree/master" h3="Florescer" p={t.florescerDescription}/>
      </div>
    </section>
  );
}

export default Projects;
