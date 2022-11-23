import React, {FC, HTMLProps} from "react";
import Button from "../button";
import {useNavigate} from "react-router-dom";

interface ILinkProps extends HTMLProps<HTMLElement> {
  variant: "main" | "secondary" | "button" | "none";
  to: string;
}

const Link: FC<ILinkProps> = ({variant, className, to, children}) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(to);

  return (
    <Button
      className={className}
      onClick={handleClick}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default Link;
