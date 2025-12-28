"use client";

import React, { useState } from 'react';
import SectionText from '../SectionText/SectionText';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.scss';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // Default first one open

    const faqs = [
        {
            question: "What services does Neo Heights construction provide?",
            answer: "Neo Heights provides a comprehensive range of construction services including Civil Engineering, Pre-Engineered Buildings (PEB), Commercial Interiors, and MEP (Mechanical, Electrical, and Plumbing) solutions."
        },
        {
            question: "Do you handle both residential and commercial projects?",
            answer: "While our primary focus is on industrial and commercial projects, we also undertake large-scale residential developments."
        },
        {
            question: "How do I request a quote for my project?",
            answer: "You can request a quote by visiting our Contact page and filling out the enquiry form, or by calling our support team directly."
        },
        {
            question: "Are you licensed and insured?",
            answer: "Yes, Neo Heights is a fully licensed and insured construction company, complying with all local and national regulations."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={`container ${styles.container}`}>
                <SectionText 
                    smallTitle="NEED HELP?"
                    title="Frequently asked questions"
                    align="center"
                    maxWidth="800px"
                />

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className={styles.questionHeader}>
                                <h3>{faq.question}</h3>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            <div className={styles.answerBody}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomCta}>
                    <div className={styles.ctaCard}>
                        <h3>Your Trusted Construction Partner</h3>
                        <p>We bring expertise, quality, and commitment to every project we undertake.</p>
                        <button className={styles.ctaBtn}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
