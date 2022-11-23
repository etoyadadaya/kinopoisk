import React, {FC} from "react";

import styles from "./styles.scss";
import Input from "../../components/input";
import Button from "../../components/button";
import {useForm} from "react-hook-form";
import useRequireNotAuth from "../../hooks/useRequireNotAuth";
import Link from "../../components/link";
import useSignIn from "../../hooks/useSignIn";

const Registration: FC = () => {
  useRequireNotAuth("/gallery");
  const signIn = useSignIn();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: "onBlur"});

  const submit = handleSubmit(data => {
    signIn({email: data.email, password: data.password});
  });

  return (
    <>
      <div className={styles.registrationRoot}>
        <form
          onSubmit={submit}
          className={styles.registrationWrapper}
        >
          <Input
            type={"text"}
            register={register("email", {
              required: "REQUIRED FIELD",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "INCORRECT DATA",
              },
            })}
          >
            Email
          </Input>
          {errors.email && (
            <div style={{color: "#ed4245"}}>
              {errors.email.message.toString()}
            </div>
          )}
          <Input
            type={"password"}
            register={register("password", {
              required: "REQUIRED FIELD",
              minLength: {
                value: 8,
                message: "LENGTH < 8",
              },
              pattern: {
                value:
                  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                message: "INCORRECT DATA",
              },
            })}
          >
            Password
          </Input>
          {errors.password && (
            <div style={{color: "#ed4245"}}>
              {errors.password.message.toString()}
            </div>
          )}
          <Button
            type={"submit"}
            className={styles.button}
            variant={"none"}
          >
            Войти
          </Button>
          <Link
            to={"/registration"}
            variant={"secondary"}
          >
            Зарегистрироваться
          </Link>
        </form>
      </div>
    </>
  );
};

export default Registration;
