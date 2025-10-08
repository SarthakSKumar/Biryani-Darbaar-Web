import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, UtensilsCrossed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <div className="flex flex-col gap-20 md:gap-28">
            <motion.div
                className="max-w-3xl w-full text-center container-custom section-spacing"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Animated 404 */}
                <motion.div variants={itemVariants} className="relative mb-8">
                    {/* Large 404 */}
                    <motion.h1
                        className="text-[150px] md:text-[200px] lg:text-[250px] font-bold text-neutral-200 leading-none select-none"
                        animate={{
                            scale: [1, 1.02, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        404
                    </motion.h1>

                    {/* Floating Food Icons */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            y: [-10, 10, -10],
                            rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <UtensilsCrossed className="text-primary" size={80} strokeWidth={1.5} />
                    </motion.div>
                </motion.div>

                {/* Title & Description */}
                <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Oops! Dish Not Found
                    </h2>
                    <p className="text-xl text-neutral-600 mb-2">
                        Looks like this page wandered off to find some biryani...
                    </p>
                    <p className="text-lg text-neutral-500">
                        But don't worry, we have plenty of delicious options waiting for you!
                    </p>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-4 mb-12"
                >
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-3 h-3 bg-primary rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    {/* Home Button */}
                    <motion.button
                        onClick={() => navigate('/')}
                        className="group relative px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Home size={20} />
                            Back to Home
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-red-700"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ type: 'tween' }}
                        />
                    </motion.button>

                    {/* Menu Button */}
                    <motion.button
                        onClick={() => navigate('/Menu')}
                        className="group relative px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Search size={20} />
                            Browse Menu
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-red-50"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ type: 'tween' }}
                        />
                    </motion.button>

                    {/* Go Back Button */}
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="group px-8 py-4 text-neutral-600 hover:text-primary font-semibold text-lg transition-colors flex items-center gap-2"
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </motion.button>
                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 p-6 bg-red-50 rounded-lg border border-red-100"
                >
                    <p className="text-neutral-700 font-medium mb-2">
                        🍛 Still hungry?
                    </p>
                    <p className="text-neutral-600">
                        Check out our menu or contact us if you need help finding something specific!
                    </p>
                </motion.div>

                {/* Floating Animation Background */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-red-200 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-20, 20, -20],
                                x: [-10, 10, -10],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
