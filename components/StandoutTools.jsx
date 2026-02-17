"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Brain, Gauge, Target } from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./StandoutTools.module.css";

export default function StandoutTools() {
  const { t } = useLang();

  const [goal, setGoal] = useState("fatLoss");
  const [level, setLevel] = useState("beginner");
  const [sessions, setSessions] = useState(3);

  const [sleep, setSleep] = useState(7);
  const [stress, setStress] = useState(4);
  const [soreness, setSoreness] = useState(4);
  const [stallWeeks, setStallWeeks] = useState(3);
  const [trend, setTrend] = useState("flat");
  const [motivation, setMotivation] = useState(6);
  const [sleepQuality, setSleepQuality] = useState(7);

  const goalOptions = [
    { id: "fatLoss", label: t.standout.goals.fatLoss },
    { id: "strength", label: t.standout.goals.strength },
    { id: "speed", label: t.standout.goals.speed },
  ];

  const levelOptions = [
    { id: "beginner", label: t.standout.levels.beginner },
    { id: "intermediate", label: t.standout.levels.intermediate },
    { id: "advanced", label: t.standout.levels.advanced },
  ];

  const trendOptions = [
    { id: "down", label: t.standout.trendOptions.down },
    { id: "flat", label: t.standout.trendOptions.flat },
    { id: "up", label: t.standout.trendOptions.up },
  ];

  const estimator = useMemo(() => {
    const presets = {
      fatLoss: {
        base: { beginner: 14, intermediate: 12, advanced: 10 },
        program: t.standout.programs.fatLoss,
        focus: t.standout.focuses.fatLoss,
        win: t.standout.wins.fatLoss,
      },
      strength: {
        base: { beginner: 16, intermediate: 13, advanced: 11 },
        program: t.standout.programs.strength,
        focus: t.standout.focuses.strength,
        win: t.standout.wins.strength,
      },
      speed: {
        base: { beginner: 15, intermediate: 13, advanced: 11 },
        program: t.standout.programs.speed,
        focus: t.standout.focuses.speed,
        win: t.standout.wins.speed,
      },
    };

    const selected = presets[goal];
    const base = selected.base[level];
    const sessionAdjust = sessions >= 5 ? -2 : sessions === 4 ? -1 : sessions === 2 ? 2 : 0;
    const timelineWeeks = Math.max(6, base + sessionAdjust);
    const splitKey = sessions <= 2 ? "two" : sessions === 3 ? "three" : sessions === 4 ? "four" : "five";

    return {
      timelineWeeks,
      program: selected.program,
      focus: selected.focus,
      split: t.standout.splits[splitKey],
      win: selected.win,
    };
  }, [goal, level, sessions, t]);

  const readiness = useMemo(() => {
    const sleepScore = ((sleep - 4) / 5) * 100;
    const stressScore = ((10 - stress) / 9) * 100;
    const sorenessScore = ((10 - soreness) / 9) * 100;
    const score = Math.max(
      0,
      Math.min(
        100,
        Math.round((sleepScore * 0.45) + (stressScore * 0.3) + (sorenessScore * 0.25)),
      ),
    );
    const key = score >= 75 ? "push" : score >= 55 ? "build" : "recover";
    return { score, key, status: t.standout.statuses[key] };
  }, [sleep, stress, soreness, t]);

  const plateau = useMemo(() => {
    let key = "progression";

    if (stallWeeks >= 5 && trend === "down" && sleepQuality <= 6) {
      key = "deload";
    } else if (stallWeeks >= 4 && trend !== "up") {
      key = "variation";
    } else if (motivation <= 4 || sleepQuality <= 5) {
      key = "adherence";
    }

    const resetDaysMap = {
      deload: 7,
      variation: 10,
      adherence: 14,
      progression: 7,
    };

    return {
      key,
      resetDays: resetDaysMap[key],
      protocol: t.standout.protocols[key],
    };
  }, [stallWeeks, trend, motivation, sleepQuality, t]);

  return (
    <section className="section" id="coach-tools">
      <div className="container">
        <AnimatedSection variant="fadeUp">
          <div className={styles.header}>
            <p className="section-label">{t.standout.eyebrow}</p>
            <h2 className="section-title">
              {t.standout.headline1}{" "}
              <span className={styles.accent}>{t.standout.headlineAccent}</span>
            </h2>
            <p className="section-subtitle">{t.standout.subtitle}</p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          <AnimatedSection variant="fadeUp">
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.iconWrap}>
                  <Gauge size={18} />
                </span>
                <h3 className={styles.cardTitle}>{t.standout.estimatorTitle}</h3>
              </div>

              <div className={styles.control}>
                <p className={styles.label}>{t.standout.goalLabel}</p>
                <div className={styles.segment}>
                  {goalOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`${styles.segmentBtn} ${goal === option.id ? styles.active : ""}`}
                      onClick={() => setGoal(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.control}>
                <p className={styles.label}>{t.standout.levelLabel}</p>
                <div className={styles.segment}>
                  {levelOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`${styles.segmentBtn} ${level === option.id ? styles.active : ""}`}
                      onClick={() => setLevel(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.control}>
                <label className={styles.sliderLabel}>
                  {t.standout.sessionsLabel}
                  <strong>{sessions}x / {t.standout.week}</strong>
                </label>
                <input
                  className={styles.slider}
                  type="range"
                  min="2"
                  max="6"
                  step="1"
                  value={sessions}
                  onChange={(e) => setSessions(Number(e.target.value))}
                />
              </div>

              <motion.div
                className={styles.output}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                key={`${goal}-${level}-${sessions}`}
              >
                <div className={styles.timeline}>
                  <span className={styles.timelineValue}>{estimator.timelineWeeks}</span>
                  <span className={styles.timelineLabel}>{t.standout.weeks}</span>
                </div>
                <div className={styles.outputRows}>
                  <div className={styles.row}>
                    <span>{t.standout.recommendedLabel}</span>
                    <strong>{estimator.program}</strong>
                  </div>
                  <div className={styles.row}>
                    <span>{t.standout.focusLabel}</span>
                    <strong>{estimator.focus}</strong>
                  </div>
                  <div className={styles.row}>
                    <span>{t.standout.splitLabel}</span>
                    <strong>{estimator.split}</strong>
                  </div>
                  <div className={styles.row}>
                    <span>{t.standout.winLabel}</span>
                    <strong>{estimator.win}</strong>
                  </div>
                </div>
              </motion.div>
            </article>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.1}>
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.iconWrap}>
                  <Brain size={18} />
                </span>
                <h3 className={styles.cardTitle}>{t.standout.readinessTitle}</h3>
              </div>

              <div className={styles.control}>
                <label className={styles.sliderLabel}>
                  {t.standout.sleepLabel}
                  <strong>{sleep}h</strong>
                </label>
                <input
                  className={styles.slider}
                  type="range"
                  min="4"
                  max="9"
                  step="1"
                  value={sleep}
                  onChange={(e) => setSleep(Number(e.target.value))}
                />
              </div>

              <div className={styles.control}>
                <label className={styles.sliderLabel}>
                  {t.standout.stressLabel}
                  <strong>{stress}/10</strong>
                </label>
                <input
                  className={styles.slider}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={stress}
                  onChange={(e) => setStress(Number(e.target.value))}
                />
              </div>

              <div className={styles.control}>
                <label className={styles.sliderLabel}>
                  {t.standout.sorenessLabel}
                  <strong>{soreness}/10</strong>
                </label>
                <input
                  className={styles.slider}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={soreness}
                  onChange={(e) => setSoreness(Number(e.target.value))}
                />
              </div>

              <div className={styles.readinessOutput}>
                <div className={styles.scoreWrap}>
                  <span className={styles.scoreValue}>{readiness.score}</span>
                  <span className={styles.scoreMeta}>/100</span>
                  <span className={styles.scoreLabel}>{t.standout.readinessScoreLabel}</span>
                </div>
                <div className={`${styles.statusBadge} ${styles[readiness.key]}`}>
                  <Activity size={14} />
                  {readiness.status.title}
                </div>
                <p className={styles.statusDesc}>{readiness.status.desc}</p>
                <ul className={styles.tipList}>
                  {readiness.status.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.18} className={styles.centerFeature}>
            <article className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.cardHead}>
                <span className={styles.iconWrap}>
                  <Target size={18} />
                </span>
                <h3 className={styles.cardTitle}>{t.standout.plateauTitle}</h3>
              </div>

              <div className={styles.control}>
                <label className={styles.sliderLabel}>
                  {t.standout.stallWeeksLabel}
                  <strong>
                    {stallWeeks} {stallWeeks === 1 ? t.standout.week : t.standout.weeks}
                  </strong>
                </label>
                <input
                  className={styles.slider}
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={stallWeeks}
                  onChange={(e) => setStallWeeks(Number(e.target.value))}
                />
              </div>

              <div className={styles.control}>
                <p className={styles.label}>{t.standout.trendLabel}</p>
                <div className={styles.segment}>
                  {trendOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`${styles.segmentBtn} ${trend === option.id ? styles.active : ""}`}
                      onClick={() => setTrend(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.control}>
                <label className={styles.sliderLabel}>
                  {t.standout.motivationLabel}
                  <strong>{motivation}/10</strong>
                </label>
                <input
                  className={styles.slider}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={motivation}
                  onChange={(e) => setMotivation(Number(e.target.value))}
                />
              </div>

              <div className={styles.control}>
                <label className={styles.sliderLabel}>
                  {t.standout.sleepQualityLabel}
                  <strong>{sleepQuality}h</strong>
                </label>
                <input
                  className={styles.slider}
                  type="range"
                  min="4"
                  max="9"
                  step="1"
                  value={sleepQuality}
                  onChange={(e) => setSleepQuality(Number(e.target.value))}
                />
              </div>

              <motion.div
                className={styles.protocolOutput}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                key={`${stallWeeks}-${trend}-${motivation}-${sleepQuality}`}
              >
                <div className={styles.protocolTop}>
                  <div className={styles.timeline}>
                    <span className={styles.timelineValue}>{plateau.resetDays}</span>
                    <span className={styles.timelineLabel}>{t.standout.days}</span>
                  </div>
                  <span className={`${styles.protocolBadge} ${styles[plateau.key]}`}>
                    {plateau.protocol.title}
                  </span>
                </div>

                <p className={styles.statusDesc}>{plateau.protocol.desc}</p>
                <p className={styles.planLabel}>{t.standout.coachPlanLabel}</p>
                <ul className={styles.tipList}>
                  {plateau.protocol.actions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              </motion.div>
            </article>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className={styles.bottomCta}>
            <div>
              <p className={styles.bottomTitle}>{t.standout.bottomTitle}</p>
              <p className={styles.bottomText}>{t.standout.bottomText}</p>
            </div>
            <motion.button
              className={styles.bottomBtn}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.standout.bottomCta}
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
