import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function FireCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const colors = ["#FF4500", "#FF8C00", "#FFD700", "#FF6347", "#FFA500"];

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add new fire particle to trail
      setTrail((prev) => [
        ...prev.slice(-30), // 🔥 Increase trail length (more particles)
        {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 30, // 🔥 Random spread
          y: e.clientY + (Math.random() - 0.5) * 30,
          size: Math.random() * 15 + 10, // 🔥 Bigger size
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 1,
          blur: Math.random() * 4 + 2, // 🔥 Add blur
        },
      ]);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) =>
        prev.map((p) => ({
          ...p,
          opacity: p.opacity - 0.05,
          y: p.y - 2, // 🔥 Make them rise faster
        })).filter((p) => p.opacity > 0)
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Fire trail */}
      {trail.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            
            zIndex: 999999,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.7 }}
        />
      ))}

      {/* Main Cursor Center */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
}
