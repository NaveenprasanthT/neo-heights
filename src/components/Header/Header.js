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
        { label: 'About us', href: '/' },
        { label: 'Projects', href: '/', hasDropdown: true },
        { label: 'Services', href: '/', hasDropdown: true },
        { label: 'Sustainability', href: '/', hasDropdown: true },
        { label: 'Newsroom', href: '/' },
        { label: 'Team', href: '/', hasDropdown: true },
        { label: 'Contact', href: '/' },
    ];

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <Image src={logoImg} width={300} height={300} className={styles.logoIcon} alt="neo" />
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.label} className={styles.navItem}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                    {item.hasDropdown && <ChevronDown size={14} className={styles.dropdownIcon} />}
                                </Link>
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
