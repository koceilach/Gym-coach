"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Starter Plan",
    price: "49",
    period: "/mo",
    desc: "Perfect for beginners looking to build strong foundations and healthy habits.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    features: [
      "3 sessions per week",
      "Basic program design",
      "Monthly check-ins",
      "Email support",
      "Access to workout app",
    ],
  },
  {
    name: "Pro Athlete Plan",
    price: "149",
    period: "/mo",
    popular: true,
    desc: "For serious athletes who want personalized coaching and elite-level programming.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    features: [
      "5 sessions per week",
      "Custom periodized plan",
      "Weekly check-ins",
      "Nutrition guidance",
      "Video analysis",
      "Priority support 24/7",
    ],
  },
  {
    name: "Elite Program",
    price: "299",
    period: "/mo",
    desc: "Full-service coaching for competitive athletes and dedicated transformations.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    features: [
      "Unlimited sessions",
      "Full competition prep",
      "Daily check-ins",
      "Custom meal plans",
      "Recovery protocols",
      "Dedicated coach line",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <AnimatedSection variant="fadeUp">
          <div className={styles.header}>
            <p className="section-label">Pricing</p>
            <h2 className="section-title">
              Choose Your Training <span className={styles.accent}>Plan</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
              <motion.div
                className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardImage}>
                  <img src={plan.image} alt={plan.name} />
                  <div className={styles.cardImageOverlay} />
                  <div className={styles.priceTag}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                  {plan.popular && <span className={styles.badge}>Most Popular</span>}
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDesc}>{plan.desc}</p>

                  <ul className={styles.features}>
                    {plan.features.map((f, j) => (
                      <li key={j} className={styles.feature}>
                        <Check size={16} className={styles.checkIcon} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={plan.popular ? styles.btnPrimary : styles.btnOutline}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
