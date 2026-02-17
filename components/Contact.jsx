"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
  Clock3,
} from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./Contact.module.css";

const WEB3FORMS_KEY = "763706f2-9948-4a7a-917b-e628dfeaefde";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const phoneHref = `tel:${t.contact.info.phone.value.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${t.contact.info.email.value}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", WEB3FORMS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textCol}>
            <AnimatedSection variant="fadeUp">
              <p className="section-label">{t.contact.eyebrow}</p>
              <h2 className="section-title">
                {t.contact.headline1}
                <br />
                <span className={styles.accent}>{t.contact.headlineAccent}</span>
              </h2>
              <p className="section-subtitle">{t.contact.subtitle}</p>
              {t.contact.chips?.length ? (
                <div className={styles.chips}>
                  {t.contact.chips.map((chip, i) => (
                    <span key={i} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.16}>
              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.info.location.label}</span>
                    <span className={styles.infoValue}>{t.contact.info.location.value}</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.info.phone.label}</span>
                    <a href={phoneHref} className={styles.infoLink}>
                      {t.contact.info.phone.value}
                    </a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.info.email.label}</span>
                    <a href={emailHref} className={styles.infoLink}>
                      {t.contact.info.email.value}
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {t.contact.processSteps?.length ? (
              <AnimatedSection variant="fadeUp" delay={0.24}>
                <div className={styles.processCard}>
                  <p className={styles.processTitle}>{t.contact.processTitle}</p>
                  <ul className={styles.processList}>
                    {t.contact.processSteps.map((step, i) => (
                      <li key={i} className={styles.processItem}>
                        <span className={styles.processNum}>{String(i + 1).padStart(2, "0")}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ) : null}
          </div>

          <div className={styles.formCol}>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="hidden" name="subject" value="Nouveau message - Youmene Fitness" />
                <input type="hidden" name="from_name" value="Site Youmene Fitness" />

                <div className={styles.formIntro}>
                  <p className={styles.formTitle}>{t.contact.form.introTitle}</p>
                  <p className={styles.formHint}>{t.contact.form.introHint}</p>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>{t.contact.form.firstName}</label>
                    <input
                      type="text"
                      name="first_name"
                      className={styles.input}
                      placeholder={t.contact.form.placeholder.firstName}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>{t.contact.form.lastName}</label>
                    <input
                      type="text"
                      name="last_name"
                      className={styles.input}
                      placeholder={t.contact.form.placeholder.lastName}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>{t.contact.form.goal}</label>
                    <select name="goal" className={styles.select} defaultValue="" required>
                      <option value="" disabled>
                        {t.contact.form.placeholder.goal}
                      </option>
                      {t.contact.form.goalOptions.map((goal, i) => (
                        <option key={i} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>{t.contact.form.level}</label>
                    <select name="level" className={styles.select} defaultValue="" required>
                      <option value="" disabled>
                        {t.contact.form.placeholder.level}
                      </option>
                      {t.contact.form.levelOptions.map((level, i) => (
                        <option key={i} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    placeholder={t.contact.form.placeholder.email}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    className={styles.input}
                    placeholder={t.contact.form.placeholder.phone}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    className={styles.textarea}
                    placeholder={t.contact.form.placeholder.message}
                    rows={4}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className={styles.spinner} />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send size={16} />
                    </>
                  )}
                </motion.button>

                <div className={styles.responseNote}>
                  <Clock3 size={14} />
                  {t.contact.form.responseNote}
                </div>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      className={styles.statusSuccess}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle size={18} />
                      {t.contact.form.successMsg}
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      className={styles.statusError}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AlertCircle size={18} />
                      {t.contact.form.errorMsg}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
