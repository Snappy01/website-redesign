import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Lightbulb } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        icon: <Lightbulb size={32} />,
        title: 'Consulting',
        description: 'In today\'s complex tech landscape, we create seamless solutions by integrating diverse systems. Contact us to design your next project.'
    },
    {
        icon: <Cpu size={32} />,
        title: 'Programming',
        description: 'From full Crestron systems to intricate hybrid integrations with diverse protocols like Bacnet, Modbus, and KNX, our team handles any programming challenge.'
    },
    {
        icon: <Code size={32} />,
        title: 'Innovating',
        description: 'We use C# .NET programming and Simpl#/Simpl#PRO to build custom applications for complex automation tasks. Contact us for Crestron module and driver development.'
    }
];

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>How We Work</h2>
                    <p className={styles.subtitle}>Comprehensive solutions for your automation needs</p>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
