import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Currículo Igor Profeta Silveira.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme ==='light' ? sun : moon;
    const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;
    const githubIcon = theme ==='light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.heroImage} src={heroImg} alt="Profile picture of Igor Profeta"  />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Igor <br />Profeta Silveira</h1>
            <h2>Frontend Developer</h2>
            <span> <a href="https://www.linkedin.com/in/igor-silveira-70a62a326/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/IgorPSUnit" target='_blank'>
                <img src={githubIcon} alt="Github Icon" />
            </a>
            </span>
            <p className={styles.description}>Hi, I'm Igor, a passionate Frontend Developer with a focus on creating engaging and user-friendly web applications. I love to learn and explore new technologies to enhance my skills.</p>
            <a href={CV} download>
                <button className="hover" >Resume</button>
            </a>
        </div>
        </section>
  )
}

export default Hero