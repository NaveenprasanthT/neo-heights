"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import styles from './Services.module.scss';
import Image from 'next/image';

const Services = () => {
    // Extended list of services for the infinite scroll
    const services = [
        {
            title: "Civil Engineering",
            image: require('@/assets/images/services/civil.jpg'),
        },
        {
            title: "Pre-Engineering Building",
            image: require('@/assets/images/services/epc.png'),
        },
        {
            title: "Commercial Interiors",
            image: require('@/assets/images/services/gc.png'),
        },
        {
            title: "MEP",
            image: require('@/assets/images/services/interiors.jpg'),
        },
        {
            title: "Industrial Construction",
            image: require('@/assets/images/services/land.jpg'),
        },
        {
            title: "Warehousing Solutions",
            image: require('@/assets/images/services/mep.jpg'),
        },
        {
            title: "Infrastructure",
            image: require('@/assets/images/services/pre.jpg'),
        }
    ];

    // Duplicate the list to ensure seamless scrolling
    const scrollItems = [...services, ...services];

    return (
        <section className={styles.servicesSection} id="services">
            <div className={`container ${styles.container}`}>
                <SectionText 
                    smallTitle="OUR SERVICES"
                    title="Exceptional Services That Break Barriers and Exceed Expectations"
                    buttonLabel="Explore All"
                    onButtonClick={() => {}}
                    align="center"
                />
            </div>

            {/* Full width scrolling container */}
            <div className={styles.scrollContainer}>
                <div className={styles.scrollTrack}>
                    {scrollItems.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <Image src={service.image} alt={service.title} className={styles.cardImage} width={1000} height={1000} />
                            <div className={styles.overlay}>
                                <span>{service.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
