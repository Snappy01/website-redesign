import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.ctaTitle}>Need a programmer, an expertise on a project or a module?</h2>
                    <a href="mailto:contact@csp-partners.fr" className={styles.contactBtn}>
                        Contact Us
                    </a>
                </motion.div>

                <div className={styles.divider}></div>

                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <MapPin size={18} />
                            <span>Paris & Beijing</span>
                        </div>
                        <div className={styles.infoItem}>
                            <Mail size={18} />
                            <span>contact@csp-partners.fr</span>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <div className={styles.copyright}>
                        © 2025 CSP-Partners. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
