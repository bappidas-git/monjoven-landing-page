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
      "https://res.cloudinary.com/dn9gyaiik/image/upload/v1775884048/Before_and_after_hair_tansplant_enseie.png",
    title: "Hair Transplant Results",
    description:
      "Natural, dense hair growth achieved through our Micro-FUE technique with the smallest punch size for minimal scarring.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dn9gyaiik/image/upload/v1775884049/beard_transplant_tjg6ev.png",
    title: "Beard Transplant Results",
    description:
      "Full, natural-looking beard achieved with precision FUE extraction and custom design for each patient.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dn9gyaiik/image/upload/v1775884053/fue_procedure_skz7zt.png",
    title: "Our FUE Process",
    description:
      "Individual follicles extracted using micro punches (0.6-1.25mm) and reinserted at natural angles for seamless results.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dn9gyaiik/image/upload/v1775884050/FUT_Procedure_mkieqo.png",
    title: "Our FUT Process",
    description:
      "Strip harvesting under local anesthesia with individual graft separation for maximum coverage in a single session.",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dn9gyaiik/image/upload/v1775884051/post_up_care_h4wblq.png",
    title: "Comprehensive Post-Op Care",
    description:
      "Free laser therapy for 4 months, 2 weeks follow-up care, and 24/7 telephonic support for complete peace of mind.",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dn9gyaiik/image/upload/v1775884052/Monjoven_Clinic_Interior_pravha.png",
    title: "World-Class Facility",
    description:
      "Clean, well-organized clinic environment with luxury amenities, complimentary meals, and a dedicated team of specialists.",
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
              <span className={styles.highlightText}>Transformations</span>
            </Typography>
            <div className={styles.titleUnderline}>
              <span className={styles.underlineBar} />
            </div>
            <Typography className={styles.sectionSubtitle}>
              See the life-changing results our patients have achieved through
              our advanced hair transplant and cosmetic procedures
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
                  Book a free consultation with our specialists and take the
                  first step toward your new look. Personalized treatment plans
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
