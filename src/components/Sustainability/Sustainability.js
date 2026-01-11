"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Sustainability.module.scss';

const Sustainability = () => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.sustainabilitySection} id="sustainability">
            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2
                        className={`${styles.title} ${
                            animate ? styles.fadeUp : styles.hidden
                        }`}
                    >
                        Building sustainably for a <br /> better tomorrow.
                    </h2>

                    <button
                        className={`${styles.ctaButton} ${
                            animate ? styles.fadeUpDelay1 : styles.hidden
                        }`}
                    >
                        Start Your Project <ArrowRight size={18} />
                    </button>
                </div>

                <div className={styles.stats}>
                    <div
                        className={`${styles.statItem} ${
                            animate ? styles.fadeUpDelay2 : styles.hidden
                        }`}
                    >
                        <span className={styles.statNumber}>96%</span>
                        <span className={styles.statLabel}>
                            Verified customer<br />delight rating
                        </span>
                    </div>

                    <div
                        className={`${styles.statItem} ${
                            animate ? styles.fadeUpDelay3 : styles.hidden
                        }`}
                    >
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>
                            Years of sustainable<br />Construction
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
