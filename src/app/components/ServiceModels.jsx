"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════
   1. HR CONSULTING — Glass Human Figures in Circular Network
   Team collaboration: glass silhouettes + glowing connection lines
   ═══════════════════════════════════════════════════════════ */

function GlassHuman({ position, delay, highlighted = false }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + delay) * 0.12;
        }
    });
    const matProps = {
        color: highlighted ? "#F4D03F" : "#D2BE60",
        metalness: 0.2,
        roughness: 0.05,
        transmission: 0.7,
        thickness: 0.5,
        ior: 1.5,
        transparent: true,
        opacity: highlighted ? 0.9 : 0.65,
        ...(highlighted ? { emissive: "#D2BE60", emissiveIntensity: 0.4 } : {}),
    };
    return (
        <group ref={ref} position={position}>
            {/* Head */}
            <mesh position={[0, 0.6, 0]}>
                <sphereGeometry args={[0.14, 16, 16]} />
                <meshPhysicalMaterial {...matProps} />
            </mesh>
            {/* Neck */}
            <mesh position={[0, 0.45, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 0.1, 8]} />
                <meshPhysicalMaterial {...matProps} />
            </mesh>
            {/* Torso */}
            <mesh position={[0, 0.2, 0]}>
                <capsuleGeometry args={[0.1, 0.3, 8, 16]} />
                <meshPhysicalMaterial {...matProps} />
            </mesh>
            {/* Arms */}
            <mesh position={[-0.18, 0.28, 0]} rotation={[0, 0, 0.4]}>
                <capsuleGeometry args={[0.035, 0.22, 6, 8]} />
                <meshPhysicalMaterial {...matProps} />
            </mesh>
            <mesh position={[0.18, 0.28, 0]} rotation={[0, 0, -0.4]}>
                <capsuleGeometry args={[0.035, 0.22, 6, 8]} />
                <meshPhysicalMaterial {...matProps} />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.06, -0.15, 0]}>
                <capsuleGeometry args={[0.04, 0.25, 6, 8]} />
                <meshPhysicalMaterial {...matProps} />
            </mesh>
            <mesh position={[0.06, -0.15, 0]}>
                <capsuleGeometry args={[0.04, 0.25, 6, 8]} />
                <meshPhysicalMaterial {...matProps} />
            </mesh>
        </group>
    );
}

function NetworkLines({ positions }) {
    const ref = useRef();
    const geometry = useMemo(() => {
        const points = [];
        for (let i = 0; i < positions.length; i++) {
            const next = (i + 1) % positions.length;
            points.push(new THREE.Vector3(...positions[i]));
            points.push(new THREE.Vector3(...positions[next]));
        }
        for (let i = 0; i < positions.length; i++) {
            const opp = (i + Math.floor(positions.length / 2)) % positions.length;
            points.push(new THREE.Vector3(...positions[i]));
            points.push(new THREE.Vector3(...positions[opp]));
        }
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [positions]);

    useFrame((state) => {
        if (ref.current) ref.current.material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
    });

    return (
        <lineSegments ref={ref} geometry={geometry}>
            <lineBasicMaterial color="#D2BE60" transparent opacity={0.3} linewidth={1} />
        </lineSegments>
    );
}

function HRScene() {
    const groupRef = useRef();
    const count = 6;
    const radius = 1.5;
    const positions = useMemo(() =>
        Array.from({ length: count }, (_, i) => {
            const angle = (i / count) * Math.PI * 2;
            return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
        }), []);

    useFrame((_, delta) => { if (groupRef.current) groupRef.current.rotation.y += delta * 0.12; });

    return (
        <group ref={groupRef} position={[0, -0.2, 0]}>
            {positions.map((pos, i) => (
                <group key={i} rotation={[0, -((i / count) * Math.PI * 2) + Math.PI, 0]}>
                    <GlassHuman position={pos} delay={i * 1.0} />
                </group>
            ))}
            <NetworkLines positions={positions} />
            {/* Central glow orb */}
            <mesh position={[0, 0.2, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={0.6} metalness={0.2} roughness={0.1} transmission={0.8} thickness={1} ior={1.5} transparent opacity={0.35} />
            </mesh>
            {/* Glow ring around center */}
            <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.5, 0.01, 8, 64]} />
                <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={0.5} transparent opacity={0.3} />
            </mesh>
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════
   2. PAYROLL — Glass Shield with Rotating Coins & Currency
   Secure payroll: shield shape + orbiting coins
   ═══════════════════════════════════════════════════════════ */

function GlassShield() {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    });

    const shieldShape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 1.2);
        shape.bezierCurveTo(0.8, 1.0, 1.0, 0.5, 1.0, 0);
        shape.bezierCurveTo(1.0, -0.5, 0.5, -1.0, 0, -1.3);
        shape.bezierCurveTo(-0.5, -1.0, -1.0, -0.5, -1.0, 0);
        shape.bezierCurveTo(-1.0, 0.5, -0.8, 1.0, 0, 1.2);
        return shape;
    }, []);

    return (
        <group ref={ref}>
            <mesh scale={0.9}>
                <extrudeGeometry args={[shieldShape, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 8 }]} />
                <meshPhysicalMaterial color="#D2BE60" metalness={0.3} roughness={0.05} transmission={0.6} thickness={0.8} ior={1.8} transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>
            {/* Shield border glow */}
            <mesh scale={0.92}>
                <extrudeGeometry args={[shieldShape, { depth: 0.01, bevelEnabled: false }]} />
                <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={0.3} wireframe transparent opacity={0.25} />
            </mesh>
        </group>
    );
}

function Coin({ position, delay, size = 0.3 }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 1.5 + delay;
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.15;
        }
    });
    return (
        <group ref={ref} position={position}>
            <mesh>
                <cylinderGeometry args={[size, size, 0.04, 32]} />
                <meshPhysicalMaterial color="#D2BE60" metalness={0.95} roughness={0.05} transparent opacity={0.85} />
            </mesh>
            {/* Dollar sign ring on coin */}
            <mesh position={[0, 0.025, 0]}>
                <torusGeometry args={[size * 0.6, 0.008, 8, 32]} />
                <meshPhysicalMaterial color="#F4D03F" metalness={0.9} roughness={0.1} emissive="#D2BE60" emissiveIntensity={0.3} />
            </mesh>
        </group>
    );
}

function PayrollScene() {
    const groupRef = useRef();
    useFrame((_, delta) => { if (groupRef.current) groupRef.current.rotation.y += delta * 0.08; });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
                <GlassShield />
            </Float>
            {/* Orbiting coins */}
            {[0, 1, 2, 3, 4].map(i => {
                const angle = (i / 5) * Math.PI * 2;
                const r = 1.5 + (i % 2) * 0.3;
                return <Coin key={i} position={[Math.cos(angle) * r, (i % 3 - 1) * 0.35, Math.sin(angle) * r]} delay={i * 1.3} size={0.2 + (i % 3) * 0.05} />;
            })}
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════
   3. STAFFING — Human Avatars with Selection Glow
   Recruitment: multiple figures, one highlighted/selected
   ═══════════════════════════════════════════════════════════ */

function SelectionGlow({ position }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            ref.current.scale.set(s, s, s);
            ref.current.material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
        }
    });
    return (
        <mesh ref={ref} position={[position[0], position[1] + 0.2, position[2]]}>
            <cylinderGeometry args={[0.35, 0.35, 0.02, 32]} />
            <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={1} transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
    );
}

function SelectionRing({ position }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            const s = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
            ref.current.scale.set(s, 1, s);
            ref.current.material.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
        }
    });
    return (
        <mesh ref={ref} position={[position[0], position[1] - 0.35, position[2]]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.35, 0.02, 8, 32]} />
            <meshPhysicalMaterial color="#F4D03F" emissive="#F4D03F" emissiveIntensity={0.8} transparent opacity={0.4} />
        </mesh>
    );
}

function StaffingScene() {
    const groupRef = useRef();
    const figurePositions = [
        [-1.8, 0, 0.3],
        [-0.9, 0, -0.2],
        [0, 0, 0],      // highlighted one
        [0.9, 0, -0.2],
        [1.8, 0, 0.3],
    ];

    useFrame((_, delta) => { if (groupRef.current) groupRef.current.rotation.y += delta * 0.06; });

    return (
        <group ref={groupRef} position={[0, -0.3, 0]}>
            {figurePositions.map((pos, i) => (
                <group key={i}>
                    <GlassHuman position={pos} delay={i * 0.8} highlighted={i === 2} />
                    {i === 2 && (
                        <>
                            <SelectionGlow position={pos} />
                            <SelectionRing position={pos} />
                            {/* Upward glow beam */}
                            <mesh position={[pos[0], pos[1] + 0.5, pos[2]]}>
                                <cylinderGeometry args={[0.01, 0.2, 1.2, 16, 1, true]} />
                                <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={0.5} transparent opacity={0.08} side={THREE.DoubleSide} />
                            </mesh>
                        </>
                    )}
                </group>
            ))}
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════
   4. WEB DEV — Floating Glass Browser Window with UI Panels
   Web interface: browser chrome + layered panels + data
   ═══════════════════════════════════════════════════════════ */

function GlassPanel({ position, size, rotation = [0, 0, 0], opacity = 0.3, emissive = false }) {
    return (
        <mesh position={position} rotation={rotation}>
            <boxGeometry args={[...size]} />
            <meshPhysicalMaterial
                color="#D2BE60" metalness={0.2} roughness={0.05} transmission={0.5} thickness={0.3} ior={1.5}
                transparent opacity={opacity}
                {...(emissive ? { emissive: "#D2BE60", emissiveIntensity: 0.3 } : {})}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

function WebDevScene() {
    const groupRef = useRef();
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
                <group>
                    {/* Main browser window */}
                    <GlassPanel position={[0, 0, 0]} size={[2.4, 1.6, 0.04]} opacity={0.25} />
                    {/* Browser top bar */}
                    <GlassPanel position={[0, 0.7, 0.03]} size={[2.4, 0.18, 0.02]} opacity={0.35} emissive />
                    {/* Dots on top bar */}
                    {[-0.95, -0.85, -0.75].map((x, i) => (
                        <mesh key={i} position={[x, 0.7, 0.06]}>
                            <sphereGeometry args={[0.03, 8, 8]} />
                            <meshPhysicalMaterial color={['#ff5f57', '#ffbd2e', '#28c840'][i]} emissive={['#ff5f57', '#ffbd2e', '#28c840'][i]} emissiveIntensity={0.5} />
                        </mesh>
                    ))}
                    {/* URL bar */}
                    <GlassPanel position={[0.2, 0.7, 0.05]} size={[1.4, 0.08, 0.01]} opacity={0.2} />

                    {/* Sidebar panel */}
                    <GlassPanel position={[-0.85, -0.1, 0.06]} size={[0.6, 1.1, 0.02]} opacity={0.2} />
                    {/* Sidebar items */}
                    {[0.2, 0, -0.2, -0.4].map((y, i) => (
                        <GlassPanel key={i} position={[-0.85, y, 0.08]} size={[0.45, 0.1, 0.005]} opacity={0.15} emissive={i === 0} />
                    ))}

                    {/* Main content cards */}
                    <GlassPanel position={[0.3, 0.15, 0.08]} size={[1.2, 0.5, 0.02]} opacity={0.2} />
                    <GlassPanel position={[0.3, -0.45, 0.08]} size={[1.2, 0.35, 0.02]} opacity={0.15} />

                    {/* Floating data elements behind */}
                    <GlassPanel position={[0.5, 0.3, -0.3]} size={[0.8, 0.5, 0.02]} opacity={0.1} rotation={[0, -0.2, 0]} />
                    <GlassPanel position={[-0.4, -0.2, -0.4]} size={[0.6, 0.4, 0.02]} opacity={0.08} rotation={[0, 0.15, 0]} />
                </group>
            </Float>
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════
   5. BPO/KPO — Glass Headset with Communication Waves
   Customer support: headset + expanding signal rings
   ═══════════════════════════════════════════════════════════ */

function SignalRing({ radius, delay }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            const t = ((state.clock.elapsedTime * 0.5 + delay) % 1);
            const scale = 1 + t * 0.8;
            ref.current.scale.set(scale, scale, scale);
            ref.current.material.opacity = 0.3 * (1 - t);
        }
    });
    return (
        <mesh ref={ref} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[radius, 0.01, 8, 32]} />
            <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={0.6} transparent opacity={0.3} />
        </mesh>
    );
}

function BPOScene() {
    const groupRef = useRef();
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
                <group>
                    {/* Headband */}
                    <mesh rotation={[0, 0, 0]}>
                        <torusGeometry args={[0.6, 0.04, 16, 32, Math.PI]} />
                        <meshPhysicalMaterial color="#D2BE60" metalness={0.4} roughness={0.05} transmission={0.5} thickness={0.5} ior={1.5} transparent opacity={0.65} />
                    </mesh>

                    {/* Left ear cup */}
                    <group position={[-0.6, 0, 0]}>
                        <mesh>
                            <sphereGeometry args={[0.2, 16, 16, 0, Math.PI]} />
                            <meshPhysicalMaterial color="#D2BE60" metalness={0.3} roughness={0.05} transmission={0.6} thickness={0.5} ior={1.5} transparent opacity={0.6} />
                        </mesh>
                        <mesh>
                            <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
                            <meshPhysicalMaterial color="#D2BE60" metalness={0.3} roughness={0.05} transmission={0.5} thickness={0.3} transparent opacity={0.5} />
                        </mesh>
                    </group>

                    {/* Right ear cup */}
                    <group position={[0.6, 0, 0]}>
                        <mesh rotation={[0, Math.PI, 0]}>
                            <sphereGeometry args={[0.2, 16, 16, 0, Math.PI]} />
                            <meshPhysicalMaterial color="#D2BE60" metalness={0.3} roughness={0.05} transmission={0.6} thickness={0.5} ior={1.5} transparent opacity={0.6} />
                        </mesh>
                        <mesh>
                            <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
                            <meshPhysicalMaterial color="#D2BE60" metalness={0.3} roughness={0.05} transmission={0.5} thickness={0.3} transparent opacity={0.5} />
                        </mesh>
                    </group>

                    {/* Microphone boom */}
                    <mesh position={[-0.45, -0.35, 0.15]} rotation={[0.3, 0, -0.5]}>
                        <cylinderGeometry args={[0.015, 0.015, 0.5, 8]} />
                        <meshPhysicalMaterial color="#D2BE60" metalness={0.5} roughness={0.1} transparent opacity={0.6} />
                    </mesh>
                    {/* Mic head */}
                    <mesh position={[-0.25, -0.55, 0.3]}>
                        <sphereGeometry args={[0.06, 12, 12]} />
                        <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={0.4} metalness={0.3} roughness={0.1} transparent opacity={0.7} />
                    </mesh>

                    {/* Signal waves from mic */}
                    <group position={[-0.25, -0.55, 0.3]}>
                        {[0, 0.33, 0.66].map((delay, i) => (
                            <SignalRing key={i} radius={0.15 + i * 0.1} delay={delay} />
                        ))}
                    </group>

                    {/* Signal waves from right ear */}
                    <group position={[0.8, 0, 0]}>
                        {[0, 0.25, 0.5, 0.75].map((delay, i) => (
                            <SignalRing key={i} radius={0.25 + i * 0.12} delay={delay} />
                        ))}
                    </group>
                </group>
            </Float>
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════
   6. TRAINING — Glass Graduation Cap with Particles
   Education: mortarboard cap + tassel + floating particles
   ═══════════════════════════════════════════════════════════ */

function GlowParticles({ count = 80 }) {
    const ref = useRef();
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 3;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 3;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
        }
        return arr;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.05;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#D2BE60" transparent opacity={0.45} sizeAttenuation />
        </points>
    );
}

function TrainingScene() {
    const groupRef = useRef();
    const tasselRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) groupRef.current.rotation.y += delta * 0.15;
        if (tasselRef.current) {
            tasselRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
                <group rotation={[0.2, 0, 0.1]}>
                    {/* Mortarboard top — flat square */}
                    <mesh position={[0, 0.35, 0]} rotation={[0, Math.PI / 4, 0]}>
                        <boxGeometry args={[1.2, 0.04, 1.2]} />
                        <meshPhysicalMaterial color="#D2BE60" metalness={0.3} roughness={0.05} transmission={0.55} thickness={0.5} ior={1.5} transparent opacity={0.55} />
                    </mesh>

                    {/* Cap body (skull cap) */}
                    <mesh position={[0, 0.15, 0]}>
                        <cylinderGeometry args={[0.5, 0.45, 0.35, 6]} />
                        <meshPhysicalMaterial color="#D2BE60" metalness={0.25} roughness={0.05} transmission={0.6} thickness={0.5} ior={1.5} transparent opacity={0.5} />
                    </mesh>

                    {/* Button on top */}
                    <mesh position={[0, 0.38, 0]}>
                        <sphereGeometry args={[0.06, 16, 16]} />
                        <meshPhysicalMaterial color="#F4D03F" emissive="#D2BE60" emissiveIntensity={0.5} metalness={0.5} roughness={0.1} />
                    </mesh>

                    {/* Tassel string */}
                    <group ref={tasselRef} position={[0, 0.38, 0]}>
                        <mesh position={[0.3, -0.15, 0]} rotation={[0, 0, -0.5]}>
                            <cylinderGeometry args={[0.01, 0.01, 0.4, 6]} />
                            <meshPhysicalMaterial color="#F4D03F" metalness={0.6} roughness={0.1} transparent opacity={0.7} />
                        </mesh>
                        {/* Tassel end */}
                        <mesh position={[0.5, -0.35, 0]}>
                            <coneGeometry args={[0.04, 0.12, 8]} />
                            <meshPhysicalMaterial color="#F4D03F" emissive="#D2BE60" emissiveIntensity={0.3} metalness={0.5} roughness={0.1} transparent opacity={0.8} />
                        </mesh>
                    </group>

                    {/* Digital learning elements — small floating screens */}
                    {[0, 1, 2, 3].map(i => {
                        const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
                        return (
                            <Float key={i} speed={1.2 + i * 0.2} floatIntensity={0.3}>
                                <mesh position={[Math.cos(angle) * 1.1, 0.1 + (i % 2) * 0.3, Math.sin(angle) * 1.1]} rotation={[0, -angle, 0]}>
                                    <boxGeometry args={[0.25, 0.18, 0.01]} />
                                    <meshPhysicalMaterial color="#D2BE60" emissive="#D2BE60" emissiveIntensity={0.2} metalness={0.2} roughness={0.1} transmission={0.4} transparent opacity={0.3} side={THREE.DoubleSide} />
                                </mesh>
                            </Float>
                        );
                    })}
                </group>
            </Float>

            {/* Glowing particles around */}
            <GlowParticles count={100} />
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════
   SHARED SCENE — Lighting + Canvas Wrapper
   ═══════════════════════════════════════════════════════════ */

function SceneLighting() {
    return (
        <>
            <ambientLight intensity={0.35} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
            <directionalLight position={[-3, -2, 3]} intensity={0.5} color="#D2BE60" />
            <pointLight position={[0, 3, 3]} intensity={0.6} color="#D2BE60" />
            <pointLight position={[0, -2, -3]} intensity={0.3} color="#8B7A2E" />
        </>
    );
}

function CanvasWrapper({ children }) {
    return (
        <Canvas
            camera={{ position: [0, 0.5, 4.5], fov: 40 }}
            style={{ width: '100%', height: '100%' }}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
        >
            <SceneLighting />
            {children}
        </Canvas>
    );
}

/* ═══════════════════════════════════════════════════════════
   EXPORTED COMPONENTS
   ═══════════════════════════════════════════════════════════ */

export function HRConsultingModel() { return <CanvasWrapper><HRScene /></CanvasWrapper>; }
export function PayrollModel() { return <CanvasWrapper><PayrollScene /></CanvasWrapper>; }
export function StaffingModel() { return <CanvasWrapper><StaffingScene /></CanvasWrapper>; }
export function WebDevModel() { return <CanvasWrapper><WebDevScene /></CanvasWrapper>; }
export function BPOModel() { return <CanvasWrapper><BPOScene /></CanvasWrapper>; }
export function TrainingModel() { return <CanvasWrapper><TrainingScene /></CanvasWrapper>; }
