"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Youtube } from 'lucide-react';
import styles from './Footer.module.scss';

import FooterTopImage from '@/assets/images/footer_top.png'
import NeoLogo from '@/assets/images/neo_logo.png';


const Footer = () => {
    return (
      <footer className={styles.footer}>
        {/* White top strip image */}
        <div className={styles.footerTopStrip}>
          <Image
            src={FooterTopImage}
            alt="Footer Partners"
            className={styles.footerTopImage}
            priority
          />
        </div>

        <div className={`container ${styles.container}`}>
          {/* CTA Bar */}
          <div className={styles.ctaBar}>
            <div className={styles.ctaText}>
              <h4>Have a project in mind?</h4>
              <p>Let's build it together.</p>
            </div>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.brandCol}>
              <div className={styles.brandCard}>
                <Image
                  src={NeoLogo}
                  alt="Neo Heights"
                  className={styles.brandLogo}
                />
                <span className={styles.brandSub}>Part of Arul Group</span>
              </div>
              <p className={styles.brandDesc}>
                Neo Heights, backed by the Arul Group, delivers civil, PEB,
                interior, and MEP construction solutions with a focus on
                quality, safety, and long-term value.
              </p>
            </div>

            <div className={styles.linksCol}>
              <h4>QUICK LINKS</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Civil Construction</a>
                </li>
                <li>
                  <a href="#">PEB Structures</a>
                </li>
                <li>
                  <a href="#">Interior Fit-outs</a>
                </li>
                <li>
                  <a href="#">MEP Works</a>
                </li>
                <li>
                  <a href="#">Sustainable Construction</a>
                </li>
              </ul>
            </div>

            <div className={styles.contactCol}>
              <h4>Contact</h4>
              <div className={styles.contactWrapper}>
                <div className={styles.sectionContainer}>
                  <Phone size={16} color="#E17100" />
                  <p>+91 87546 05666, +91 88700 33414</p>
                </div>
                <div className={styles.sectionContainer}>
                  <Mail size={16} color="#E17100" />
                  <p>ceo@neoheights.com, marketing@neoheights.com</p>
                </div>
                <div className={styles.addressContainerWrapper}>
                  <p className={styles.addressContainer}>
                    <MapPin size={16} color="#E17100" />
                    Corporate Office :
                  </p>
                  <p className={styles.address}>
                    {" "}
                    Achuth Square,
                    <br />
                    First floor 1018/1, 24th Main Rd,
                    <br />
                    3th Cross Rd, 1st Sector, HSR Layout,
                    <br />
                    Bengaluru, Karnataka 560102
                  </p>
                </div>

                <div className={styles.addressContainerWrapper}>
                  <p className={styles.addressContainer}>
                    <MapPin size={16} color="#E17100" />
                    Head office :
                  </p>
                  <p className={styles.address}>
                    Plot No. CP5A,
                    <br />
                    Vajra Tower, Second floor,
                    <br /> SIPCOT II National Highway,
                    <br /> Opp to Adiyaman College, Hosur 635109
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.socialIcons}>
                <a href="#">
                  <Facebook size={18} />
                </a>
                <a href="#">
                  <Twitter size={18} />
                </a>
                <a href="#">
                  <Linkedin size={18} />
                </a>
                <a href="#">
                  <Youtube size={18} />
                </a>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>© 2025 Neo Heights. All rights reserved.</p>
            <span className={styles.rightNote}>
              A part of the <a href="#">Arul Group</a>.
            </span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
