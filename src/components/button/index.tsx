import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";
import clsx from "clsx";

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  variant: "main" | "secondary" | "button" | "none";
  type?: "button" | "reset" | "submit";
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  type = "button",
  onClick,
  variant,
}) => (
  <button
    onClick={onClick}
    className={clsx([className], {
      [styles.main]: variant === "main",
      [styles.secondary]: variant === "secondary",
      [styles.button]: variant === "button",
      [styles.none]: variant === "none",
    })}
    type={type}
  >
    {children}
  </button>
);

export default Button;
