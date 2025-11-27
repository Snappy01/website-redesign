import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className={styles.title}>
                            Where Control <br />
                            Meets <span className={styles.highlight}>Simplicity</span>.
                        </h1>
                    </motion.div>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Expert Crestron programming and system integration solutions.
                        We build custom applications for complex automation tasks.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#contact" className={styles.primaryBtn}>
                            Start a Project <ArrowRight size={20} />
                        </a>
                        <a href="#services" className={styles.secondaryBtn}>
                            Our Expertise
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
