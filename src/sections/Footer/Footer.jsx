import styles from './FooterStyles.module.css';
import { useLanguage } from '../../common/LanguageContext';
import { translations } from '../../common/translations';

function Footer() {
    const { language } = useLanguage();
    const t = translations[language];
    
    return (
        <section id="footer" className={styles.container}>
            <p>
                &copy; 2025 Igor Profeta Silveira. <br />{t.footerText}
            </p>
        </section>
    );
}

export default Footer;
