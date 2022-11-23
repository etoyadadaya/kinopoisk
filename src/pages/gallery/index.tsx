import React, {FC} from "react";

import styles from "./styles.scss";
import useRequireAuth from "../../hooks/useRequireAuth";
import Header from "../../components/header";

const Gallery: FC = () => {
  useRequireAuth("/");
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <p className={styles.aboba}>Aboba</p>
      </div>
    </>
  );
};

export default Gallery;
