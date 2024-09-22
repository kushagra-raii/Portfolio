import React, { use } from "react";
import cx from "classnames";
import Link from "next/link";
type ButtonProps = {
  text: string;
  onClick?: () => void;
  primary: boolean;
  href?: string;
  type?: "submit" | "reset" | "button";
};

const Button = ({ text, onClick, primary, href, type }: ButtonProps) => {
  const buttonClasses = cx({
    "hover:shadow-md": true,
    "hover:scale-95": true,
    "rounded-md": true,
    "text-gray-Light":!primary,
    "bg-gray-Charcoal":!primary,
    
    "cursor-pointer": true,
    "text-center": true,
    "px-3": true,
    "py-1":true,
    border:true,
    "bg-gray-Light": primary,
    // "text-gray-Charcoal": primary,
    "text-gray-Charcoal":primary,
    

  });

  if (href) {
    return (
      <div className={buttonClasses}>
        <Link href={href}>{text}</Link>
      </div>
    );
  }

  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
