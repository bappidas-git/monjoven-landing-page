/* ============================================
   HighlightsSection Component - Results & Procedures
   Showcases before/after results and treatment process
   ============================================ */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useModal } from "../../../context/ModalContext";
import styles from "./HighlightsSection.module.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Highlights data — before/after results and procedures
const highlightsData = [
  {
    id: 1,
    image:
      "https://placehold.co/600x400/2EC4B6/white?text=Hair+Transplant+Results+(600+x+400)",
    title: "Hair Transplant Results",
    description:
      "Outcomes following FUE/DHI hair transplant procedures, with focus on natural hairline design and appropriate density.",
  },
  {
    id: 2,
    image:
      "https://placehold.co/600x400/FF6B35/white?text=Beard+Transplant+Results+(600+x+400)",
    title: "Beard Transplant Results",
    description:
      "Beard restoration procedures designed to improve density and coverage in patchy or sparse areas.",
  },
  {
    id: 3,
    image:
      "https://placehold.co/600x400/2D3561/white?text=How+We+Plan+(600+x+400)",
    title: "How We Plan Each Procedure",
    description:
      "Each case is evaluated individually to determine suitability, donor availability, and appropriate technique (FUE or DHI).",
  },
  {
    id: 4,
    image:
      "https://placehold.co/600x400/8E44AD/white?text=FUI+%26+DHI+Techniques+(600+x+400)",
    title: "FUE & DHI Techniques",
    description:
      "Advanced DHI technique combined with advanced FUE for precise, natural-looking results and maximum graft survival.",
  },
  {
    id: 5,
    image:
      "https://placehold.co/600x400/27AE60/white?text=Post+Procedure+Care+(600+x+400)",
    title: "Post-Procedure Care & Follow-Up",
    description:
      "Structured post-procedure care with guidance on recovery, hair growth cycle, and follow-up support.",
  },
  {
    id: 6,
    image:
      "https://placehold.co/600x400/E67E22/white?text=Clinical+Environment+(600+x+400)",
    title: "Clinical Environment",
    description:
      "Procedures performed in a clean and controlled clinical setting, maintaining standard protocols for hygiene and patient safety.",
  },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { openLeadDrawer } = useModal();

  const handleConsultationClick = () => {
    openLeadDrawer("get-details");
  };

  return (
    <section className={styles.resultsSection} id="results" ref={ref}>
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>OUR RESULTS</span>
            <Typography
              variant="h2"
              className={styles.sectionTitle}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
                color: "#1A5276",
                marginTop: "0.75rem",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              Real Patients, Real{" "}
              <span className={styles.highlightText}>Outcomes</span>
            </Typography>
            <div className={styles.titleUnderline}>
              <span className={styles.underlineBar} />
            </div>
            <Typography className={styles.sectionSubtitle}>
              Examples of results achieved following hair transplant and
              cosmetic procedures. Outcomes may vary based on individual
              factors.
            </Typography>
          </motion.div>

          {/* Highlight Cards Grid */}
          <motion.div variants={itemVariants} className={styles.highlightsGrid}>
            {highlightsData.map((card, index) => (
              <motion.div
                key={card.id}
                className={styles.highlightCard}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.2 + index * 0.12 }}
              >
                <div className={styles.highlightImageWrap}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.highlightImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.highlightContent}>
                  <Typography className={styles.highlightTitle}>
                    {card.title}
                  </Typography>
                  <Typography className={styles.highlightDesc}>
                    {card.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div variants={itemVariants} className={styles.ctaBanner}>
            <div className={styles.ctaBannerContent}>
              <div className={styles.ctaIconWrap}>
                <Icon icon="mdi:calendar-check" />
              </div>
              <div className={styles.ctaTextBlock}>
                <Typography
                  className={styles.ctaHeading}
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  Ready for Your Transformation?
                </Typography>
                <Typography className={styles.ctaDesc} sx={{ color: "#fff" }}>
                  Book a consultation with our specialists and take the first
                  step toward your new look. Personalized treatment plans
                  tailored to your goals.
                </Typography>
              </div>
              <motion.button
                className={styles.ctaButton}
                onClick={handleConsultationClick}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Book Your Consultation</span>
                <Icon icon="mdi:arrow-right" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HighlightsSection;
