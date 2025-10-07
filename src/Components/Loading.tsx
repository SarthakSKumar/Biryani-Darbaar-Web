import React from "react";
import { motion } from "framer-motion";

interface LoadingProps {
    text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] py-20">
            <motion.div
                className="flex gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className="w-4 h-4 bg-primary rounded-full"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>
            <motion.p
                className="text-xl font-semibold text-neutral-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {text}
            </motion.p>
            <motion.div
                className="mt-4 w-64 h-1 bg-neutral-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.div
                    className="h-full bg-primary"
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Loading;
