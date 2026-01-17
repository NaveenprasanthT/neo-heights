"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import styles from './Hero.module.scss';

import NeoLogo from '@/assets/images/verticals/neo_studio.png'
import ApLogo from '@/assets/images/verticals/AP_logo.png'
import ARLogo from '@/assets/images/verticals/AR_logo.png'
import ArulGroupLogo from '@/assets/images/verticals/ArulGroup_logo.png'
import Image from 'next/image';

const Hero = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const offset = 120; // navbar height
        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;

        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    return (
        <section className={styles.hero} id="home">
            <div className={styles.overlayContainer}></div>
            <div className={styles.overlay}>
                <video
                    src="/videos/intro.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    style={{ width: "100%", height: '100%' }}
                />
            </div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        We craft buildings & infrastructure
                    </h1>
                    <p className={styles.description}>
                        From initial design support to final delivery, our complete business model ensures excellence at every stage of the project lifecycle.
                    </p>
                    <div className={styles.ctaGroup}>
                        <span href="/start-project" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => scrollToSection('contactUs')}>
                            Start Your Project <ArrowRight size={18} />
                        </span>
                        <span href="/projects" className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => scrollToSection('contactUs')}>
                            View Projects
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.verticalsWidget}>
                <div className={styles.widgetHeader}>
                    <span>Other Verticals</span>
                    <X size={14} className={styles.closeIcon} />
                </div>
                <div className={styles.verticalsList}>
                    <div className={styles.verticalItem}>
                        <Image
                            src={NeoLogo}
                            alt=""
                            width={1000}
                            heigth={1000}
                            className={styles.verticalItemImage}
                        />
                    </div>
                    <div className={styles.verticalItem}>
                        <Image
                            src={ApLogo}
                            alt=""
                            width={1000}
                            heigth={1000}
                            className={styles.verticalItemImage}
                        />
                    </div>
                    <div className={styles.verticalItem}>
                        <Image
                            src={ARLogo}
                            alt=""
                            width={1000}
                            heigth={1000}
                            className={styles.verticalItemImage}
                        />
                    </div>
                    <div className={styles.verticalItem}>
                        <Image
                            src={ArulGroupLogo}
                            alt=""
                            width={1000}
                            heigth={1000}
                            style={{background:"#fff"}}
                            className={styles.verticalItemImage}
                        />
                    </div>
                    {/* <div className={styles.verticalItem}>
                        <Image
                            src={NeoLogo}
                            alt=""
                            width={300}
                            heigth={300}
                            className={styles.verticalItemImage}
                        />
                    </div> */}
                </div>
            </div>

            {/* Theme toggle hint tooltip mockup */}
            {/* <div className={styles.themeHint}>
                    <span className={styles.infoIcon}>i</span>
                    Toggle to switch between dark or light mode.
                    <X size={12} className={styles.closeHint} />
                </div> */}
        </section>
    );
};

export default Hero;
