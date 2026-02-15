"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./Contact.module.css";

const WEB3FORMS_KEY = "763706f2-9948-4a7a-917b-e628dfeaefde";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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
                {t.contact.headline1}<br />
                <span className={styles.accent}>{t.contact.headlineAccent}</span>
              </h2>
              <p className="section-subtitle">
                {t.contact.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><MapPin size={18} /></div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.info.location.label}</span>
                    <span className={styles.infoValue}>{t.contact.info.location.value}</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><Phone size={18} /></div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.info.phone.label}</span>
                    <span className={styles.infoValue}>{t.contact.info.phone.value}</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><Mail size={18} /></div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.info.email.label}</span>
                    <span className={styles.infoValue}>{t.contact.info.email.value}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className={styles.formCol}>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <form className={styles.form} onSubmit={handleSubmit}>
                {/* Hidden field for Web3Forms subject */}
                <input type="hidden" name="subject" value="Nouveau message - Youmene Fitness" />
                <input type="hidden" name="from_name" value="Site Youmene Fitness" />

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

                {/* Status messages */}
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
