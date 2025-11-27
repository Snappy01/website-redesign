import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Target } from 'lucide-react';
import Globe3D from './Globe3D';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.wrapper}>
                    <motion.div
                        className={styles.imageCol}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.mapContainer}>
                            <Globe3D />

                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>10+</span>
                                <span className={styles.statLabel}>Years Experience</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.textCol}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.title}>About Us</h2>
                        <h3 className={styles.subtitle}>Global Expertise, Local Presence</h3>

                        <div className={styles.description}>
                            <p>
                                We are a group of CSP Programmers based in <strong>Paris</strong> and <strong>Beijing</strong> working on Crestron projects for over 10 years.
                            </p>
                            <p>
                                Before creating CSP-Partners, one used to work at Crestron in Paris giving technical training to programmers and the other was working as an IT project manager.
                            </p>
                            <p>
                                In your projects, Programming is as important as Integration. We decided to team up to create a company that focuses on what we do best: <strong>Programming</strong>.
                            </p>
                        </div>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <Users size={24} className={styles.featureIcon} />
                                <span>Expert Team</span>
                            </div>
                            <div className={styles.feature}>
                                <Briefcase size={24} className={styles.featureIcon} />
                                <span>Project Management</span>
                            </div>
                            <div className={styles.feature}>
                                <Target size={24} className={styles.featureIcon} />
                                <span>Focused Solutions</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
