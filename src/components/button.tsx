import React, { ReactNode } from "react";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  position?: "left" | "right";
  icon?: string;
}

const button: React.FC<IButtonProps> = ({
  text,
  icon,
  position,
  onClick,
  className,
  children,
}) => {
  return (
    <button className={`button ${position} ${className}`} onClick={onClick}>
      {position === "left" && <img src={icon} alt="" className="icon" />}
      <span>{children}</span>
      {position === "right" && <img src={icon} alt="" className="icon" />}
    </button>
  );
};

export default button;
