"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Contact.module.scss';

import ContactBg from '@/assets/images/contact_bg.png';

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <Image
                src={ContactBg}
                className={styles.contactSectionBg}
                width={500}
                height={500}
                alt=""
            />
            <div className={`container ${styles.container}`}>
                <div className={styles.textWrapper}>
                    <span className={styles.preTitle}>HAVE A PROJECT IN MIND</span>
                    <div>
                        <h2 className={styles.title}>
                            We Build Spaces That Power Growth And Last For Generations.
                        </h2>
                        <p className={styles.description}>
                            From industrial PEB works to intricate civil and MEP solutions, Neo Heights delivers reliable, end-to-end construction services with precision, quality and long-term value.
                        </p>
                    </div>
                </div>

                <div className={styles.formWrapper}>
                    <div className={styles.absoluteBgColor}></div>
                    <div className={styles.formCard}>
                        <h3 className={styles.formCardTitle}>Let's connect</h3>
                        <p className={styles.formDesc}>You can reach us anytime via <span>frontdesk@neoheights.com</span></p>

                        <form className={styles.contactForm}>
                            <input type="text" placeholder="Your full Name" className={styles.input} />
                            <input type="email" placeholder="Email Address" className={styles.input} />
                            <input type="tel" placeholder="Phone Number" className={styles.input} />
                            <textarea placeholder="Write Your message" rows="4" className={styles.textarea} aria-expanded={false}></textarea>

                            <button type="submit" className={styles.submitBtn}>
                                Send Enqiry <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
