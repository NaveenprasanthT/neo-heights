"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Sustainability.module.scss';

const Sustainability = () => {
    return (
        <section className={styles.sustainabilitySection} id="sustainability">
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Building sustainably for a <br /> better tomorrow.
                    </h2>
                    <button className={styles.ctaButton}>
                        Start Your Project <ArrowRight size={18} />
                    </button>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>96%</span>
                        <span className={styles.statLabel}>Verified customer<br/>delight rating</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Years of sustainable<br/>Construction</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
