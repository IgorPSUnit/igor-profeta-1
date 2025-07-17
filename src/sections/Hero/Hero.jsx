import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpeg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Currículo Igor Profeta Silveira.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext';
import { translations } from '../../common/translations';

function Hero() {
    const { theme } = useTheme();
    const { language } = useLanguage();

    const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;
    const githubIcon = theme ==='light' ? githubLight : githubDark;
    
    const t = translations[language];

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.heroImage} src={heroImg} alt="Profile picture of Igor Profeta"  />
        </div>
        <div className={styles.info}>
            <h1>Igor <br />Profeta Silveira</h1>
            <h2>{t.jobTitle}</h2>
            <span> <a href="https://www.linkedin.com/in/igor-silveira-70a62a326/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/IgorPSUnit" target='_blank'>
                <img src={githubIcon} alt="Github Icon" />
            </a>
            </span>
            <p className={styles.description}>{t.heroDescription}</p>
            <a href={CV} download>
                <button className="hover" >{t.resumeButton}</button>
            </a>
        </div>
        </section>
  )
}

export default Hero
