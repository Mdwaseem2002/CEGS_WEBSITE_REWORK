"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Fallback timer just in case video onEnded fails or video is too short
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 6000); // Increased a bit to allow video to play

        return () => clearTimeout(timer);
    }, []);

    const handleVideoEnded = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#020617]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }} // Match elegant fade
                >
                    <video
                        ref={videoRef}
                        src="/Assets/Cinematic_Gold_Logo_Animation_Creation.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnded}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
