import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css';
import { useLanguage } from '../../common/LanguageContext';
import { translations } from '../../common/translations';

function Contact() {
  const [state, handleSubmit] = useForm("mldleznq");
  const { language } = useLanguage();
  const t = translations[language];

  if (state.succeeded) {
    return (
      <section id="contact" className={styles.container}>
        <p className={styles.successMessage}>{t.successMessage}</p>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">{t.contactTitle}</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            {t.nameLabel}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t.namePlaceholder}
            required
          />
          <ValidationError
            prefix={t.nameLabel}
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            {t.emailLabel}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t.emailPlaceholder}
            required
          />
          <ValidationError
            prefix={t.emailLabel}
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            {t.messageLabel}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={t.messagePlaceholder}
            required></textarea>
          <ValidationError
            prefix={t.messageLabel}
            field="message"
            errors={state.errors}
          />
        </div>
        <input
          className="hover btn"
          type="submit"
          value={state.submitting ? t.submittingButton : t.submitButton}
          disabled={state.submitting}
        />
      </form>
    </section>
  );
}

export default Contact;
