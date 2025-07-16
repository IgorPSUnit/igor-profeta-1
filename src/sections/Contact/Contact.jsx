import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [state, handleSubmit] = useForm("mldleznq");

  if (state.succeeded) {
    return (
      <section id="contact" className={styles.container}>
        <p className={styles.successMessage}>Thanks for your message!</p>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <input
          className="hover btn"
          type="submit"
          value={state.submitting ? "Submitting..." : "Submit"}
          disabled={state.submitting}
        />
      </form>
    </section>
  );
}

export default Contact;
