"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import styles from './Team.module.scss';
import Image from 'next/image';

const Team = () => {
    const teamMembers = [
        {
            name: 'Mr. Arul Vajravel',
            role: "MD - Arul Group",
            image: require('@/assets/images/experts/arul.png'),
            bgColor: "#fff"
        },
        {
            name: 'Mr. Dinakaran L',
            role: "CEO",
            image: require('@/assets/images/experts/ceo.png'),
            bgColor: "#FFCED2"
        },
        {
            name: 'Mr Xavier',
            role: "VP - Operations",
            image: require('@/assets/images/experts/xavier.png'),
            bgColor: "#FF8C78"
        },
        {
            name: 'Mrs Monalisa',
            role: "VP - Business Development",
            image: require('@/assets/images/experts/vp.png'),
            bgColor: "#FFEFB6"
        },
        {
            role: "CFO",
            image: null,
            bgColor: "#C7F1FA"
        }
    ];

    // Dummy avatars for the "350+ Experts" badge
    const expertAvatars = [
        {
            id: 1,
            image: require('@/assets/images/experts/arul.png'),
        },
        {
            id: 2,
            image: require('@/assets/images/experts/ceo.png'),
        },
        {
            id: 3,
            image: require('@/assets/images/experts/vp.png'),
        },
    ];

    const ExpertsBadge = () => (
        <div className={styles.expertsBadge}>
            <div className={styles.avatarGroup}>
                {expertAvatars.map((src, i) => (
                    <Image key={i} src={src.image} alt="Expert" className={styles.expertAvatar} width={1000} height={1000} />
                ))}
            </div>
            <span className={styles.expertText}>
                Team of <strong>350+</strong> Experts
            </span>
        </div>
    );

    return (
        <section className={styles.teamSection} id="team">
            <div className={`container ${styles.container}`}>
                <SectionText
                    smallTitle="OUR TEAM"
                    title="Meet Our Experts"
                    description="At Neo Heights, we are at the forefront of industrial and commercial construction, dedicated to delivering top-notch quality while ensuring cost-efficiency. Our skilled team possesses the expertise to transform your vision into reality, completing projects on schedule and within your budget."
                    align="center"
                    maxWidth="900px"
                    customChildren={<ExpertsBadge />}
                />

                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamCard}>
                            <div className={styles.cardVisual} style={{ backgroundColor: member.bgColor }}>
                                {member.image && (
                                    <Image width={1000} height={1000} src={member.image} alt={member.role} className={styles.memberImage} />
                                )}
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardFooterDetails}>
                                    <h3 className={styles.name}>{member?.name}</h3>
                                    <span className={styles.role}>{member.role}</span>
                                </div>
                                <ArrowUpRight size={20} className={styles.arrowIcon} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomCta}>
                    <span className={styles.ctaLabel}>Meet the team</span>
                    <button className={styles.ctaButton}>
                        Our Team <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;
