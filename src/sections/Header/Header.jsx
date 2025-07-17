import styles from './HeaderStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext';
import { translations } from '../../common/translations';

function Header() {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    const themeIcon = theme === 'light' ? sun : moon;
    const t = translations[language];

    return (
        <header className={styles.header}>
            <div className={styles.toggleContainer}>
                <img 
                    className={styles.colorMode} 
                    src={themeIcon} 
                    alt="Color mode icon" 
                    onClick={toggleTheme}
                />
                <button 
                    className={styles.languageToggle} 
                    onClick={toggleLanguage}
                >
                    {t.languageToggle}
                </button>
            </div>
        </header>
    );
}

export default Header;
