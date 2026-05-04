"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  loading = false, 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-blue-500",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 focus:ring-white/20 backdrop-blur-sm",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5 focus:ring-white/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      disabled={loading}
      {...(props as any)}
    >
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      <span className={loading ? "opacity-0" : "opacity-100"}>
        {children}
      </span>
    </motion.button>
  );
}
