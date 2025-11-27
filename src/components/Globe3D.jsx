import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Globe3D.module.css';

// Convert lat/long to 3D coordinates on a sphere
const latLongToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
};

// City pin marker component with elegant 3D design
const CityMarker = ({ lat, lon, radius = 2, color = "#00f2ff" }) => {
    const position = latLongToVector3(lat, lon, radius);
    const markerRef = useRef();

    // Subtle floating animation
    useFrame((state) => {
        if (markerRef.current) {
            markerRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 2) * 0.02;
        }
    });

    return (
        <group ref={markerRef} position={position}>
            {/* Pin base (cone) */}
            <mesh position={[0, 0.08, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.04, 0.15, 8]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Pin head (sphere) */}
            <mesh position={[0, 0.15, 0]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.8}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Glow effect */}
            <pointLight position={[0, 0.15, 0]} color={color} intensity={0.5} distance={0.5} />
        </group>
    );
};

// Globe component with rotation
const RotatingGlobe = () => {
    const meshRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Main globe sphere */}
            <Sphere ref={meshRef} args={[2, 64, 64]}>
                <meshStandardMaterial
                    color="#0a0a0a"
                    wireframe={true}
                    wireframeLinewidth={1}
                    emissive="#00f2ff"
                    emissiveIntensity={0.1}
                />
            </Sphere>

            {/* Inner glow sphere */}
            <Sphere args={[1.98, 32, 32]}>
                <meshBasicMaterial
                    color="#7000ff"
                    transparent={true}
                    opacity={0.05}
                />
            </Sphere>

            {/* City markers */}
            <CityMarker lat={48.8566} lon={2.3522} radius={2} color="#00f2ff" /> {/* Paris */}
            <CityMarker lat={39.9042} lon={116.4074} radius={2} color="#00f2ff" /> {/* Beijing */}
        </group>
    );
};

const Globe3D = () => {
    return (
        <div className={styles.globeContainer}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                className={styles.canvas}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000ff" />
                <RotatingGlobe />
            </Canvas>
        </div>
    );
};

export default Globe3D;
