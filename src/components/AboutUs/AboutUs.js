"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const features = [
    {
      stat: "12+",
      title: "Years of Excellence",
      description: "Years of experience delivering high-quality engineering solutions.",
      category: "ENGINEERING & CONSTRUCTION",
      subItems: ["Structural Design", "Project Execution"],
      image: require("@/assets/images/aboutUs/structural_design.jpg"),
    },
    {
      stat: "20+",
      title: "Projects Completed",
      description: "Projects completed across commercial, residential, and industrial sectors.",
      category: "COMMERCIAL BUILDS",
      subItems: ["Commercial Builds", "Residential Projects"],
      image: require("@/assets/images/aboutUs/residential_prjts.png"),
    },
    {
      stat: "100%",
      title: "Cutting-Edge Tools",
      description: "Deployment of cutting-edge tools and equipment for precision work.",
      category: "LATEST EQUIPMENT",
      subItems: ["Advanced Machinery", "Modern Technology"],
      image: require("@/assets/images/aboutUs/modern_tech.jpg"),
    },
    {
      stat: "3M+ sq.ft",
      title: "Footprint Delivered",
      description: "Construction footprint delivered with engineering excellence.",
      category: "PROJECT SCALE",
      subItems: ["Large-format Builds", "Infrastructure Delivery"],
      image: require("@/assets/images/aboutUs/infra_delivery.jpg"),
    },
    {
      stat: "3,000+",
      title: "Widgets Produced",
      description: "Widgets in one day boost operational efficiency.",
      category: "FORTUNE 500 COMPANY",
      subItems: ["Electrification", "Backend Development"],
      image: require("@/assets/images/aboutUs/structural_design.jpg"),
    }
  ];

  const handleLearnMore = () => {
    console.log("Learn More Clicked");
  };

  return (
    <section className={styles.aboutSection} id="aboutUs">
      <SectionText 
        smallTitle="ABOUT US"
        title="Building Excellence Beyond Boundaries and Defying Limits"
        description="At Neo Heights, we are at the forefront of industrial and commercial construction, dedicated to delivering top-notch quality while ensuring cost-efficiency. Our skilled team possesses the expertise to transform your vision into reality, completing projects on schedule and within your budget."
        buttonLabel="Learn More"
        onButtonClick={handleLearnMore}
      />
      
      <div className={styles.cardsContainer}>
        <div className={styles.cardsScroll}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Absolute background colour */}
      <div className={styles.absoluteBgColor} />
    </section>
  );
};

export default AboutUs;
