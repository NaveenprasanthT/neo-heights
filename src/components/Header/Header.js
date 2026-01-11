"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import styles from './Header.module.scss';
import Image from 'next/image';
import logoImg from '@/assets/images/neo_logo.png';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/', id: 'aboutUs' },
        { label: 'Projects', href: '/', hasDropdown: false, id: 'projects' },
        { label: 'Services', href: '/', hasDropdown: false, id: 'services' },
        { label: 'Sustainability', href: '/', hasDropdown: false, id: 'sustainability' },
        // { label: 'Newsroom', href: '/' },
        { label: 'Team', href: '/', hasDropdown: false, id: 'team' },
        { label: 'Contact', href: '/', id: 'contactUs' },
    ];

    const scrollToSection = (id) => {
        setIsMenuOpen(false); // For mobile screens, close the navbar while clicking navbar element
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
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <Image src={logoImg} width={300} height={300} className={styles.logoIcon} alt="neo" />
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.label} className={styles.navItem} onClick={() => scrollToSection(item?.id)}>
                                {/* <Link href={item.href} className={styles.navLink}> */}
                                {item.label}
                                {item.hasDropdown && <ChevronDown size={14} className={styles.dropdownIcon} />}
                                {/* </Link> */}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    {/* <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button> */}
                    <button
                        className={styles.mobileMenuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
