import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-background"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-8"
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
        </motion.div>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl font-bold mb-4 text-text"
        >
          Oops! Page Not Found
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-textSecondary mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default NotFound;