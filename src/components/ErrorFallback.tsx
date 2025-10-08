import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorFallbackProps {
    message?: string;
    onRetry?: () => void;
    showRetry?: boolean;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
    message = "Oops! Something went wrong",
    onRetry,
    showRetry = true,
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] py-20 px-4">
            <motion.div
                className="flex flex-col items-center max-w-md text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Error Icon */}
                <motion.div
                    className="mb-6 text-red-500"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <AlertCircle size={64} strokeWidth={1.5} />
                </motion.div>

                {/* Error Message */}
                <motion.h3
                    className="text-2xl font-bold text-neutral-800 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {message}
                </motion.h3>

                <motion.p
                    className="text-neutral-600 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    We couldn't load the content you requested. Please check your connection and try again.
                </motion.p>

                {/* Retry Button */}
                {showRetry && onRetry && (
                    <motion.button
                        onClick={onRetry}
                        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <RefreshCw size={20} />
                        Try Again
                    </motion.button>
                )}

                {/* Decorative Elements */}
                <motion.div
                    className="mt-8 flex gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-2 h-2 bg-red-300 rounded-full"
                            animate={{
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ErrorFallback;
