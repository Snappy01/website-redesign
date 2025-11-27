import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Target } from 'lucide-react';
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
                            {/* Abstract World Map SVG */}
                            <svg className={styles.worldMap} viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                                <path d="M150,100 Q200,50 250,100 T350,150 T450,100 T550,150 T650,100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                                {/* Simplified continents outlines or dots could go here. For "clean" look, we use stylized dots/lines */}

                                {/* Paris Node */}
                                <circle cx="380" cy="140" r="6" fill="var(--color-primary)" className={styles.cityNode}>
                                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                                </circle>
                                <text x="380" y="125" fill="white" fontSize="12" textAnchor="middle" className={styles.cityLabel}>Paris</text>

                                {/* Beijing Node */}
                                <circle cx="620" cy="160" r="6" fill="var(--color-primary)" className={styles.cityNode}>
                                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin="1s" />
                                </circle>
                                <text x="620" y="145" fill="white" fontSize="12" textAnchor="middle" className={styles.cityLabel}>Beijing</text>

                                {/* Connection Line */}
                                <path d="M380,140 Q500,80 620,160" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeDasharray="10 5" className={styles.connectionLine}>
                                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                                </path>
                            </svg>

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
