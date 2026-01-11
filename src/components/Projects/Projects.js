"use client";

import React, { useState } from 'react';
import SectionText from '../SectionText/SectionText';
import { ArrowRight } from 'lucide-react';
import styles from './Projects.module.scss';
import Image from 'next/image';

const Projects = () => {
    const [activeStatus, setActiveStatus] = useState('Completed');
    const [activeCategory, setActiveCategory] = useState('All');

    const statuses = [];
    const categories = ['On-going', 'Completed', 'Civil, PEB, Interior & MEP Works', 'EPC Contracts', 'Civil Engineering', 'EPC Pre-Engineered Building', 'MEP'];

    // Dummy data for projects
    const projects = [
        {
            title: "SHIMIZU - SAKATA",
            location: "DODDABLLAPURA",
            image: require('@/assets/images/projects/sakata.png'),
            size: "large"
        },
        {
            title: "HINDUSTAN FOODS LTD",
            location: "COIMBATORE",
            image: require('@/assets/images/projects/hindustan.png'),
            size: "small"
        },
        {
            title: "Schaeffler India Limited, Shoolagiri",
            location: "SAVLI, VADODARA",
            description: "Construction of Hall 01 Boundary Wall, including civil foundation, RCC flooring.",
            image: require('@/assets/images/projects/sakata.png'),
            size: "medium-text", // Special type for text + image split
            isFeatured: true
        },
        {
            title: "SCHAEFFLER INDIA LIMITED",
            location: "SHOOLAGIRI",
            image: require('@/assets/images/projects/india.png'),
            size: "large-wide"
        },
        {
            title: "PEB WORKS FAIVELEY",
            location: "HOSUR",
            image: require('@/assets/images/projects/peb.png'),
            size: "small"
        },
        {
            title: "PEB WORKS VOLVO",
            location: "NARSAPURA",
            image: require('@/assets/images/projects/volvo.png'),
            size: "small"
        }
    ];

    const Filters = () => (
        <div className={styles.filtersWrapper}>
            {/* <div className={styles.statusFilters}>
                {statuses.map(status => (
                    <button 
                        key={status} 
                        className={`${styles.filterBtn} ${activeStatus === status ? styles.active : ''}`}
                        onClick={() => setActiveStatus(status)}
                    >
                        {status}
                    </button>
                ))}
            </div> */}
            <div className={styles.categoryFilters}>
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <section className={styles.projectsSection} id="projects">
            <div className={`container ${styles.container}`}>
                <SectionText 
                    smallTitle="PROJECTS"
                    title="Innovative Projects That Push Boundaries and Surpass Goals"
                    buttonLabel="Explore All Projects"
                    onButtonClick={() => {}}
                    align="left"
                    customChildren={<Filters />}
                    // maxWidth='60%'
                />

                <div className={styles.projectsGrid}>
                    {/* Top Row */}
                    <div className={`${styles.projectCard} ${styles.span2}`}>
                         <Image src={projects[0].image} alt={projects[0].title} className={styles.projectImage} width={1000} height={1000} />
                         <div className={styles.overlay}>
                             <h3>{projects[0].title}</h3>
                             <span>{projects[0].location}</span>
                         </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.span1}`}>
                         <Image src={projects[1].image} alt={projects[1].title} className={styles.projectImage} width={1000} height={1000} />
                         <div className={styles.overlay}>
                             <h3>{projects[1].title}</h3>
                             <span>{projects[1].location}</span>
                         </div>
                    </div>

                    {/* Middle Row - Featured Text Card */}
                    <div className={`${styles.textCard} ${styles.span1}`}>
                        <div className={styles.textCardContent}>
                            <div className={styles.textHeader}>
                                <h3>{projects[2].title}</h3>
                                <span className={styles.statusBadge}>Area - 14,500 sq. m</span>
                            </div>
                            <p>{projects[2].description}</p>
                            <button className={styles.viewMoreBtn}>
                                View More <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.span2}`}>
                         <Image src={projects[3].image} alt={projects[3].title} className={styles.projectImage} width={1000} height={1000} />
                         <div className={styles.overlay}>
                             <h3>{projects[3].title}</h3>
                             <span>{projects[3].location}</span>
                         </div>
                    </div>

                    {/* Bottom Row */}
                    <div className={`${styles.projectCard} ${styles.span1}`}>
                         <Image src={projects[4].image} alt={projects[4].title} className={styles.projectImage} width={1000} height={1000} />
                         <div className={styles.overlay}>
                             <h3>{projects[4].title}</h3>
                             <span>{projects[4].location}</span>
                         </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.span1}`}>
                         <Image src={projects[5].image} alt={projects[5].title} className={styles.projectImage} width={1000} height={1000} />
                         <div className={styles.overlay}>
                             <h3>{projects[5].title}</h3>
                             <span>{projects[5].location}</span>
                         </div>
                    </div>
                    <div className={`${styles.textCard} ${styles.span1} ${styles.darkTextCard}`}>
                         <p className={styles.finalCardText}>
Executed as a turnkey EPC project, this facility integrates civil, structural, PEB, and MEP works to deliver a seamless, efficient, and future-ready industrial space tailored to client requirements.                         </p>
                         <button className={styles.viewMoreBtn}>
                            Learn More <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
