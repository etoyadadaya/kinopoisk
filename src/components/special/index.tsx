import React, {FC, useState} from "react";

import styles from "./styles.scss";

const Special: FC = () => {
  const [transform, setTransform] = useState(0);

  const slideRight = () => {
    if (transform <= 60) {
      setTransform(transform + 20);
      console.log(transform);
    }
  };

  const slideLeft = () => {
    if (transform > 0) {
      setTransform(transform - 20);
      console.log(transform);
    }
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <button
          onClick={slideLeft}
          className={styles.leftHandle}
        >
          <svg
            width="17"
            height="36"
            viewBox="0 0 17 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-tid="ca33cd8c"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z"
              fill="white"
            ></path>
          </svg>
        </button>
        <ul
          style={{
            transform: `translate(-${transform}%)`,
            transition: `transform .3s`,
          }}
          className={styles.carouselContainerScroll}
        >
          <li className={styles.carouselItem}>
            <img
              className={styles.carouselItemImg}
              src={
                "https://avatars.mds.yandex.net/get-ott/1652588/2a00000184194b0a85141087d8eeba3203fe/502x753"
              }
            />
            <img
              className={styles.specialHover}
              src={
                "https://avatars.mds.yandex.net/get-ott/224348/2a00000184160fe33d33d57556f6e8c39260/502x753"
              }
            />
          </li>
          <li className={styles.carouselItem}>
            <img
              className={styles.carouselItemImg}
              src={
                "https://avatars.mds.yandex.net/get-ott/1672343/2a000001849448ad1a2477c93769351a96df/502x753"
              }
            />
            <img
              className={styles.specialHover}
              src={
                "https://avatars.mds.yandex.net/get-ott/2419418/2a000001849448b2119d237e80b888a84a02/502x753"
              }
            />
          </li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
          <li className={styles.carouselItem}></li>
        </ul>
        <button
          onClick={slideRight}
          className={styles.rightHandle}
        >
          <svg
            width="17"
            height="36"
            viewBox="0 0 17 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-tid="ca33cd8c"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Special;
