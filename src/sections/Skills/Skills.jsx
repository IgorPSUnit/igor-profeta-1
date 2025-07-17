import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext';
import { translations } from '../../common/translations';

function Skills() {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
    const t = translations[language];
    
    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">{t.skillsTitle}</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="TypeScript" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="Python" />
                <SkillList src={checkMarkIcon} skill="C#" />
                <SkillList src={checkMarkIcon} skill="SQL" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
                <SkillList src={checkMarkIcon} skill="UI/UX" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Scrumm" />
                <SkillList src={checkMarkIcon} skill="Agile/XP" />
            </div>
        </section>
    );
}
export default Skills;
