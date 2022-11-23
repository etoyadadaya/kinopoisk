import React, {FC, HTMLProps} from "react";
import clsx from "clsx";
import styles from "./styles.scss";
import {UseFormRegisterReturn} from "react-hook-form";

interface IInputProps extends HTMLProps<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

const Input: FC<IInputProps> = ({
  children,
  className,
  onInput,
  register,
  type,
}) => {
  return (
    <div className={clsx(className, [styles.inputWrap])}>
      <label>
        <input
          type={type}
          {...register}
          onInput={onInput}
          className={styles.input}
          placeholder=" "
        />
        <div className={styles.placeholder}>{children}</div>
      </label>
    </div>
  );
};

export default Input;
