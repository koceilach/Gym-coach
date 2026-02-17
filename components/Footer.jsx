"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Music2, ArrowUpRight, MapPin, Phone, Mail, Zap } from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();
  const socialLinks = [
    {
      href: "https://www.instagram.com/youmene_boxing?igsh=aGI3NGJobzd3M280&utm_source=qr",
      label: "Instagram",
      Icon: Instagram,
    },
    {
      href: "https://www.facebook.com/share/18cv1bkHpR/?mibextid=wwXIfr",
      label: "Facebook",
      Icon: Facebook,
    },
    {
      href: "https://www.tiktok.com/@youmene.boxing?_r=1&_t=ZS-940DwsIbIu5",
      label: "TikTok",
      Icon: Music2,
    },
  ];

  return (
    <footer className={styles.footer}>
      {/* CTA Banner — Redesigned */}
      <div className={styles.ctaSection}>
        <div className="container">
          <AnimatedSection variant="fadeUp">
            <div className={styles.ctaBanner}>
              {/* Decorative elements */}
              <div className={styles.ctaGlow} />
              <div className={styles.ctaGlow2} />
              <div className={styles.ctaGrid} />

              <div className={styles.ctaInner}>
                <motion.div
                  className={styles.ctaIconWrap}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Zap size={28} />
                </motion.div>
                <h2 className={styles.ctaTitle}>
                  {t.footer.ctaTitle1}<br />
                  <span className={styles.ctaAccent}>{t.footer.ctaAccent}</span>
                </h2>
                <p className={styles.ctaSub}>{t.footer.brandDesc}</p>
                <motion.a
                  href="#contact"
                  className={styles.ctaBtn}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {t.footer.ctaBtn}
                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoDot}>●</span>
              <span>Youmene</span>
            </a>
            <p className={styles.brandDesc}>
              {t.footer.brandDesc}
            </p>
            <div className={styles.socials}>
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className={styles.socialIcon}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>{t.footer.quickLinks}</h4>
            <ul className={styles.linkList}>
              {t.footer.quickLinkItems.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={styles.footerLink}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>{t.footer.programs}</h4>
            <ul className={styles.linkList}>
              {t.footer.programItems.map((p, i) => (
                <li key={i}>
                  <a href="#services" className={styles.footerLink}>{p}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>{t.footer.contactTitle}</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>{t.contact.info.location.value}</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <span>{t.contact.info.phone.value}</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <span>{t.contact.info.email.value}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>{t.footer.copy}</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>{t.footer.privacy}</a>
            <a href="#" className={styles.legalLink}>{t.footer.terms}</a>
            <a
              href="https://www.facebook.com/Kceela"
              className={styles.creditLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              builded by koceila ch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
