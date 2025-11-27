import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Monitor, Globe } from 'lucide-react';
import styles from './TechStack.module.css';

const techs = [
    {
        icon: <Layers size={40} />,
        title: 'The Tools',
        subtitle: 'Crestron Softwares',
        description: 'Main Crestron Softwares to design any type of Crestron projects.'
    },
    {
        icon: <Monitor size={40} />,
        title: 'Going Above',
        subtitle: 'C# & Visual Studio',
        description: 'C# using Microsoft Visual Studio to take the most advantage of the control system in order to build powerful modules and easy-to-use applications.'
    },
    {
        icon: <Globe size={40} />,
        title: 'And Beyond',
        subtitle: 'CH5 Web Interfaces',
        description: 'CH5 to create modern and flexible Web interfaces.'
    }
];

const TechStack = () => {
    return (
        <section className={styles.techStack}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Softwares</h2>
                    <p className={styles.subtitle}>Cutting-edge tools for superior control</p>
                </motion.div>

                <div className={styles.timeline}>
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.content}>
                                <div className={styles.iconWrapper}>
                                    {tech.icon}
                                </div>
                                <div className={styles.text}>
                                    <h3 className={styles.itemTitle}>{tech.title}</h3>
                                    <h4 className={styles.itemSubtitle}>{tech.subtitle}</h4>
                                    <p className={styles.itemDescription}>{tech.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
