"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface ButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "icon" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: "arrow" | "up-right" | "none" | React.ReactNode;
  ariaLabel?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  type = "button",
  disabled = false,
  icon = "none",
  ariaLabel,
}: ButtonProps) {
  // Height and padding tokens conforming to strict UI/UX specs
  // md: 56px height, px-7 (28px)
  // sm: 44px height, px-[18px]
  // lg: 58px height, px-8
  const sizeStyles = {
    sm: "h-[44px] px-[18px] text-[13px]",
    md: "min-h-[56px] h-[56px] px-7 text-[15px]",
    lg: "min-h-[58px] h-[58px] px-8 text-[16px]",
  };

  const iconOnlySizes = {
    sm: "w-[44px] h-[44px] p-0",
    md: "w-[48px] h-[48px] p-0",
    lg: "w-[56px] h-[56px] p-0",
  };

  const variantStyles = {
    primary:
      "bg-[#080B12] text-white hover:bg-[#1a1f2e] border border-[#080B12] shadow-sm",
    secondary:
      "bg-white text-[#080B12] border border-[#D9DDE2] hover:bg-[#F3F4F6] hover:border-[#080B12]",
    outline:
      "bg-transparent text-[#080B12] border border-[#D9DDE2] hover:bg-[#080B12] hover:text-white hover:border-[#080B12]",
    icon: "bg-white text-[#080B12] border border-[#D9DDE2] hover:bg-[#080B12] hover:text-white hover:border-[#080B12] shadow-sm",
    text: "bg-transparent text-[#080B12] hover:text-[#6F737A] p-0 h-auto border-none",
  };

  const baseStyles =
    variant === "icon"
      ? `inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${iconOnlySizes[size]} ${variantStyles[variant]}`
      : variant === "text"
      ? `inline-flex items-center gap-2 font-semibold transition-colors duration-200 cursor-pointer ${variantStyles[variant]}`
      : `group inline-flex items-center justify-center gap-2.5 font-medium rounded-full transition-all duration-200 cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]}`;

  const renderIcon = () => {
    if (icon === "arrow") {
      return (
        <ArrowRight
          size={size === "sm" ? 14 : 16}
          className="transform group-hover:translate-x-1 transition-transform duration-200 shrink-0"
        />
      );
    }
    if (icon === "up-right") {
      return (
        <ArrowUpRight
          size={size === "sm" ? 14 : 16}
          className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0"
        />
      );
    }
    if (React.isValidElement(icon)) {
      return icon;
    }
    return null;
  };

  const combinedClasses = `${baseStyles} ${
    disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...linkProps}
      >
        {children}
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={combinedClasses}
    >
      {children}
      {renderIcon()}
    </button>
  );
}

// Convenience wrapper components matching requirement 42
export function PrimaryButton(props: ButtonProps) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(props: ButtonProps) {
  return <Button {...props} variant="secondary" />;
}

export function OutlineButton(props: ButtonProps) {
  return <Button {...props} variant="outline" />;
}

export function IconButton(props: ButtonProps) {
  return <Button {...props} variant="icon" />;
}

export function TextButton(props: ButtonProps) {
  return <Button {...props} variant="text" />;
}
