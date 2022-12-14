import React, {FC} from "react";
import Header from "../../components/header";

import styles from "./styles.scss";
import Footer from "../../components/footer";
import {Link} from "react-router-dom";
import Carousel from "../../components/carousel";
import useGetMovies from "../../hooks/useGetMovies";
import Special from "../../components/special";
import Button from "../../components/button";

const Main: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.filmsCoverRoot}>
          <div className={styles.filmsCoverRow}>
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/239697/2a00000184332bae239ddba9f23b30436858/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/224348/2a00000181251bcfd826ce043197ba1651f5/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1672343/2a0000017a456c3d040751b5020a183cbf14/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e3c80a98752efb4b023bf1aed80/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2419418/2a000001847baa92d89b9025c2862d56c873/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2385704/2a00000183f93c2bea9235cc9ce78b1752f9/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2419418/2a000001845e4c4132e5575241a1ef0a6753/640x360"
              }
            />
          </div>
          <div className={styles.filmsCoverRow}>
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1672343/2a00000173bf955fb80e6a61b438f25e541b/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/239697/2a0000017e4095096a12d97324a7607c8b08/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1652588/2a0000018383a59e48417d01be76ba656a4a/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/223007/2a0000018486db0a2970de2597ea7a27398b/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/223007/2a00000183cd0859ceb20d7b6b37f293d89d/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/224348/2a00000176f1c743efe3d925e7d13134d267/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/239697/2a00000184332bae239ddba9f23b30436858/640x360"
              }
            />
          </div>
          <div className={styles.filmsCoverRow}>
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1672343/2a00000181dfbe4c4da4e312c77841a751d2/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1672343/2a00000176467320ddc898f1d435637e8297/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1531675/2a0000018444767d513c2b986ee4bf434194/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/212840/2a00000184326b91354fc01aaca4faabdbbe/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/224348/2a00000183a4782a1f0d3dea2019977aa19e/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1534341/2a0000018414b66f18b8944373a661c08707/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1672343/2a00000181dfbc0f0f58e32d30ffb3858832/640x360"
              }
            />
          </div>
          <div className={styles.filmsCoverRow}>
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/200035/2a0000017f31d7108fa2c5aa4d89f3b9aa03/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/239697/2a000001838ebb91b0f7b7f44874bf5ae320/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1534341/2a00000183c6cf70104ce06a3a2fa6b97f15/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/239697/2a0000017f4e3669c5eafef8a995bee11be4/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2439731/2a00000180b9d0d1315574eb49664ed12fd5/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/224348/2a0000017618621f4cc67ee1009067626bb8/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/374297/2a000001840ad49f745c1e2b2a1a438499c0/640x360"
              }
            />
          </div>
          <div className={styles.filmsCoverRow}>
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/212840/2a0000017c98a9ea762f93d5140d72322f7f/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/212840/2a0000016f13253813d444ec024b0499b787/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/236744/2a0000018047a6cf1d99b3d6c67243edb539/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1534341/2a00000183ac2e71ea789b1fedbf66cff7e2/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1652588/2a00000180b9ee76fdf0b5b09f642d451ff8/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1531675/2a00000170cd8de3075f04b119ded06a7e50/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2385704/2a00000180479b45bc662f63629a474224c5/640x360"
              }
            />
          </div>
          <div className={styles.filmsCoverRow}>
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/224348/2a00000184768c3b9cfc0c5aacb4642b8c3d/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2419418/2a0000017603e606a262312e4832ec242fb9/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/223007/2a00000173c31dc44be9e5760ea4aae0a9b8/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e3c6ad8f2df6df5e5857e61101b/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2439731/2a0000017062fe735535e69953f2549b9640/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e3c7152e1ec1534220469adf4b8/640x360"
              }
            />
            <img
              className={styles.filmsCoverPoster}
              src={
                "https://avatars.mds.yandex.net/get-ott/1672343/2a000001725c9169be8f63f8f05b129d2b36/640x360"
              }
            />
          </div>
        </div>
        <div className={styles.onBoardRoot}>
          <div className={styles.onBoardContent}>
            <div className={styles.onBoardHeader}>
              <svg
                className={styles.logo}
                fill="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    d="M15.003 35.352h5.151V5.766h-7.492c-7.535 0-11.494 3.874-11.494 9.578 0 4.555 2.171 7.237 6.045 10.004L.487 35.352h5.577l7.492-11.196-2.597-1.745c-3.15-2.129-4.683-3.79-4.683-7.365 0-3.15 2.214-5.279 6.428-5.279h2.3v25.585Zm99.317.426c2.341 0 4.002-.426 5.236-1.32v-4.13c-1.277.895-2.809 1.448-4.938 1.448-3.618 0-5.108-2.81-5.108-7.237 0-4.64 1.83-7.024 5.151-7.024 1.958 0 3.874.681 4.895 1.32v-4.3c-1.064-.596-2.937-1.022-5.449-1.022-6.47 0-9.834 4.64-9.834 11.154 0 7.152 3.278 11.11 10.047 11.11Zm-31.672-1.873v-4.13c-1.575 1.065-4.215 2.001-6.684 2.001-3.704 0-5.108-1.745-5.321-5.321H82.86v-2.682c0-7.45-3.278-10.26-8.344-10.26-6.173 0-9.11 4.726-9.11 11.196 0 7.45 3.66 11.069 10.131 11.069 3.236 0 5.62-.852 7.11-1.873ZM36.246 13.939v8.472h-6.769v-8.472h-5.066v21.413h5.066v-8.94h6.769v8.94h5.066V13.94h-5.066ZM64.172 31.35h-2.256V13.94H47.144v1.83c0 5.236-.34 12.005-2.128 15.58H43.44v8.898h4.683v-4.896H59.49v4.896h4.683V31.35Zm34.653 4.002h5.746l-8.13-11.536 7.151-9.877h-5.108l-7.152 9.877v-9.877h-5.066v21.413h5.066V24.837l7.493 10.515ZM74.431 17.515c2.511 0 3.278 2.086 3.278 4.768v.426h-7.067c.128-3.406 1.362-5.194 3.789-5.194ZM56.85 31.35h-7.152c1.405-3.235 1.788-9.067 1.788-12.77v-.64h5.364v13.41Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M130.746 5.206c-2.287 3.32-2.287 8.055-2.287 17.525 0 9.471 0 14.206 2.287 17.526a12.3 12.3 0 0 0 2.649 2.794c3.147 2.412 7.636 2.412 16.615 2.412h59.864c8.979 0 13.469 0 16.616-2.412a12.344 12.344 0 0 0 2.649-2.794c2.286-3.32 2.286-8.055 2.286-17.526 0-9.47 0-14.206-2.286-17.525a12.344 12.344 0 0 0-2.649-2.794C223.343 0 218.853 0 209.874 0H150.01c-8.979 0-13.468 0-16.615 2.412a12.3 12.3 0 0 0-2.649 2.794Zm63.551 8.335c-4.227 0-7.303 2.58-7.934 7.285h-2.52V13.89h-4.412v17.532h4.412v-7.32h2.483c.482 4.95 3.633 7.669 7.971 7.669 4.745 0 8.044-3.242 8.044-9.132 0-5.856-3.299-9.098-8.044-9.098Zm0 14.953c-2.336 0-3.485-1.777-3.485-5.82 0-4.078 1.149-5.856 3.485-5.856 2.335 0 3.484 1.777 3.484 5.82 0 4.079-1.149 5.856-3.484 5.856Zm-52.696 2.928V13.89h14.532v17.532h-4.411V17.166h-5.709v14.256h-4.412Zm17.762 0v-3.59s.371.314 1.001.314c1.446 0 1.706-1.15 1.854-4.88l.371-9.376h12.641v17.532h-4.412V17.166h-4.485l-.26 6.274c-.222 5.821-1.186 8.33-4.967 8.33-1.038 0-1.743-.348-1.743-.348Zm59.261-.732c-1.075.732-2.521 1.08-4.56 1.08-5.894 0-8.748-3.24-8.748-9.096 0-5.333 2.928-9.133 8.563-9.133 2.187 0 3.818.35 4.745.837v3.52c-.89-.522-2.558-1.08-4.263-1.08-2.892 0-4.486 1.952-4.486 5.751 0 3.625 1.298 5.925 4.449 5.925 1.853 0 3.188-.453 4.3-1.185v3.381Z"
                    fillRule="evenodd"
                    fill="url(#YandexPlusLogo_gradient)"
                  ></path>
                  <path
                    d="M141.603 13.89v17.532h4.411V17.166h5.709v14.256h4.412V13.89h-14.532ZM159.365 27.832v3.59s.704.348 1.742.348c3.782 0 4.745-2.51 4.968-8.33l.259-6.274h4.486v14.256h4.411V13.89H162.59l-.371 9.376c-.148 3.73-.407 4.88-1.853 4.88-.63 0-1.001-.314-1.001-.314ZM194.298 13.541c-4.226 0-7.303 2.58-7.933 7.285h-2.521V13.89h-4.411v17.532h4.411v-7.32h2.484c.482 4.95 3.633 7.668 7.97 7.668 4.745 0 8.044-3.241 8.044-9.132 0-5.856-3.299-9.097-8.044-9.097Zm0 14.953c-2.335 0-3.485-1.778-3.485-5.82 0-4.079 1.15-5.857 3.485-5.857 2.336 0 3.485 1.778 3.485 5.821 0 4.078-1.149 5.856-3.485 5.856ZM214.066 31.77c2.039 0 3.484-.348 4.56-1.08v-3.381c-1.113.732-2.447 1.185-4.301 1.185-3.151 0-4.448-2.3-4.448-5.925 0-3.8 1.594-5.752 4.485-5.752 1.706 0 3.374.558 4.264 1.08v-3.52c-.927-.487-2.558-.836-4.746-.836-5.634 0-8.563 3.8-8.563 9.132 0 5.856 2.855 9.097 8.749 9.097Z"
                    fill="#fff"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="YandexPlusLogo_gradient"
                    x1="128.459"
                    y1="45.593"
                    x2="224.38"
                    y2="-7.278"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset=".036"
                      stopColor="#FF5C00"
                    ></stop>
                    <stop
                      offset=".208"
                      stopColor="#EA507C"
                    ></stop>
                    <stop
                      offset=".391"
                      stopColor="#B941EF"
                    ></stop>
                    <stop
                      offset=".651"
                      stopColor="#5B61FF"
                    ></stop>
                    <stop
                      offset=".948"
                      stopColor="#21BEE7"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h1 className={styles.textRootH1}>
                ???????????? ?? ?????????????? ???? ???????????????? ???????? ????????????
              </h1>
              <h2 className={styles.textRootH2}>?????????????????? ???? ?????????? ????????</h2>
              <p className={styles.textRootP}>
                ?????????????????? ?? ?????????? ????????????, ?????????????? ???? 3 ?????? ???? ?????????????? ????????????????
              </p>
            </div>
          </div>
          <div className={styles.buttonWrap}>
            <Button variant="main">?????????????????????? ?????????????????? ???? ?????????? ????????</Button>
          </div>
          <div className={styles.roll}>
            <p className={styles.rollText}>?????????????????? ?? ????????????????</p>
          </div>
        </div>
      </div>
      <Carousel
        movies={useGetMovies("films/top?type=TOP_250_BEST_FILMS&page=1")}
        title={"TOP 250: 1"}
      />
      <Carousel
        movies={useGetMovies("films/top?type=TOP_250_BEST_FILMS&page=2")}
        title={"TOP 250: 2"}
      />
      <Carousel
        movies={useGetMovies("films/top?type=TOP_250_BEST_FILMS&page=3")}
        title={"TOP 250: 3"}
      />
      <Carousel
        movies={useGetMovies("films/top?type=TOP_250_BEST_FILMS&page=4")}
        title={"TOP 250: 4"}
      />
      <Special />
      <div className={styles.yaPlusRoot}>
        <div className={styles.yaPlusHeader}>
          <h2 className={styles.h2}>???????? ?? ??????????</h2>
        </div>
        <div className={styles.yaPlusContent}>
          <div className={styles.yaPlusLeft}>
            <div className={styles.yaPlusMusic}>
              <div className={styles.yaPlusIcon}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="YaPlusUnitsIcon_YaPlusUnitsIcon-Logo__v5HBI"
                  data-tid="4b364b42"
                >
                  <path
                    d="M4.8557 2.3586A12.0001 12.0001 0 0 1 10.92.0488v3.621a8.4001 8.4001 0 0 0 1.4743 16.7211 8.4005 8.4005 0 0 0 7.7478-6.3254 8.3998 8.3998 0 0 0 .0972-3.7008L23.28 7.9201l-.002-.0197A12 12 0 1 1 4.8557 2.3586Z"
                    fill="#FCCA00"
                  ></path>
                  <path
                    d="m20.9872 4.048.0127.032-2.032 3.2273a8.4408 8.4408 0 0 0-2.888-2.6517V12c0 2.2533-1.8267 4.08-4.08 4.08-2.2533 0-4.08-1.8267-4.08-4.08 0-2.2533 1.8267-4.08 4.08-4.08a4.061 4.061 0 0 1 2.28.696V.2163c2.6489.5095 4.9879 1.89 6.7073 3.8318Z"
                    fill="#FC3F1D"
                  ></path>
                </svg>
                <svg
                  width="81px"
                  height="24px"
                  viewBox="0 0 81 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="YaPlusUnitsIcon-Label"
                  data-tid="e2ab1c82"
                >
                  <path
                    d="M6.364 21.1297h2.7462l3.7496-13.8633v13.8633h3.1424V2.7773h-4.2778L8.0275 16.3766 4.3306 2.7773H0v18.3524h2.6142V7.2664L6.364 21.1297ZM20.3343 25.2227c2.9311 0 4.0137-2.0861 4.9115-4.806l4.1458-12.5694h-3.0367l-2.9311 9.9816-2.9311-9.9816h-3.3008l4.5683 13.8633c-.3433.6338-.845 1.0299-1.7164 1.0299-.5809 0-1.0827-.1849-1.4259-.5282v2.5615s.4753.4489 1.7164.4489ZM33.9669 18.9116c-1.6108 0-3.1952-.581-4.0402-1.2147v2.5614c.6074.5017 2.1389 1.1355 4.4099 1.1355 3.3536 0 5.1228-1.5052 5.1228-4.1722 0-1.558-.977-2.6143-2.7198-2.9839 1.6371-.5282 2.3237-1.69 2.3237-3.1688 0-2.2445-1.7692-3.4856-4.6211-3.4856-2.0597 0-3.4064.6337-4.1722 1.109v2.5615c.845-.5546 2.0069-1.1883 3.7233-1.1883 1.1619 0 1.9013.5545 1.9013 1.5315 0 1.0299-.6338 1.5844-1.9277 1.5844h-1.9805v2.3766h1.9805c1.6108 0 2.2445.4753 2.2445 1.6372 0 1.0562-.7658 1.7164-2.2445 1.7164ZM41.5692 7.8473v13.2824h4.7795c3.0896 0 5.2813-1.5844 5.2813-4.7003 0-2.9575-1.9541-4.5155-5.2284-4.5155h-1.69V7.8473h-3.1424Zm11.2227 0v13.2824h3.1423V7.8473h-3.1423Zm-6.628 10.8002h-1.4523v-4.2514h1.5315c1.3467 0 2.1389.6073 2.1389 2.1389s-.8714 2.1125-2.2181 2.1125ZM66.3529 21.1297h3.5649l-5.0436-7.1561 4.4362-6.1263h-3.1687l-4.4363 6.1263V7.8473h-3.1423v13.2824h3.1423v-6.5224l4.6475 6.5224ZM80.6119 12.0723c0-3.2215-1.6372-4.4362-4.9644-4.4362-2.0861 0-3.7233.6602-4.6739 1.2147v2.6142c.845-.6337 2.6934-1.3203 4.3042-1.3203 1.5052 0 2.1917.5281 2.1917 1.9541v.7393h-.5017c-4.8059 0-6.9448 1.5844-6.9448 4.2778 0 2.6935 1.6372 4.1986 4.0665 4.1986 1.8485 0 2.6407-.6073 3.248-1.2411h.132c.0265.3433.1321.7922.2377 1.0563h3.0631a33.4388 33.4388 0 0 1-.1584-3.248v-5.8094Zm-3.1424 5.8886c-.396.581-1.1354 1.0563-2.2445 1.0563-1.3203 0-1.9805-.7922-1.9805-1.9805 0-1.5579 1.0827-2.1125 3.7761-2.1125h.4489v3.0367Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <h3 className={styles.yaPlusMusicHeader}>
                ???????????? ???????????? ?? ????????????
              </h3>
              <p className={styles.yaPlusMusicText}>
                ???????????????? ???????????? ???? ???????????? ?????????????????????? ?? ???????????????????? ?? ???????????? ??
                ?????????????? ????????????????.
              </p>
            </div>
            <div className={styles.yaPlusWrap}>
              <div className={styles.yaPlusGo}>
                <div className={styles.yaPlusIcon}>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="YaPlusUnitsIcon_YaPlusUnitsIcon-Logo__v5HBI"
                    data-tid="49491687"
                  >
                    <g clipPath="url(#yataxilogo-clippath)">
                      <path
                        d="M24-.0005H0v12h24v-12Z"
                        fill="url(#yataxilogo_linear1)"
                      ></path>
                      <path
                        d="M24 11.9995H12v12h12v-12Z"
                        fill="url(#yataxilogo_linear2)"
                      ></path>
                      <path
                        d="M12 11.9995H0v12h12v-12Z"
                        fill="url(#yataxilogo_radial1)"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="yataxilogo_linear1"
                        x1="0"
                        y1="-.0005"
                        x2="17.6355"
                        y2="38.6117"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FCE000"></stop>
                        <stop
                          offset=".4722"
                          stopColor="#FAAA00"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#FCE000"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="yataxilogo_linear2"
                        x1="18.8382"
                        y1="1.2329"
                        x2="24.2644"
                        y2="24.3321"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEFEFE"></stop>
                        <stop
                          offset=".2705"
                          stopColor="#F9F8F7"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#EAE3CF"
                        ></stop>
                      </linearGradient>
                      <radialGradient
                        id="yataxilogo_radial1"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(-87.02 26.4947 8.5947) scale(28.1952)"
                      >
                        <stop
                          offset=".4039"
                          stopColor="#302F28"
                        ></stop>
                        <stop
                          offset=".5664"
                          stopColor="#282724"
                        ></stop>
                        <stop
                          offset=".6887"
                          stopColor="#272623"
                        ></stop>
                        <stop
                          offset=".8909"
                          stopColor="#242321"
                        ></stop>
                      </radialGradient>
                      <clipPath id="yataxilogo-clippath">
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="81px"
                    height="24px"
                    viewBox="0 0 81 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="YaPlusUnitsIcon-Label"
                    data-tid="fe4e6447"
                  >
                    <path
                      d="M6.812 18.8511c-2.47 0-3.614-2.314-3.614-6.838 0-4.654 1.378-6.864 4.628-6.864 1.638 0 3.172.572 4.212 1.222V3.849c-.884-.65-2.496-1.144-4.368-1.144C2.704 2.705 0 6.241 0 12.013c0 5.928 2.47 9.282 6.734 9.282 4.134 0 6.318-2.652 6.318-7.228v-2.912H6.604v2.444h3.302v.546c0 2.886-.754 4.706-3.094 4.706ZM20.6255 7.697c-3.406 0-5.772 2.4181-5.772 6.8121 0 4.368 2.366 6.786 5.772 6.786s5.772-2.418 5.772-6.812c0-4.368-2.366-6.786-5.772-6.786Zm0 11.1541c-1.716 0-2.574-1.326-2.574-4.342 0-3.042.858-4.368 2.574-4.368 1.716 0 2.574 1.326 2.574 4.342 0 3.042-.858 4.368-2.574 4.368Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className={styles.yaPlusLogoHeader}>
                  10% ?????????????? ?????????????? ?? ??????????????
                </h3>
                <p className={styles.yaPlusLogoText}>
                  ?? ???????????? ??????????????????, ????????????????+?? ?? Ultima ?? ????????????????????
                </p>
              </div>
              <div className={styles.yaPlusDrive}>
                <div className={styles.yaPlusIcon}>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="YaPlusUnitsIcon_YaPlusUnitsIcon-Logo__v5HBI"
                    data-tid="bb26d38f"
                  >
                    <g clipPath="url(#yadrivelogo-clippath)">
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#E3E3E3"
                      ></rect>
                      <path
                        fill="#E3E3E3"
                        d="M0 0h24v24H0z"
                      ></path>
                      <path
                        d="M20.1991 8.8694c0-4.8197-2.0606-7.4798-5.29-8.8694H.0011v3.9098a12.657 12.657 0 0 1 4.0935-.6651c9.6489 0 9.6269 10.3114 2.9719 16.9664C5.3087 21.9689 3.589 23.1755 1.9818 24h8.6861c5.7137-3.4558 9.5312-9.2003 9.5312-15.1306Z"
                        fill="url(#yadrivelogo-linear1)"
                      ></path>
                      <path
                        d="M4.0935 3.2447A12.656 12.656 0 0 0 0 3.91v20.0899h1.981c1.6072-.8243 3.3266-2.0311 5.0846-3.7889 6.6548-6.655 6.6768-16.9662-2.972-16.9662Z"
                        fill="#161616"
                      ></path>
                      <path
                        d="M4.0935 3.2447A12.656 12.656 0 0 0 0 3.91v20.0899h1.981c1.6072-.8243 3.3266-2.0311 5.0846-3.7889 6.6548-6.655 6.6768-16.9662-2.972-16.9662Z"
                        fill="url(#yadrivelogo-linear2)"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="yadrivelogo-linear1"
                        x1="20.1991"
                        y1="12.0002"
                        x2=".0011"
                        y2="12.0002"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4040F9"></stop>
                        <stop
                          offset="1"
                          stopColor="#0101F7"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="yadrivelogo-linear2"
                        x1="-2.4484"
                        y1="14.8624"
                        x2="12.2442"
                        y2="10.9255"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          stopColor="#CADEF2"
                          stopOpacity=".2"
                        ></stop>
                        <stop
                          offset=".0206"
                          stopColor="#C3D6EA"
                          stopOpacity=".1959"
                        ></stop>
                        <stop
                          offset=".167"
                          stopColor="#96A4B2"
                          stopOpacity=".1666"
                        ></stop>
                        <stop
                          offset=".3143"
                          stopColor="#6F7982"
                          stopOpacity=".1371"
                        ></stop>
                        <stop
                          offset=".4595"
                          stopColor="#4F555B"
                          stopOpacity=".1081"
                        ></stop>
                        <stop
                          offset=".602"
                          stopColor="#36393D"
                          stopOpacity=".0796"
                        ></stop>
                        <stop
                          offset=".7413"
                          stopColor="#242627"
                          stopOpacity=".0517"
                        ></stop>
                        <stop
                          offset=".8757"
                          stopColor="#1A1A1A"
                          stopOpacity=".0249"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#161616"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="yadrivelogo-clippath">
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="none"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="81px"
                    height="24px"
                    viewBox="0 0 81 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="YaPlusUnitsIcon-Label"
                    data-tid="eb70d6ef"
                  >
                    <path
                      d="M2.984 24.0904v-3.8289h9.2158v3.8289h2.9839v-6.3111h-1.7164V1.9092H2.7728l-.2641 7.5522c-.132 4.357-.4753 6.9184-1.3203 8.3179H0v6.3111H2.984ZM5.3078 9.8839l.1848-5.4925h4.7795v13.3879H4.1987c.5545-1.2675.977-3.5384 1.109-7.8954ZM20.2102 6.9792h-2.9047v17.1112h3.1423v-5.3868c.7922 1.1882 1.9541 1.822 3.3008 1.822 3.0631 0 5.1756-2.4558 5.1756-6.9184 0-4.4363-2.0597-6.892-5.0172-6.892-1.4787 0-2.6934.6865-3.5384 1.9804l-.1584-1.7164Zm2.7462 11.0642c-1.6636 0-2.5086-1.3467-2.5086-4.4098 0-3.0896.8978-4.4363 2.667-4.4363 1.7165 0 2.5615 1.3467 2.5615 4.4099 0 3.0895-.8979 4.4362-2.7199 4.4362ZM40.8242 11.2042c0-3.2216-1.6372-4.4363-4.9644-4.4363-2.0861 0-3.7233.6602-4.6739 1.2147v2.6142c.845-.6337 2.6934-1.3203 4.3042-1.3203 1.5052 0 2.1917.5282 2.1917 1.9541v.7394h-.5017c-4.8059 0-6.9449 1.5843-6.9449 4.2778 0 2.6934 1.6372 4.1986 4.0666 4.1986 1.8484 0 2.6406-.6074 3.248-1.2411h.132c.0264.3433.132.7922.2377 1.0562h3.0631a33.4368 33.4368 0 0 1-.1584-3.2479v-5.8094Zm-3.1424 5.8886c-.3961.5809-1.1355 1.0562-2.2445 1.0562-1.3203 0-1.9805-.7922-1.9805-1.9804 0-1.558 1.0827-2.1125 3.7761-2.1125h.4489v3.0367ZM48.7112 5.2364c2.4822 0 3.7232-1.4788 3.7232-3.3272h-2.6406c0 .8714-.4225 1.3203-1.0826 1.3203-.713 0-1.1883-.4225-1.1883-1.3203h-2.6406c0 1.8748 1.2939 3.3272 3.8289 3.3272Zm-5.3605 1.7428v13.2823h2.7198l4.8588-8.2123v8.2123h3.0631V6.9792h-2.7198l-4.8588 8.2123V6.9792h-3.0631ZM61.8596 20.2615c3.116 0 4.9644-1.3203 4.9644-3.8553 0-1.7428-1.0562-2.7462-2.8255-3.0631 1.426-.3961 2.3238-1.3995 2.3238-2.9839 0-2.271-1.5052-3.38-4.4099-3.38h-5.2812v13.2823h5.2284Zm-.3961-10.9058c1.1355 0 1.7692.4754 1.7692 1.4788 0 .9242-.6865 1.4787-1.8748 1.4787h-1.5844V9.3557h1.69Zm.0528 5.2549c1.3468 0 2.0597.4753 2.0597 1.5844 0 1.2147-.7922 1.69-2.0597 1.69h-1.7428v-3.2744h1.7428Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className={styles.yaPlusLogoHeader}>
                  10% ?????????????? ?????????????? ???? ??????????????????
                </h3>
                <p className={styles.yaPlusLogoText}>
                  ???? ?????????????? ???? ???????????? ????????????
                </p>
              </div>
            </div>
            <div className={styles.yaPlusMarket}>
              <div className={styles.yaPlusIcon}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="YaPlusUnitsIcon_YaPlusUnitsIcon-Logo__v5HBI"
                  data-tid="3b6179c7"
                >
                  <g clipPath="url(#yamarketlogo-clippath)">
                    <path
                      d="M0 0h24v24H0V0Z"
                      fill="url(#yamarketlogo-linear)"
                    ></path>
                    <path
                      d="m0 20.7865 5.7288-6.8379-1.403 5.3548 4.3473 1.5749 6.4591-9.2073-1.4151 5.2652 3.5217 2.0379L24 12.2073V6.639l-4.7951 4.804 1.0641-6.0468-4.4331-1.6179-6.3754 9.0965.6347-4.1283-3.4736-2.0033L0 14.6388v6.1477Z"
                      fill="#000"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="yamarketlogo-linear"
                      x1="12"
                      y1="-5.711"
                      x2="12"
                      y2="26.2782"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE55B"></stop>
                      <stop
                        offset="1"
                        stopColor="#FC0"
                      ></stop>
                    </linearGradient>
                    <clipPath id="yamarketlogo-clippath">
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="none"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="81px"
                  height="24px"
                  viewBox="0 0 81 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="YaPlusUnitsIcon-Label"
                  data-tid="f9111107"
                >
                  <path
                    d="M6.364 21.2615h2.7462l3.7496-13.8633v13.8633h3.1424V2.9092h-4.2778L8.0275 16.5084 4.3306 2.9092H0v18.3523h2.6142V7.3982L6.364 21.2615ZM28.573 12.2042c0-3.2216-1.6372-4.4363-4.9644-4.4363-2.0861 0-3.7233.6602-4.6739 1.2147v2.6142c.845-.6337 2.6935-1.3203 4.3042-1.3203 1.5052 0 2.1918.5281 2.1918 1.9541v.7394h-.5018c-4.8059 0-6.9448 1.5843-6.9448 4.2778 0 2.6934 1.6372 4.1986 4.0666 4.1986 1.8484 0 2.6406-.6074 3.2479-1.2411h.1321c.0264.3433.132.7922.2376 1.0562h3.0631a33.4368 33.4368 0 0 1-.1584-3.2479v-5.8094Zm-3.1423 5.8886c-.3961.5809-1.1355 1.0562-2.2446 1.0562-1.3203 0-1.9804-.7922-1.9804-1.9804 0-1.558 1.0826-2.1125 3.7761-2.1125h.4489v3.0367ZM34.0042 7.9792h-2.9047v17.1112h3.1424v-5.3868c.7922 1.1882 1.9541 1.822 3.3008 1.822 3.0631 0 5.1756-2.4558 5.1756-6.9184 0-4.4363-2.0597-6.892-5.0172-6.892-1.4787 0-2.6934.6865-3.5384 1.9804l-.1585-1.7164Zm2.7463 11.0642c-1.6636 0-2.5086-1.3467-2.5086-4.4098 0-3.0896.8978-4.4363 2.667-4.4363 1.7164 0 2.5614 1.3467 2.5614 4.4099 0 3.0895-.8978 4.4362-2.7198 4.4362ZM52.6083 21.2615h3.5648l-5.0436-7.1561 4.4363-6.1262H52.397l-4.4362 6.1262V7.9792h-3.1424v13.2823h3.1424v-6.5223l4.6475 6.5223ZM66.7439 20.3637v-2.5614c-.9771.6602-2.6143 1.2411-4.1458 1.2411-2.2974 0-3.1688-1.0827-3.3008-3.3008h7.5786V14.079c0-4.621-2.0333-6.3639-5.1756-6.3639-3.8289 0-5.651 2.9311-5.651 6.9449 0 4.6211 2.271 6.8656 6.2847 6.8656 2.0069 0 3.4856-.5281 4.4099-1.1619Zm-5.0964-10.1664c1.5579 0 2.0332 1.2939 2.0332 2.9575v.2641h-4.3834c.0792-2.1125.845-3.2216 2.3502-3.2216ZM78.0546 10.4614V7.9792H67.5185v2.4822h3.6969v10.8001h3.1423V10.4614h3.6969Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <h3 className={styles.yaPlusLogoHeader}>???? 3% ?????????????? ??????????????</h3>
              <p className={styles.yaPlusLogoText}>
                ???? ?????????????? ?????????????? ???? ?????????????????????? ????????????????
              </p>
            </div>
          </div>
          <div className={styles.yaPlusRight}>
            <div className={styles.yaPlusAnimation}>
              <div className={styles.yaPlusPhone}>
                <img
                  className={styles.yaPlusPhone}
                  src="https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/_next/static/media/phone@2x.8f2dc25f.png"
                />
              </div>
              <div className={styles.yaPlusAirPodLeft}>
                <img
                  className={styles.yaPlusAirPodLeft}
                  src="https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/_next/static/media/air-pods-left.59d26711.png"
                />
              </div>
              <div className={styles.yaPlusAirPodRight}>
                <img
                  className={styles.yaPlusAirPodRight}
                  src="https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/_next/static/media/air-pods-right.570635c9.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Button variant="main">?????????????????????? ?????????????????? ???? ?????????? ????????</Button>
        </div>
      </div>
      <div className={styles.onBoardingDevices}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.h2}>???????????????? ???????? ???????? ?? ?? ????????????</h2>
          <p className={styles.textRootDevices}>
            ?????????????? ???? ???????????????????? ?? ???????????????????? ?? ???????? ???? ?????????? ???? ?????????????????? ??????
            ????????????????.
          </p>
        </div>
        <div className={styles.onBoardingDevicesContent}>
          <div>
            <div className={styles.onBoardingDevicesTVRoot}>
              <h3 className={styles.h3}>???? ????????????????????</h3>
              <div className={styles.onBoardingDevicesGrid}>
                <Link
                  className={styles.DevicesGridYandex}
                  to="/"
                >
                  <svg
                    className={styles.V5VOOYandex}
                    width="30rem"
                    height="30rem"
                    viewBox="0 0 300 300"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    data-tid="260c5cdb"
                  >
                    <path
                      d="M6.18402 126.217C5.92639 123.898 8.15914 122.009 13.1399 119.862L43.4538 107.496C48.4345 105.865 54.1023 106.036 59.3407 108.183L135.684 148.115C138.26 149.661 138.775 150.863 138.947 151.808C138.947 151.808 139.891 169.927 139.806 170.872C139.462 173.706 137.487 174.908 135.512 175.767L104.94 189.077H104.854C98.8432 191.396 91.8014 190.967 85.6184 187.618C85.6184 187.618 11.5083 147.686 10.9071 147.342C7.64389 145.539 7.12864 142.533 6.95689 140.644L6.18402 126.217Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M139.114 154.641C139.2 156.272 137.139 157.904 135.25 158.763L103.82 172.503C97.6368 175.251 90.1657 174.821 83.725 171.386L10.3019 131.884C10.3019 131.884 10.216 131.884 10.216 131.798C7.8115 130.51 6.69513 129.05 6.4375 128.105"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M138.935 151.893C139.02 153.525 136.874 155.328 134.898 156.187L103.468 169.927C97.2852 172.675 89.8141 172.246 83.3735 168.811L9.95031 129.308C9.95031 129.308 9.86444 129.308 9.86444 129.222C7.45994 127.934 6.34356 126.474 6.08594 125.53"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M116.106 174.049L123.749 170.7C124.522 170.357 125.037 170.786 125.037 171.301L125.209 172.589C125.295 173.448 125.037 174.049 124.264 174.393L116.02 178C115.591 178.171 115.161 177.914 115.076 177.484L114.904 175.939C114.818 175.08 115.333 174.393 116.106 174.049Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M123.31 170.786L123.396 171.817C123.568 172.847 123.568 173.191 122.452 173.62L114.895 176.883"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M109.917 177.828L110.261 177.656C110.519 177.57 110.862 177.742 110.862 178L110.948 178.429C111.034 178.944 110.776 179.374 110.261 179.545L109.832 179.717C109.574 179.803 109.316 179.631 109.316 179.374L109.23 178.858C109.23 178.429 109.488 178 109.917 177.828Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M115.85 117.887L115.678 116.341C115.506 114.366 111.47 113.078 107.778 113.078C104.171 113.078 100.392 114.881 100.564 116.857L100.822 118.402C100.822 118.402 101.423 121.408 108.808 121.322C116.108 121.064 115.85 117.887 115.85 117.887Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M115.684 116.169C115.856 118.145 111.906 119.69 108.127 119.776C104.435 119.776 100.828 118.66 100.656 116.685"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M144.62 104.404L144.448 102.859C144.276 100.883 140.24 99.5953 136.547 99.5953C132.941 99.5953 129.162 101.399 129.334 103.374L129.42 104.92C129.42 104.92 130.021 108.011 137.406 107.839C144.877 107.496 144.62 104.404 144.62 104.404Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M144.434 102.601C144.606 104.576 140.656 106.122 136.877 106.208C133.099 106.294 129.578 105.092 129.406 103.117"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M144.19 131.713L144.018 130.167C143.846 128.192 139.81 126.904 136.118 126.904C132.511 126.904 128.732 128.707 128.904 130.682L128.99 132.228C128.99 132.228 129.591 135.319 136.976 135.148C144.362 134.89 144.19 131.713 144.19 131.713Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M143.927 129.995C144.098 131.97 140.148 133.516 136.37 133.602C132.677 133.602 129.07 132.485 128.898 130.51"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M194.932 157.389L194.76 155.843C194.589 153.868 190.552 152.58 186.86 152.58C183.253 152.58 179.475 154.383 179.646 156.358L179.732 157.904C179.732 157.904 180.333 160.996 187.719 160.824C195.19 160.566 194.932 157.389 194.932 157.389Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M194.766 155.672C194.938 157.647 190.988 159.193 187.209 159.279C183.517 159.279 179.91 158.162 179.738 156.187"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M209.209 150.606L209.038 149.06C208.866 147.085 204.83 145.797 201.137 145.797C197.53 145.797 193.752 147.6 193.924 149.575L194.009 151.121C194.009 151.121 194.611 154.212 201.996 154.041C209.467 153.697 209.209 150.606 209.209 150.606Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M209.024 148.802C209.196 150.777 205.246 152.323 201.467 152.409C197.775 152.409 194.168 151.292 193.996 149.317"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M223.448 143.563L223.276 142.018C223.104 140.042 219.068 138.754 215.375 138.754C211.769 138.754 207.99 140.558 208.162 142.533L208.248 144.079C208.248 144.079 208.849 147.17 216.234 146.998C223.705 146.741 223.448 143.563 223.448 143.563Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M223.282 141.846C223.454 143.821 219.504 145.367 215.725 145.453C211.947 145.539 208.426 144.337 208.254 142.362"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M128.26 112.426C128.267 112.095 127.658 111.813 126.899 111.797C126.14 111.781 125.52 112.037 125.513 112.369C125.506 112.701 126.115 112.983 126.874 112.999C127.632 113.015 128.253 112.758 128.26 112.426Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M157.841 108.355C160.246 109.643 159.988 111.446 157.498 112.563L126.754 126.303C124.436 127.333 121.602 127.505 118.94 126.732C115.934 125.787 115.247 123.469 117.308 122.352C124.607 118.402 147.45 108.183 147.45 108.183C150.284 106.895 154.75 106.809 157.583 108.269L157.841 108.355Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M159.57 110.072L159.828 112.391C159.828 112.992 158.969 113.851 157.509 114.452L127.023 128.192C124.705 129.222 121.699 129.652 119.381 128.621C117.663 127.848 116.633 127.419 116.547 126.388L116.203 124.327"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M171.327 114.624C173.732 115.912 173.474 117.715 170.984 118.832L153.551 126.131C151.233 127.162 148.399 127.333 145.737 126.56C142.731 125.616 142.044 123.297 144.105 122.181C151.404 118.231 161.022 114.538 161.022 114.538C163.856 113.25 168.322 113.164 171.156 114.624H171.327Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M172.966 116.341L173.224 118.66C173.224 119.261 172.365 120.119 170.905 120.721L153.644 128.02C151.326 129.05 148.32 129.48 146.002 128.449C144.284 127.676 143.254 127.247 143.168 126.217L142.824 123.898"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M176.575 141.932C182.408 141.811 187.09 139.523 187.035 136.82C186.979 134.117 182.205 132.024 176.373 132.144C170.541 132.264 165.858 134.553 165.914 137.256C165.969 139.959 170.743 142.052 176.575 141.932Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M200.857 135.749C201.716 142.705 191.668 149.145 177.928 149.746C164.446 150.433 152.595 145.882 151.822 138.411C151.135 131.798 161.183 125.959 174.665 125.358C188.147 124.757 200.084 129.136 200.857 135.749Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M94.4648 120.034C94.4648 120.034 94.4648 121.322 97.5563 123.125C97.5563 123.125 211.512 180.318 237.189 193.972C242.513 196.806 249.383 200.928 262.78 195.174L286.396 183.839C288.8 182.722 294.468 180.06 294.124 177.312"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M293.863 175.079C294.206 177.741 288.538 180.575 286.134 181.691L262.518 193.113C249.122 198.866 242.252 194.744 236.928 191.911C211.165 178.256 97.2947 121.15 97.2947 121.15C94.7184 119.518 94.2891 118.745 94.2891 117.285"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M140.06 152.58L239.761 204.106C244.399 206.338 255.391 211.405 265.18 207.626C268.701 206.252 274.369 205.394 286.993 193.886C286.993 193.886 294.635 187.102 294.464 184.44C294.378 181.692 293.605 177.227 293.433 175.166C293.261 173.191 291.286 171.902 290.256 171.301C254.274 152.666 146.329 99.338 146.329 99.338C146.329 99.338 144.268 98.3934 143.581 98.2216C141.606 97.5346 139.373 97.4487 137.055 97.4487C134.479 97.4487 131.902 97.7922 129.841 98.4792C129.326 98.651 128.296 98.9945 127.78 99.2521C120.481 102.515 105.882 109.299 98.5828 112.992C96.1783 114.194 95.3195 115.397 94.976 116.084C94.6325 116.942 94.5467 117.973 94.6325 119.003L95.9207 127.076"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M200.789 134.976C200.875 141.674 191.085 147.6 177.86 148.201C164.893 148.802 153.472 144.68 151.926 137.724"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M294.514 175.098L294.511 175.064L294.505 175.031C294.294 173.867 293.591 172.938 292.867 172.25C292.139 171.556 291.328 171.049 290.796 170.739L290.78 170.73L290.764 170.721C272.722 161.357 236.176 143.148 204.06 127.251C188.001 119.302 173.047 111.93 162.065 106.529C156.575 103.828 152.076 101.621 148.929 100.08C147.356 99.3094 146.12 98.7055 145.266 98.2901C144.839 98.0825 144.507 97.9216 144.276 97.8104C144.075 97.7134 143.898 97.6284 143.835 97.6048L143.827 97.6016L143.818 97.5987C141.711 96.8657 139.363 96.7842 137.045 96.7842C134.433 96.7842 131.839 97.0435 129.656 97.8619C129.574 97.8921 129.424 97.9573 129.261 98.0283C129.057 98.1178 128.773 98.2437 128.42 98.4014C127.714 98.7169 126.726 99.162 125.533 99.7023C123.147 100.783 119.939 102.246 116.519 103.819C109.686 106.963 101.988 110.553 98.3224 112.407C95.834 113.652 94.737 114.865 94.2958 115.748L94.2818 115.776L94.2702 115.805L94.2563 115.839C94.0914 116.251 93.8731 116.796 93.8731 117.457C93.8731 117.617 93.9158 117.908 93.9631 118.204C94.0156 118.533 94.09 118.961 94.1783 119.45C94.3551 120.428 94.5904 121.665 94.8252 122.879C95.0554 124.068 95.2855 125.237 95.4604 126.119L59.5866 107.602L59.5574 107.587L59.527 107.575C54.1273 105.362 48.276 105.181 43.1222 106.869L43.097 106.877L43.0724 106.887L12.7585 119.253L12.7509 119.256L12.7432 119.26C10.4491 120.255 8.67584 121.211 7.44512 122.224C6.20446 123.244 5.44609 124.38 5.33833 125.727L5.33422 125.779L5.33717 125.83L6.19592 140.772L6.19664 140.785L6.19777 140.797C6.37494 142.746 6.92622 146.091 10.5322 148.084L10.5457 148.091L10.559 148.098C10.559 148.098 10.5594 148.098 10.5604 148.099C10.5625 148.1 10.5674 148.102 10.5759 148.107L10.6288 148.135C10.6738 148.159 10.7363 148.192 10.8162 148.235C10.9758 148.32 11.2026 148.442 11.4924 148.597C12.072 148.908 12.9021 149.355 13.947 149.917C16.0367 151.042 18.9844 152.63 22.5026 154.526C29.5389 158.318 38.8563 163.341 48.1522 168.354C57.4482 173.367 66.7226 178.369 73.6731 182.118L82.0681 186.647L84.4187 187.914L85.0378 188.248L85.1965 188.334L85.2367 188.356L85.2468 188.361L85.249 188.362C85.2491 188.362 85.2492 188.363 85.2493 188.363C91.5731 191.788 98.7861 192.257 104.981 189.913H105.084L105.228 189.85L135.799 176.54C135.799 176.54 135.799 176.54 135.799 176.54C136.815 176.098 137.882 175.539 138.753 174.679C139.64 173.805 140.296 172.648 140.535 171.07L140.537 171.055L140.539 171.04C140.556 170.885 140.555 170.584 140.549 170.24C140.542 169.87 140.528 169.382 140.508 168.807C140.468 167.656 140.403 166.142 140.328 164.493C140.187 161.403 140.008 157.832 139.88 155.275L139.856 154.799V154.798V154.798V154.798V154.798V154.798V154.798V154.798V154.797V154.797V154.797V154.797V154.797V154.797V154.796V154.796V154.796V154.796V154.796V154.796V154.795V154.795V154.795V154.795V154.795V154.794V154.794V154.794V154.794V154.794V154.794V154.793V154.793V154.793V154.793V154.793V154.792V154.792V154.792V154.792V154.792V154.791V154.791V154.791V154.791V154.791V154.79V154.79V154.79V154.79V154.79V154.789V154.789V154.789V154.789V154.789V154.788V154.788V154.788V154.788V154.787V154.787V154.787V154.787V154.787V154.786V154.786V154.786V154.786V154.785V154.785V154.785V154.785V154.784V154.784V154.784V154.784V154.783V154.783V154.783V154.783V154.782V154.782V154.782V154.782V154.781V154.781V154.781V154.781V154.78V154.78V154.78V154.78V154.779V154.779V154.779V154.779V154.778V154.778V154.778V154.777V154.777V154.777V154.777V154.776V154.776V154.776V154.775V154.775V154.775V154.775V154.774V154.774V154.774V154.773V154.773V154.773V154.772V154.772V154.772V154.772V154.771V154.771V154.771V154.77V154.77V154.77V154.769V154.769V154.769V154.768V154.768V154.768V154.767V154.767V154.767V154.766V154.766V154.766V154.765V154.765V154.765V154.764V154.764V154.764V154.763V154.763V154.763V154.762V154.762V154.762V154.761V154.761V154.761V154.76V154.76V154.759V154.759V154.759V154.758V154.758V154.758V154.757V154.757V154.756V154.756V154.756V154.755V154.755V154.755V154.754V154.754V154.753V154.753V154.753V154.752V154.752V154.751V154.751V154.751V154.75V154.75V154.749V154.749V154.748V154.748V154.748V154.747V154.747V154.746V154.746V154.746V154.745V154.745V154.744V154.744V154.743V154.743V154.743V154.742V154.742V154.741V154.741V154.74V154.74V154.739V154.739V154.738V154.738V154.738V154.737V154.737V154.736V154.736V154.735V154.735V154.734V154.734V154.733V154.733V154.732V154.732V154.731V154.731V154.73V154.73V154.729V154.729V154.728V154.728V154.727V154.727V154.702L139.855 154.677C139.822 154.181 139.802 153.74 139.784 153.352C139.779 153.243 139.774 153.139 139.77 153.038C139.764 152.929 139.759 152.822 139.753 152.717L239.404 204.855L239.415 204.861L239.427 204.867C241.753 205.987 245.722 207.842 250.357 208.936C254.989 210.028 260.352 210.376 265.441 208.412L265.444 208.411C265.873 208.243 266.352 208.078 266.886 207.895C268.428 207.366 270.427 206.679 273.015 205.304C276.516 203.444 281.136 200.315 287.474 194.539L287.483 194.532L287.549 194.477C287.607 194.429 287.691 194.358 287.798 194.268C288.011 194.087 288.314 193.827 288.678 193.507C289.404 192.867 290.372 191.984 291.338 191.013C292.299 190.047 293.276 188.976 294.006 187.964C294.371 187.458 294.688 186.948 294.909 186.46C295.123 185.989 295.276 185.478 295.25 184.978C295.247 184.062 295.062 181.587 294.881 179.378C294.789 178.254 294.698 177.184 294.629 176.395C294.595 176.001 294.566 175.677 294.546 175.451L294.523 175.19L294.516 175.121L294.515 175.104L294.514 175.099L294.514 175.098L294.514 175.098C294.514 175.098 294.514 175.098 293.767 175.165L294.514 175.098Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                  <div className={styles.devicesGridTitle}>
                    ?????????????? ??????????????????
                  </div>
                  <div className={styles.devicesGridDisclaimer}>
                    <span className={styles.devicesGridDisclaimerIcon}>
                      <svg
                        className={styles.DevicesLogo}
                        height="15px"
                        viewBox="0 0 64 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#777"
                        data-tid="853e8c14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.5 7.484a6.884 6.884 0 1 1 13.767 0 6.884 6.884 0 0 1-13.767 0Zm7.854 4.137h1.438V3.36H7.7c-2.104 0-3.209 1.081-3.209 2.674 0 1.271.606 2.02 1.688 2.793L4.3 11.62h1.557L7.95 8.495l-.725-.487c-.88-.595-1.308-1.058-1.308-2.057 0-.88.618-1.473 1.795-1.473h.642v7.143Z"
                        ></path>
                        <path d="M24.666 12.994h-1.551l-2.119-7.831v7.831H19.52V2.627h2.446l2.088 7.682 2.089-7.682h2.416v10.367h-1.775V5.163l-2.118 7.831Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M29.753 9.25c0-2.52 1.358-3.908 3.312-3.908 1.954 0 3.312 1.387 3.312 3.893 0 2.521-1.358 3.909-3.312 3.909-1.954 0-3.311-1.388-3.311-3.894Zm1.835 0c0 1.73.493 2.491 1.477 2.491.985 0 1.477-.76 1.477-2.506 0-1.73-.492-2.49-1.477-2.49-.984 0-1.477.76-1.477 2.505ZM43.914 11.592h-.79v-6.1h-5.177v.64c0 1.835-.119 4.207-.745 5.46h-.552v3.118h1.64v-1.716h3.983v1.716h1.641v-3.118Zm-2.565 0h-2.506c.492-1.134.626-3.177.626-4.475v-.224h1.88v4.7Z"
                        ></path>
                        <path d="M48.465 12.592c-.507 1.536-1.119 2.714-2.775 2.714-.7 0-.97-.253-.97-.253v-1.447c.195.194.478.298.806.298.493 0 .776-.223.97-.582l-2.58-7.83h1.864l1.656 5.638 1.656-5.639h1.715l-2.342 7.1ZM50.432 11.458v1.536s.284.15.701.15c1.522 0 1.91-1.075 2-3.566l.104-2.685h1.805v6.101h1.775V5.491H51.73l-.15 4.013c-.059 1.596-.163 2.088-.745 2.088-.254 0-.403-.134-.403-.134Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.313 12.994V5.491h1.775v2.297h.925c1.864 0 2.983.88 2.983 2.551 0 1.76-1.253 2.655-3.013 2.655h-2.67Zm1.775-1.402h.79c.776 0 1.283-.328 1.283-1.193S61.7 9.19 60.923 9.19h-.835v2.401Z"
                        ></path>
                      </svg>
                    </span>
                    ?????????????????? ?????????????????? ?? ?????????? ????
                  </div>
                </Link>
                <Link
                  className={styles.DevicesGridSamsung}
                  to="/"
                >
                  <svg
                    className={styles.V5VOOSamsung}
                    width="30rem"
                    height="30rem"
                    viewBox="0 0 300 300"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    data-tid="26dfb69b"
                  >
                    <path
                      d="M235.199 217.1L61.6992 204.3V77.9L235.199 61.4V217.1Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M235.201 215.9L63.4008 203.1L63.3008 79.1L235.201 63"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M239.1 224.5V56.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M241.4 223.6V57.5L239.1 56.5L59 74.7V209.5L239.1 224.5L241.4 223.6Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M221.6 222.9C219.8 225.8 212.6 239.4 211.3 242.1C211.1 242.4 211.1 242.7 211 243V243.6"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M221.4 227.3L221.7 227.5C221.7 227.5 221.7 227.5 221.8 227.6L229.6 237.4C229.7 237.6 229.9 237.7 230.1 237.7L232.3 237.6C232.8 237.6 233.1 237.1 232.8 236.7C231.4 234.5 227.8 229.1 225.9 227.2C224.9 226.2 222.1 226.2 221 227.9C219 231.1 213.3 240.8 212.3 242.6L211.9 243.1C211.7 243.4 211.3 243.7 210.9 243.7C210.2 243.7 209 243.7 208.1 243.7C207.8 243.7 207.5 243.4 207.5 243.1C207.5 242.9 207.5 242.6 207.6 242.4C208.7 239.8 216.4 222.5 216.3 222.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M226.199 223.4C226.199 223.4 232.599 235 233.199 236.1C233.799 237.2 232.499 237.6 232.499 237.6"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M80.7002 211.3C80.7002 211.3 80.8002 211.9 80.4002 212.4C80.1002 212.7 66.6002 222.3 61.8002 226.1C60.9002 226.8 60.6002 227.9 61.1002 227.9H63.5002C63.8002 227.9 81.8002 216 81.8002 216C84.9002 214.1 89.3002 214.1 92.3002 215.1C94.3002 215.8 100.1 219.5 105.2 222.3C107.9 223.8 109.6 224.9 110.5 225.5C111 225.9 111.7 225.9 112.4 225.7L113.3 225.3C113.6 225.1 113.7 224.7 113.4 224.5L97.1002 214C96.7002 213.7 96.4002 213.3 96.2002 212.9L96.1002 212.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M63.8995 227.8C62.7995 228.3 61.9995 227.7 63.1995 226.8C66.6995 224 82.0995 214.3 82.0995 214.3C83.6995 213.1 83.3995 211.6 83.3995 211.6"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M63.6992 203.1L61.6992 204.3"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M61.6992 77.9L63.5992 79.3"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M241.4 223.6V57.5L239.1 56.5L59 74.7V209.5L239.1 224.5L241.4 223.6Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M80.7002 211.3C80.7002 211.3 80.8002 211.9 80.4002 212.4C80.1002 212.7 66.6002 222.3 61.8002 226.1C60.9002 226.8 60.6002 227.9 61.1002 227.9H63.5002C63.8002 227.9 81.8002 216 81.8002 216C84.9002 214.1 89.3002 214.1 92.3002 215.1C94.3002 215.8 100.1 219.5 105.2 222.3C107.9 223.8 109.6 224.9 110.5 225.5C111 225.9 111.7 225.9 112.4 225.7L113.3 225.3C113.6 225.1 113.7 224.7 113.4 224.5L97.1002 214C96.7002 213.7 96.4002 213.3 96.2002 212.9L96.1002 212.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M221.4 227.3L221.7 227.5C221.7 227.5 221.7 227.5 221.8 227.6L229.6 237.4C229.7 237.6 229.9 237.7 230.1 237.7L232.3 237.6C232.8 237.6 233.1 237.1 232.8 236.7C231.4 234.5 227.8 229.1 225.9 227.2C224.9 226.2 222.1 226.2 221 227.9C219 231.1 213.3 240.8 212.3 242.6L211.9 243.1C211.7 243.4 211.3 243.7 210.9 243.7C210.2 243.7 209 243.7 208.1 243.7C207.8 243.7 207.5 243.4 207.5 243.1C207.5 242.9 207.5 242.6 207.6 242.4C208.7 239.8 216.4 222.5 216.3 222.5"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M226.199 223.4C226.199 223.4 232.599 235 233.199 236.1C233.799 237.2 232.499 237.6 232.499 237.6"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M241.4 223.6V57.5L239.1 56.5L59 74.7V209.5L239.1 224.5L241.4 223.6Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M80.7002 211.3C80.7002 211.3 80.8002 211.9 80.4002 212.4C80.1002 212.7 66.6002 222.3 61.8002 226.1C60.9002 226.8 60.6002 227.9 61.1002 227.9H63.5002C63.8002 227.9 81.8002 216 81.8002 216C84.9002 214.1 89.3002 214.1 92.3002 215.1C94.3002 215.8 100.1 219.5 105.2 222.3C107.9 223.8 109.6 224.9 110.5 225.5C111 225.9 111.7 225.9 112.4 225.7L113.3 225.3C113.6 225.1 113.7 224.7 113.4 224.5L97.1002 214C96.7002 213.7 96.4002 213.3 96.2002 212.9L96.1002 212.5"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                  <svg
                    className={styles.DevicesLogo}
                    width="115px"
                    height="18px"
                    viewBox="0 0 115 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    data-tid="27b06994"
                  >
                    <path
                      fillRule="evenodd"
                      d="M62.248 7.96s-1.07-.715-1.732-.991c0 0-2.047-1.025-2.453-1.513 0 0-.798-.812-.331-1.756 0 0 .195-.617 1.039-.617 0 0 1.098.065 1.098 1.04v1.375h3.934l-.007-2.025S64.1.157 59.162.01c0 0-3.883-.276-4.997 1.983 0 0-.437.504-.437 2.26V5.52s-.045 1.463.647 2.406c0 0 .391.618 1.355 1.3 0 0 1.956 1.138 3.13 1.79 0 0 1.185.73 1.03 1.893 0 0-.098 1.194-1.242 1.145 0 0-1.047-.05-1.047-1.221V11.46H53.41v1.995s-.117 3.818 5.27 3.818c0 0 5.147.112 5.388-3.918V11.73s.181-2.47-1.82-3.77ZM41.348.391l-1.357 9.04h-.318L38.376.471h-6.772l-.339 16.37h4.01l.048-12.334h.315l2.125 12.33h4.219L44.08 4.513h.28l.096 12.33h4.031L48.054.39h-6.706ZM16.843.391 13.998 16.8h4.604l1.685-12.723h.379L22.35 16.8h4.603L24.109.391h-7.266ZM108.809 7.864v2.385h1.122v2.56c0 1.252-1.033 1.275-1.033 1.275-1.256 0-1.208-1.19-1.208-1.19V4.04c0-.912 1.114-.96 1.114-.96 1.07 0 1.077 1.087 1.077 1.087v1.347h4.12c.134-2.629-.372-3.265-.372-3.265-1.022-2.377-4.888-2.247-4.888-2.247-5.941 0-5.282 4.721-5.282 4.721v8.562c.128 4.428 5.982 3.978 6.081 3.974 2.604-.298 3.391-1.155 3.391-1.155a2.63 2.63 0 0 0 .91-1.328c.207-.45.259-1.88.259-1.88v-5.03h-5.291ZM95.528 10.402h-.178L91.19.392h-4.975v16.45h4.05l-.243-10.01h.181l4.309 10.01h4.825V.39h-4.101l.292 10.011ZM76.016 12.387s.06 1.313-1.16 1.313c0 0-1.282.068-1.282-1.28L73.56.391h-4.562v11.934s-.468 4.516 5.922 4.516c0 0 5.553.066 5.553-4.31V.392h-4.458v11.996ZM8.936 7.958s-1.069-.714-1.73-.99c0 0-2.047-1.024-2.453-1.512 0 0-.798-.814-.33-1.755 0 0 .195-.618 1.037-.618 0 0 1.099.065 1.099 1.04v1.374h3.936l-.008-2.025S10.787.156 5.853.01c0 0-.372-.026-.917.003 0 0-2.99.174-4.059 1.945-.006.013-.015.023-.021.035 0 0-.436.503-.436 2.259V5.52s-.046 1.463.647 2.406c0 0 .39.618 1.354 1.3 0 0 1.955 1.137 3.13 1.789 0 0 1.186.729 1.029 1.893 0 0-.097 1.194-1.241 1.145 0 0-1.046-.05-1.046-1.221v-1.375H.1v1.998s-.118 3.816 5.27 3.816c0 0 5.145.113 5.387-3.916v-1.624s.18-2.473-1.821-3.774Z"
                    ></path>
                  </svg>
                  <div className={styles.devicesGridDisclaimer}>
                    2013 ??. ?? ??????????
                  </div>
                </Link>
                <Link
                  className={styles.DevicesGridLG}
                  to="/"
                >
                  <svg
                    className={styles.V5VOOLG}
                    width="30rem"
                    height="30rem"
                    viewBox="0 0 300 300"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    data-tid="26dfb69b"
                  >
                    <path
                      d="M235.199 217.1L61.6992 204.3V77.9L235.199 61.4V217.1Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M235.201 215.9L63.4008 203.1L63.3008 79.1L235.201 63"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M239.1 224.5V56.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M241.4 223.6V57.5L239.1 56.5L59 74.7V209.5L239.1 224.5L241.4 223.6Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M221.6 222.9C219.8 225.8 212.6 239.4 211.3 242.1C211.1 242.4 211.1 242.7 211 243V243.6"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M221.4 227.3L221.7 227.5C221.7 227.5 221.7 227.5 221.8 227.6L229.6 237.4C229.7 237.6 229.9 237.7 230.1 237.7L232.3 237.6C232.8 237.6 233.1 237.1 232.8 236.7C231.4 234.5 227.8 229.1 225.9 227.2C224.9 226.2 222.1 226.2 221 227.9C219 231.1 213.3 240.8 212.3 242.6L211.9 243.1C211.7 243.4 211.3 243.7 210.9 243.7C210.2 243.7 209 243.7 208.1 243.7C207.8 243.7 207.5 243.4 207.5 243.1C207.5 242.9 207.5 242.6 207.6 242.4C208.7 239.8 216.4 222.5 216.3 222.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M226.199 223.4C226.199 223.4 232.599 235 233.199 236.1C233.799 237.2 232.499 237.6 232.499 237.6"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M80.7002 211.3C80.7002 211.3 80.8002 211.9 80.4002 212.4C80.1002 212.7 66.6002 222.3 61.8002 226.1C60.9002 226.8 60.6002 227.9 61.1002 227.9H63.5002C63.8002 227.9 81.8002 216 81.8002 216C84.9002 214.1 89.3002 214.1 92.3002 215.1C94.3002 215.8 100.1 219.5 105.2 222.3C107.9 223.8 109.6 224.9 110.5 225.5C111 225.9 111.7 225.9 112.4 225.7L113.3 225.3C113.6 225.1 113.7 224.7 113.4 224.5L97.1002 214C96.7002 213.7 96.4002 213.3 96.2002 212.9L96.1002 212.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M63.8995 227.8C62.7995 228.3 61.9995 227.7 63.1995 226.8C66.6995 224 82.0995 214.3 82.0995 214.3C83.6995 213.1 83.3995 211.6 83.3995 211.6"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M63.6992 203.1L61.6992 204.3"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M61.6992 77.9L63.5992 79.3"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M241.4 223.6V57.5L239.1 56.5L59 74.7V209.5L239.1 224.5L241.4 223.6Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M80.7002 211.3C80.7002 211.3 80.8002 211.9 80.4002 212.4C80.1002 212.7 66.6002 222.3 61.8002 226.1C60.9002 226.8 60.6002 227.9 61.1002 227.9H63.5002C63.8002 227.9 81.8002 216 81.8002 216C84.9002 214.1 89.3002 214.1 92.3002 215.1C94.3002 215.8 100.1 219.5 105.2 222.3C107.9 223.8 109.6 224.9 110.5 225.5C111 225.9 111.7 225.9 112.4 225.7L113.3 225.3C113.6 225.1 113.7 224.7 113.4 224.5L97.1002 214C96.7002 213.7 96.4002 213.3 96.2002 212.9L96.1002 212.5"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M221.4 227.3L221.7 227.5C221.7 227.5 221.7 227.5 221.8 227.6L229.6 237.4C229.7 237.6 229.9 237.7 230.1 237.7L232.3 237.6C232.8 237.6 233.1 237.1 232.8 236.7C231.4 234.5 227.8 229.1 225.9 227.2C224.9 226.2 222.1 226.2 221 227.9C219 231.1 213.3 240.8 212.3 242.6L211.9 243.1C211.7 243.4 211.3 243.7 210.9 243.7C210.2 243.7 209 243.7 208.1 243.7C207.8 243.7 207.5 243.4 207.5 243.1C207.5 242.9 207.5 242.6 207.6 242.4C208.7 239.8 216.4 222.5 216.3 222.5"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M226.199 223.4C226.199 223.4 232.599 235 233.199 236.1C233.799 237.2 232.499 237.6 232.499 237.6"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M241.4 223.6V57.5L239.1 56.5L59 74.7V209.5L239.1 224.5L241.4 223.6Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M80.7002 211.3C80.7002 211.3 80.8002 211.9 80.4002 212.4C80.1002 212.7 66.6002 222.3 61.8002 226.1C60.9002 226.8 60.6002 227.9 61.1002 227.9H63.5002C63.8002 227.9 81.8002 216 81.8002 216C84.9002 214.1 89.3002 214.1 92.3002 215.1C94.3002 215.8 100.1 219.5 105.2 222.3C107.9 223.8 109.6 224.9 110.5 225.5C111 225.9 111.7 225.9 112.4 225.7L113.3 225.3C113.6 225.1 113.7 224.7 113.4 224.5L97.1002 214C96.7002 213.7 96.4002 213.3 96.2002 212.9L96.1002 212.5"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                  <svg
                    className={styles.DevicesLogo}
                    width="71px"
                    height="31px"
                    viewBox="0 0 71 31"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    data-tid="27b06994"
                  >
                    <path
                      fillRule="evenodd"
                      d="M31.178 15.12C31.178 6.77 24.409 0 16.058 0 7.708 0 .938 6.77.938 15.12s6.77 15.12 15.12 15.12c8.351 0 15.12-6.77 15.12-15.12Zm-2.347-.005c0 3.413-1.33 6.619-3.74 9.032a12.69 12.69 0 0 1-9.032 3.74 12.692 12.692 0 0 1-9.031-3.74 12.698 12.698 0 0 1-3.74-9.032c0-7.04 5.73-12.77 12.771-12.77l.719.008v1.296l-.001.118-.718-.009a11.29 11.29 0 0 0-8.032 3.327 11.29 11.29 0 0 0-3.325 8.03c0 3.032 1.182 5.886 3.325 8.032 2.146 2.146 5 3.329 8.032 3.329 5.959 0 10.933-4.656 11.332-10.597 0 0 .002-.02.002-.044h-7.607v-1.41h8.42l.625-.003v.693Zm-9.045 5.325h-3.008V8.368H15.34v13.487h4.446V20.44ZM11.231 8.36c1.065 0 1.93.868 1.93 1.93a1.93 1.93 0 1 1-1.93-1.93Z"
                    ></path>
                    <path d="M43.14 5.4v15.655h9.51v3.785H38.547V5.4h4.591ZM62.399 13.808v3.618h3.687v3.393c-.679.257-2.004.513-3.266.513-4.079 0-5.437-2.05-5.437-6.213 0-3.97 1.293-6.308 5.37-6.308 2.267 0 3.56.705 4.628 2.05L70.198 8.3c-1.717-2.433-4.727-3.17-7.542-3.17-6.341 0-9.675 3.426-9.675 9.957 0 6.501 3.01 10.023 9.643 10.023 3.042 0 6.02-.769 7.637-1.889v-9.413H62.4Z"></path>
                  </svg>
                  <div className={styles.devicesGridDisclaimer}>
                    2014 ??. ?? ??????????
                  </div>
                </Link>
                <Link
                  className={styles.DevicesGridAndroid}
                  to="/"
                >
                  <svg
                    className={styles.V5VOOAndroid}
                    width="26.3rem"
                    height="14.5rem"
                    viewBox="0 0 263 145"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    data-tid="fb34785b"
                  >
                    <path
                      d="M125.98 185.47C122.406 191.18 113.118 187.474 108.683 186.166C104.248 184.857 85.0977 179.155 82.5565 178.184C78.7448 176.728 76.0567 171.073 75.9535 170.231C75.3802 167.879 78.8757 162.108 79.8093 160.426C103.414 118.207 173.285 -6.26713 173.285 -6.26713C175.337 -9.86701 179.499 -11.9446 183.707 -11.3208C183.707 -11.3208 185.409 -11.3869 189.59 -10.4035C200.425 -8.02746 208.778 -5.56078 216.192 -3.19279C219.671 -2.12334 222.35 -0.0296264 222.849 4.04111L223.452 8.95407C223.607 10.2174 223.402 11.4536 222.759 12.601L130.005 178.208L125.98 185.47Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M135.852 75.4038L145.098 78.1884C147.167 78.7897 149.378 78.2336 150.356 76.3326C151.889 73.7226 150.096 71.3065 147.589 70.6164L139.894 68.2829C137.747 67.62 135.368 68.5529 134.171 70.4094L133.925 70.7246C132.587 72.5983 133.564 74.7582 135.852 75.4038Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M156.729 81.8207L165.975 84.6052C168.044 85.2065 170.255 84.6504 171.233 82.7495C172.765 80.1395 170.973 77.7233 168.466 77.0333L160.771 74.6997C158.624 74.0369 156.245 74.9697 155.048 76.8263L154.802 77.1414C153.604 78.998 154.582 81.1579 156.729 81.8207Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M189.217 6.31185C188.587 5.81921 188.159 5.23057 187.994 4.46714C187.716 3.36139 187.938 2.26559 188.738 1.24132C190.278 -0.728441 193.516 -1.62418 195.979 -0.715007C197.249 -0.22963 198.072 0.666908 198.35 1.77266C198.628 2.87841 198.406 3.97421 197.605 4.99849C196.066 6.96824 192.827 7.86398 190.365 6.95481C189.988 6.78728 189.611 6.61975 189.217 6.31185Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M155.096 67.3451C154.466 66.8524 154.038 66.2638 153.873 65.5004C153.595 64.3946 153.817 63.2988 154.617 62.2745C156.157 60.3048 159.395 59.409 161.858 60.3182C163.128 60.8036 163.95 61.7001 164.228 62.8059C164.507 63.9116 164.285 65.0074 163.484 66.0317C161.945 68.0015 158.706 68.8972 156.244 67.988C155.867 67.8205 155.412 67.5914 155.096 67.3451Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M141.538 63.0946C140.907 62.6019 140.479 62.0133 140.314 61.2499C140.036 60.1441 140.258 59.0483 141.059 58.024C142.598 56.0543 145.837 55.1585 148.299 56.0677C149.57 56.5531 150.392 57.4496 150.67 58.5554C150.948 59.6611 150.726 60.7569 149.926 61.7812C148.386 63.751 145.148 64.6467 142.685 63.7375C142.23 63.5084 141.853 63.3409 141.538 63.0946Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M169.733 71.6773C169.103 71.1847 168.674 70.5961 168.51 69.8326C168.231 68.7269 168.453 67.6311 169.254 66.6068C170.793 64.637 174.032 63.7413 176.494 64.6505C177.765 65.1359 178.587 66.0324 178.865 67.1381C179.143 68.2439 178.921 69.3397 178.121 70.364C176.581 72.3337 173.343 73.2295 170.881 72.3203C170.442 72.2316 170.048 71.9237 169.733 71.6773Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M182.452 18.5398C181.822 18.0471 181.393 17.4585 181.228 16.695C180.95 15.5893 181.172 14.4935 181.973 13.4692C183.512 11.4995 186.751 10.6037 189.213 11.5129C190.484 11.9983 191.306 12.8948 191.584 14.0006C191.862 15.1063 191.64 16.2021 190.84 17.2264C189.3 19.1961 186.062 20.0919 183.599 19.1827C183.161 19.094 182.767 18.7861 182.452 18.5398Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M165.98 45.1371C164.877 44.275 164.178 43.2209 163.804 41.9132C163.282 39.9824 163.76 38.0716 165.115 36.3382C167.886 32.7926 173.555 31.3851 177.822 33.0704C179.987 33.8736 181.535 35.4647 182.057 37.3955C182.579 39.3262 182.101 41.2371 180.746 42.9705C177.975 46.5161 172.306 47.9235 168.038 46.2383C167.285 45.9032 166.531 45.5682 165.98 45.1371Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M157.657 52.2131C155.214 50.3041 153.483 47.8092 152.78 44.9746C151.623 40.7708 152.713 36.2916 155.853 32.2733C162.073 24.3154 174.982 20.9516 184.568 24.7631C189.51 26.7218 192.861 30.2292 194.035 34.5734C195.191 38.7773 194.102 43.2565 190.962 47.2748C184.742 55.2326 171.832 58.5964 162.246 54.7849C160.459 54.1492 158.917 53.1984 157.657 52.2131Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M78.9537 162.169C76.5666 166.523 72.5613 172.784 83.8054 172.688C95.0496 172.591 108.725 178.965 113.49 181.8C117.861 184.328 121.264 184.195 125.474 176.698L221.432 5.85314C222.014 4.7845 222.282 2.32936 221.734 0.758128"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M125.98 185.47C122.406 191.18 113.118 187.474 108.683 186.166C104.248 184.857 85.0977 179.155 82.5565 178.184C78.7448 176.728 76.0567 171.073 75.9535 170.231C75.3802 167.879 78.8757 162.108 79.8093 160.426C103.414 118.207 173.285 -6.26713 173.285 -6.26713C175.337 -9.86701 179.499 -11.9446 183.707 -11.3208C183.707 -11.3208 185.409 -11.3869 189.59 -10.4035C200.425 -8.02746 208.778 -5.56078 216.192 -3.19279C219.671 -2.12334 222.35 -0.0296264 222.849 4.04111L223.452 8.95407C223.607 10.2174 223.402 11.4536 222.759 12.601L130.005 178.208L125.98 185.47Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                  <svg
                    className={styles.DevicesLogo}
                    width="118px"
                    height="21px"
                    viewBox="0 0 118 21"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    data-tid="27b06994"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.877 12.489c0 2.288 1.782 4.13 3.985 4.13 1.507 0 2.898-.798 3.578-2.044a.753.753 0 0 0 .072-.275v-3.65a.759.759 0 0 0-.1-.348c-.623-1.246-2.087-1.928-3.55-1.928-2.203 0-3.985 1.869-3.985 4.114Zm11.215-7.215v14.488h-3.58v-1.245c-1 .97-2.361 1.536-4.041 1.536-4.1 0-7.215-3.376-7.215-7.565 0-4.17 3.114-7.503 7.215-7.503 1.68 0 3.041.534 4.041 1.505V5.274h3.58Zm15.546 6.65v7.838H27.06v-7.837c0-1.899-1.348-3.349-3.246-3.349-1.912 0-3.246 1.45-3.246 3.349v7.837H16.99v-7.837c0-3.855 2.985-6.94 6.824-6.94 3.826 0 6.824 3.085 6.824 6.94Zm5.114.565c0 2.288 1.783 4.13 3.985 4.13 1.507 0 2.898-.798 3.58-2.044a.706.706 0 0 0 .07-.26V10.65a.759.759 0 0 0-.1-.347c-.695-1.203-2.086-1.928-3.55-1.928-2.202 0-3.985 1.869-3.985 4.114ZM46.968.927v18.835h-3.58v-1.245c-.998.97-2.362 1.536-4.042 1.536-4.1 0-7.215-3.376-7.215-7.565 0-4.17 3.114-7.548 7.215-7.548 1.68 0 3.044.58 4.042 1.55V.927h3.58Zm5.476 11.098v7.737h-3.578v-7.737c0-4.592 2.462-7.04 7.07-7.04V8.52c-2.29 0-3.492 1.216-3.492 3.505Zm7.376.463a3.948 3.948 0 1 0 7.896 0A3.94 3.94 0 0 0 63.76 8.55a3.943 3.943 0 0 0-3.94 3.94Zm11.518 0a7.562 7.562 0 0 1-7.579 7.565 7.56 7.56 0 0 1-7.562-7.565c0-4.17 3.39-7.503 7.562-7.503 4.19 0 7.579 3.332 7.579 7.503Zm5.491-10.401a2.085 2.085 0 0 1-2.073 2.086 2.085 2.085 0 0 1-2.07-2.086c0-1.16.927-2.087 2.07-2.087 1.146 0 2.073.927 2.073 2.087Zm-3.87 3.187h3.58v14.488h-3.58V5.274Zm8.825 7.215c0 2.288 1.783 4.13 3.985 4.13 1.507 0 2.898-.798 3.578-2.044a.601.601 0 0 0 .073-.245v-3.68a.736.736 0 0 0-.102-.348c-.696-1.203-2.085-1.928-3.549-1.928-2.202 0-3.985 1.869-3.985 4.114ZM92.998.927v18.835H89.42v-1.245c-1 .97-2.362 1.55-4.042 1.55-4.1 0-7.217-3.39-7.217-7.579 0-4.17 3.117-7.503 7.217-7.503 1.68 0 3.042.534 4.042 1.505V.927h3.578Zm24.748 4.333-5.883 14.504h-2.868l-5.883-14.488h3.043l4.323 11.256 4.313-11.272h2.955Zm-15.33 12.1-.013 2.577h-.305c-3.766 0-6.2-2.216-6.2-5.969V1.348h2.62v3.928h3.783v2.39h-3.783v6.302c0 2.13 1.48 3.391 3.58 3.391h.318Z"
                    ></path>
                  </svg>
                  <div className={styles.devicesGridDisclaimer}>
                    ???????????????????? ?? ??????????????????
                  </div>
                </Link>
                <Link
                  className={styles.DevicesGridXiaomi}
                  to="/"
                >
                  <svg
                    className={styles.V5VOOXiaomi}
                    width="11.2rem"
                    height="14.6rem"
                    viewBox="0 0 112 146"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    data-tid="d081967b"
                  >
                    <path
                      d="M125.48 25.1958C121.906 30.9058 112.618 27.2003 108.183 25.8918C103.748 24.5833 84.5977 18.8811 82.0565 17.9103C78.2448 16.4542 75.5567 10.7996 75.4535 9.95739C74.8802 7.60552 78.3757 1.83392 79.3093 0.152165C102.914 -42.0665 172.785 -166.541 172.785 -166.541C174.837 -170.141 178.999 -172.218 183.207 -171.595C183.207 -171.595 184.909 -171.661 189.09 -170.677C199.925 -168.301 208.278 -165.835 215.692 -163.467C219.171 -162.397 221.85 -160.303 222.349 -156.233L222.952 -151.32C223.107 -150.056 222.902 -148.82 222.259 -147.673L129.505 17.9345L125.48 25.1958Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M78.4537 1.89536C76.0666 6.24873 72.0613 12.5103 83.3054 12.414C94.5496 12.3177 108.225 18.6911 112.99 21.5264C117.361 24.0539 120.764 23.9216 124.974 16.4239L220.932 -154.421C221.514 -155.489 221.782 -157.944 221.234 -159.516"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M125.48 25.1958C121.906 30.9058 112.618 27.2003 108.183 25.8918C103.748 24.5833 84.5977 18.8811 82.0565 17.9103C78.2448 16.4542 75.5567 10.7996 75.4535 9.95739C74.8802 7.60552 78.3757 1.83392 79.3093 0.152165C102.914 -42.0665 172.785 -166.541 172.785 -166.541C174.837 -170.141 178.999 -172.218 183.207 -171.595C183.207 -171.595 184.909 -171.661 189.09 -170.677C199.925 -168.301 208.278 -165.835 215.692 -163.467C219.171 -162.397 221.85 -160.303 222.349 -156.233L222.952 -151.32C223.107 -150.056 222.902 -148.82 222.259 -147.673L129.505 17.9345L125.48 25.1958Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                  <svg
                    className={styles.DevicesLogo}
                    height="30%"
                    viewBox="0 0 45 45"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    data-tid="27b06994"
                  >
                    <path
                      fillRule="evenodd"
                      d="M39.417 4.598C35.264.463 29.297 0 22.001 0 14.706 0 8.721.468 4.57 4.614.42 8.76 0 14.728 0 22.024c0 7.297.421 13.267 4.571 17.413 4.15 4.146 10.128 4.567 17.43 4.567 7.303 0 13.28-.42 17.43-4.567S44 29.321 44 22.026c0-7.295-.43-13.274-4.583-17.428ZM20.38 30.158a.274.274 0 0 1-.275.27H16.36a.274.274 0 0 1-.286-.27v-9.806a.276.276 0 0 1 .286-.271h3.753a.273.273 0 0 1 .274.27l-.007 9.808Zm7.348 0a.274.274 0 0 1-.276.27h-3.58a.275.275 0 0 1-.278-.27v-8.467c0-1.478-.087-2.998-.85-3.761-.657-.657-1.881-.81-3.151-.84h-6.475a.275.275 0 0 0-.276.27v12.799a.276.276 0 0 1-.287.269h-3.58a.274.274 0 0 1-.276-.27V13.852a.273.273 0 0 1 .276-.27h10.311c2.695 0 5.512.123 6.901 1.513 1.39 1.391 1.521 4.21 1.521 6.909l.02 8.156Zm7.359 0a.275.275 0 0 1-.278.27h-3.58a.274.274 0 0 1-.277-.27V13.852a.273.273 0 0 1 .276-.27h3.58a.276.276 0 0 1 .279.27V30.16Z"
                    ></path>
                  </svg>
                </Link>
                <Link
                  className={styles.DevicesGridSony}
                  to="/"
                >
                  <svg
                    className={styles.V5VOOSony}
                    width="13.5rem"
                    height="14.6rem"
                    viewBox="0 0 135 146"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    data-tid="4aa2369b"
                  >
                    <path
                      d="M-1.18778 25.7119C-4.7621 31.4219 -14.0502 27.7164 -18.4851 26.4079C-22.9199 25.0994 -42.0702 19.3972 -44.6114 18.4265C-48.4232 16.9703 -51.1112 11.3157 -51.2145 10.4735C-51.7878 8.12163 -48.2923 2.35003 -47.3586 0.668278C-23.7539 -41.5504 46.1166 -166.025 46.1166 -166.025C48.1686 -169.625 52.3308 -171.702 56.5392 -171.078C56.5392 -171.078 58.2409 -171.145 62.4221 -170.161C73.257 -167.785 81.6096 -165.318 89.0239 -162.95C92.5033 -161.881 95.1822 -159.787 95.6813 -155.717L96.2837 -150.804C96.4386 -149.54 96.2339 -148.304 95.591 -147.157L2.83749 18.4506L-1.18778 25.7119Z"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M-48.2142 2.41148C-50.6013 6.76484 -54.6067 13.0264 -43.3626 12.9301C-32.1184 12.8338 -18.4425 19.2072 -13.678 22.0425C-9.30742 24.57 -5.90411 24.4377 -1.69409 16.94L94.2642 -153.905C94.8456 -154.973 95.1145 -157.428 94.5657 -159"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M-1.18778 25.7119C-4.7621 31.4219 -14.0502 27.7164 -18.4851 26.4079C-22.9199 25.0994 -42.0702 19.3972 -44.6114 18.4265C-48.4232 16.9703 -51.1112 11.3157 -51.2145 10.4735C-51.7878 8.12163 -48.2923 2.35003 -47.3586 0.668278C-23.7539 -41.5504 46.1166 -166.025 46.1166 -166.025C48.1686 -169.625 52.3308 -171.702 56.5392 -171.078C56.5392 -171.078 58.2409 -171.145 62.4221 -170.161C73.257 -167.785 81.6096 -165.318 89.0239 -162.95C92.5033 -161.881 95.1822 -159.787 95.6813 -155.717L96.2837 -150.804C96.4386 -149.54 96.2339 -148.304 95.591 -147.157L2.83749 18.4506L-1.18778 25.7119Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                  <svg
                    className={styles.DevicesLogo}
                    height="10%"
                    viewBox="0 0 99 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    data-tid="27b06994"
                  >
                    <path
                      fillRule="evenodd"
                      d="M25.968 14.215c2.2 1.974 5.494 3.039 9.044 3.039 3.56 0 6.925-1.052 9.065-3.04 1.588-1.472 2.428-3.602 2.428-5.602 0-2.064-.792-4.095-2.428-5.58C41.778.947 38.77 0 35.012 0c-3.395 0-7.003 1.166-9.044 3.028a7.528 7.528 0 0 0-2.461 5.584c0 2.085.798 4.111 2.46 5.603Zm13.897-1.102c-1.22 1.214-2.968 1.865-4.853 1.865-1.87 0-3.654-.665-4.86-1.865-1.155-1.15-1.772-2.775-1.772-4.501 0-1.732.61-3.36 1.772-4.51 1.205-1.194 2.996-1.855 4.86-1.855 1.86 0 3.649.667 4.853 1.854 1.168 1.151 1.778 2.774 1.778 4.51 0 1.813-.565 3.296-1.778 4.502Z"
                    ></path>
                    <path d="M3.176 1.183C5.01.365 7.166.01 9.066.01c3.35.005 6.083 1.1 7.05 1.606.385.212.588-.044.588-.242v-.61h2.16v5.255H16.93a3.653 3.653 0 0 0-1.198-2.003 5.606 5.606 0 0 0-1.215-.725c-1.154-.515-2.967-1.005-5.107-.997-1.811 0-3.548.335-4.408.874-.541.339-.815.759-.815 1.254 0 .695.599.98.893 1.072.812.251 2.648.433 4.045.572.27.027.525.052.752.076 1.335.14 4.127.513 5.361.816.636.156 1.413.434 1.906.666.565.265 1.108.61 1.552 1.054a4.446 4.446 0 0 1 1.253 3.125c0 1.799-1.066 2.79-1.55 3.177-.898.715-2.001 1.175-2.895 1.43l-.085.024c-.945.271-2.31.663-4.789.663-1.48 0-2.286-.17-3.435-.41l-.2-.042a18.892 18.892 0 0 1-3.504-1.132c-.402-.183-.518.2-.518.292v.816H.578v-6.037h2.155c0 .716.34 1.44.557 1.703.868 1.061 1.8 1.48 2.687 1.795.771.276 2.884.804 4.642.804 2.252 0 3.56-.543 3.856-.667l.04-.017.037-.014c.267-.102 1.26-.48 1.26-1.591 0-1.13-.97-1.373-1.599-1.532l-.074-.018c-.741-.188-2.503-.374-4.346-.568l-.325-.034c-1.974-.207-3.955-.518-4.883-.72-2.017-.442-2.822-1.185-3.318-1.643l-.041-.037C1.194 8.014.099 6.955.1 5.183c0-2.024 1.385-3.244 3.076-4ZM56.4.963l10.536 9.509-.108-6.402c-.011-.84-.166-1.19-1.073-1.19h-1.982V.965h9.01V2.88H70.85c-.926 0-.984.297-.996 1.19l.163 12.233h-3.085L54.797 5.473l.002 7.685c.011.837.05 1.23.91 1.23h2.165v1.914h-8.848v-1.914h2.068c.745 0 .743-.684.742-1.213V4.143c0-.58-.082-1.262-1.294-1.262h-1.678V.963H56.4ZM83.61 14.35c-.073.023-.449.034-.533.034l-1.875-.001v1.915h10.51v-1.915h-1.978c-.085 0-.456-.011-.528-.034a.656.656 0 0 1-.415-.368c-.028-.065-.042-.352-.042-.414V10.524c0-.073-.001-.185.07-.266l1.653-1.886c1.669-1.904 4.02-4.588 4.178-4.765.527-.598.813-.727 1.515-.727H98.1V.964h-8.66V2.88h1.308c.37 0 .484.388.313.593-.028.034-3.627 4.263-3.672 4.305-.045.042-.073.031-.106-.014-.034-.045-3.589-4.297-3.589-4.297-.25-.31-.055-.59.239-.59h1.273V.964H74.642V2.88h1.871c.817 0 1.354.516 1.66.85.247.268 5.63 6.368 5.766 6.546.123.161.128.193.128.266l-.001 3.027c0 .061-.014.35-.041.414a.661.661 0 0 1-.415.368Z"></path>
                  </svg>
                </Link>
                <Link
                  className={styles.DevicesGridApple}
                  to="/"
                >
                  <svg
                    className={styles.V5VOOApple}
                    width="185px"
                    height="145px"
                    viewBox="0 0 185 145"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    data-tid="3f84321b"
                  >
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="0.5px"
                      d="M90.05,44.45c.6-2-1.5-3.3-2.1-3.7a16.29,16.29,0,0,0-3.1-1.1,12.2,12.2,0,0,1-1.7-.5,3.18,3.18,0,0,1-1-1,4.67,4.67,0,0,0-1.6-1.5c-2.6-1.5-7.5-1.8-11.6.5a10.69,10.69,0,0,0-4.8,5.3c-.4,1.5-.7,2.7.6,3.5a6.79,6.79,0,0,0,2,.7,7.84,7.84,0,0,1,2.4.9,2.65,2.65,0,0,1,1.4,1.4,2.72,2.72,0,0,0,1.2,1.2c1.4.8,3.7.6,5.9.4a30.17,30.17,0,0,0,4.4-.9c-.1-.1-1.7-2.3,1.4-4.1a9.9,9.9,0,0,1,6.2-1Zm-5.5-6a9.7,9.7,0,0,0,8.4-.3,1.38,1.38,0,0,0,.4-.3,9.88,9.88,0,0,0-4.7-.9,7.92,7.92,0,0,0-4,1q-.3.15-.3.3C84.35,38.35,84.35,38.45,84.55,38.45Zm18.2,6.4,3.1,1.8-4,2.3,3.4,2-2.5,1.5-3.4-2-8.3,4.8c-1.7,1-1.7,1.8-.2,2.7a13.35,13.35,0,0,0,1.2.6h0L89.55,60c-.6-.3-1.2-.5-1.9-.9-3.5-2-3.6-3.5-.6-5.3l9-5.2-2.5-1.5,2.5-1.5,2.5,1.5Zm-3.2,21,21.4-5.8-3.3-1.9-16.4,5-.2-.1,8.6-9.6-3.3-2-10,12.4Z"
                    ></path>
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="0.5px"
                      d="M112.65,6.35A37.38,37.38,0,0,0,102,2.55a50.59,50.59,0,0,0-19,0,43.18,43.18,0,0,0-10.7,3.8c-4,2-8.5,4.6-14.7,8.2l-33.7,19.6c-6.2,3.6-10.8,6.3-14.1,8.6s-5.4,4.2-6.6,6.3a11,11,0,0,0,0,11.1c1.1,2,3.2,3.9,6.6,6.3s8,5,14.1,8.6l33.8,19.7c6.2,3.6,10.8,6.3,14.7,8.2a37.38,37.38,0,0,0,10.7,3.8,50.59,50.59,0,0,0,19,0,43.18,43.18,0,0,0,10.7-3.8c3.9-1.9,8.6-4.6,14.7-8.2l33.7-19.6c6.2-3.6,10.8-6.3,14.1-8.6s5.4-4.2,6.6-6.3a11,11,0,0,0,0-11.1c-1.1-2-3.2-3.9-6.6-6.3s-8-5-14.1-8.6l-33.8-19.7C121.25,11,116.55,8.35,112.65,6.35Z"
                    ></path>
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="0.5px"
                      d="M1.15,60.45l.9,1.7c1.1,2,3.3,3.9,6.7,6.3s8.1,5,14.3,8.6l34.2,19.7c6.2,3.6,10.9,6.3,14.9,8.2a37.92,37.92,0,0,0,10.8,3.8,51.65,51.65,0,0,0,19.2,0A45.27,45.27,0,0,0,113,105c4-2,8.7-4.6,14.9-8.2L162,77.15c6.2-3.6,10.9-6.3,14.3-8.6s5.5-4.2,6.7-6.3c0,0,.8-1.7,1.1-2.5"
                    ></path>
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="0.5px"
                      d="M1.55,55.15v36.3a11.48,11.48,0,0,0,1.5,5.6c1.1,2,3.2,3.9,6.6,6.3s8,5,14.1,8.6l33.8,19.7c6.2,3.6,10.8,6.3,14.7,8.2a37.38,37.38,0,0,0,10.7,3.8,50.59,50.59,0,0,0,19,0,43.18,43.18,0,0,0,10.7-3.8c4-2,8.6-4.6,14.7-8.2l33.7-19.6c6.2-3.6,10.8-6.3,14.1-8.6s5.4-4.2,6.6-6.3a10.4,10.4,0,0,0,1.5-5.3V54.55"
                    ></path>
                    <path
                      strokeWidth="1.5px"
                      d="M102.05,1.65a51.47,51.47,0,0,0-9.7-.9,50.41,50.41,0,0,0-9.6.9,41.1,41.1,0,0,0-10.9,3.9c-3.8,1.9-8.3,4.5-14.1,7.9-.2.1-.5.3-.7.4h0l-33.7,19.7h0c-.3.2-.7.4-1,.6-5.7,3.3-10,5.8-13.2,8-3.4,2.3-5.6,4.3-6.8,6.5a12.57,12.57,0,0,0-1.6,5.2h0v1.3h0v36.4a11.65,11.65,0,0,0,1.6,5.9h0c1.2,2.2,3.4,4.2,6.8,6.5l.4-.6-.4.6c3.4,2.3,8,5,14.2,8.6l33.8,19.7m125.4-83.6h0a13,13,0,0,1,1.6,4.8h0l.1,1h0v37.3h0a11.61,11.61,0,0,1-1.6,5.6h0c-1.2,2.2-3.4,4.2-6.8,6.5-3.2,2.2-7.5,4.7-13.2,8-.3.2-.7.4-1,.6h0l-33.8,19.6h0l-.7.4c-5.8,3.4-10.3,6-14.1,7.9a41.1,41.1,0,0,1-10.9,3.9h0a51.47,51.47,0,0,1-9.7.9,52.26,52.26,0,0,1-9.7-.9h0a41.1,41.1,0,0,1-10.9-3.9c-4-2-8.6-4.7-14.8-8.3m125.5-83.4c-1.2-2.2-3.4-4.2-6.8-6.5s-8-5-14.2-8.6l-33.8-19.7c-6.2-3.6-10.8-6.3-14.8-8.3a41.1,41.1,0,0,0-10.9-3.9h0"
                    ></path>
                  </svg>
                  <svg
                    className={styles.DevicesLogo}
                    height="30px"
                    viewBox="0 0 67 31"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    data-tid="27b06994"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.618 4.817c-1.013 1.239-2.748 2.148-4.131 2.148-.156 0-.312-.02-.41-.039a2.638 2.638 0 0 1-.058-.541c0-1.568.799-3.115 1.676-4.102C15.786 1.006 17.638.058 19.158 0c.04.174.058.387.058.6 0 1.548-.662 3.095-1.598 4.217ZM18.69 7.294c.877 0 3.996.078 6.042 3.018-.012.01-.039.027-.078.052-.519.336-3.215 2.078-3.215 5.694 0 4.489 3.956 6.076 4.073 6.114-.02.116-.624 2.167-2.085 4.295-1.287 1.858-2.67 3.734-4.737 3.734-.996 0-1.64-.283-2.305-.577-.714-.315-1.453-.642-2.684-.642-1.232 0-2.042.35-2.809.68-.69.296-1.344.578-2.239.578-1.89 0-3.216-1.741-4.736-3.85C2.163 23.894.74 20.044.74 16.368c0-5.862 3.84-8.996 7.64-8.996 1.119 0 2.135.408 3.034.77.715.287 1.356.545 1.917.545.497 0 1.114-.244 1.831-.527.998-.394 2.19-.866 3.528-.866ZM34.444 1.758h4.49V7.5h4.928v3.565h-4.929v11.878c0 2.425.982 3.482 3.216 3.482.67 0 1.063-.039 1.659-.098l.054-.005v3.544c-.731.125-1.567.229-2.444.229-4.99 0-6.974-1.742-6.974-6.074V11.065H30.83V7.5h3.613V1.758ZM66.26 7.437 58.072 29.95H53.25L45.043 7.437h4.803l5.659 17.952h.355l5.638-17.952h4.761Z"
                    ></path>
                  </svg>
                </Link>
                <Link
                  className={styles.DevicesGridAll}
                  to="/"
                >
                  <svg
                    className={styles.DevicesLogo}
                    width="4.9rem"
                    height="4.8rem"
                    viewBox="0 0 49 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    data-tid="27b06994"
                  >
                    <path
                      fillRule="evenodd"
                      d="M30.089 25H15.5v-2h14.587L23.5 16.416 24.914 15l9.005 9.001L24.913 33 23.5 31.584 30.089 25Z"
                    ></path>
                  </svg>
                  <div className={styles.devicesGridDisclaimer}>
                    ?????? ????????????????????
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.devicesMobileRoot}>
        <div className={styles.devicesMobileLeft}>
          <h3 className={styles.h3}>???? ?????????????????? ?? ????????????????</h3>
          <p className={styles.textRoot}>
            ???????????????????? ???????????????????? ????????????????????, ?????????? ???????????????? ???????????? ?? ??????????????
            ?????? ???????????? ??? <br />
            ???????? ?????? ??????????????????.
          </p>
          <div>
            <div className={styles.root}>
              <div className={styles.appLinksApplications}>
                <div className={styles.appLink}>
                  <Link to="/">
                    <svg
                      width="150px"
                      height="45px"
                      viewBox="0 0 155 47"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M.515 13.186c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C6.594.386 8.834.386 13.315.386h128.4c4.48 0 6.72 0 8.432.872a8.001 8.001 0 0 1 3.496 3.496c.872 1.711.872 3.951.872 8.432v20.4c0 4.48 0 6.72-.872 8.432a8.001 8.001 0 0 1-3.496 3.496c-1.712.872-3.952.872-8.432.872h-128.4c-4.48 0-6.721 0-8.432-.872a8 8 0 0 1-3.496-3.496c-.872-1.712-.872-3.952-.872-8.432v-20.4Z"
                        fill="#444"
                        fillOpacity=".4"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M50.43 13.471h.922c.32.04.643-.056.89-.263a1.15 1.15 0 0 0 .41-.83c0-.633-.48-1.042-1.29-1.042a1.232 1.232 0 0 0-.923.245c-.262.202-.43.502-.468.83H48.96c.036-.596.318-1.15.78-1.531a2.167 2.167 0 0 1 1.656-.476c1.356 0 2.312.756 2.312 1.845a1.595 1.595 0 0 1-1.252 1.57v.08c.882.04 1.567.78 1.533 1.66a2.29 2.29 0 0 1-.857 1.558 2.31 2.31 0 0 1-1.717.482 2.298 2.298 0 0 1-1.727-.469 2.278 2.278 0 0 1-.862-1.562h1.028c.062.656.667 1.08 1.56 1.08.894 0 1.477-.476 1.477-1.146 0-.68-.55-1.1-1.509-1.1h-.95v-.93Zm6.66.95c-1.237.077-1.935.615-1.935 1.547.002.442.191.862.522 1.157.33.296.77.438 1.212.392a1.752 1.752 0 0 0 1.562-.813h.081v.728h.99v-3.538c0-1.094-.736-1.74-2.04-1.74-1.18 0-2.021.57-2.126 1.46h.994c.115-.366.51-.576 1.084-.576.702 0 1.065.309 1.065.856v.447l-1.41.08Zm1.408.671v.433a1.22 1.22 0 0 1-.432.85 1.23 1.23 0 0 1-.914.282c-.559 0-.965-.271-.965-.737 0-.457.325-.7 1.041-.747l1.27-.08Zm3.747 2.34v-4.318h2.398v-.86H61.22v5.178h1.026Zm6.47.086c1.313 0 2.149-1.032 2.149-2.677 0-1.646-.836-2.673-2.16-2.673a1.808 1.808 0 0 0-1.632.942h-.077v-.856h-.988v6.9h1.026v-2.506h.082c.318.575.942.914 1.6.87Zm-.297-4.432c.87 0 1.39.661 1.39 1.755 0 1.098-.52 1.76-1.394 1.76-.86 0-1.4-.676-1.4-1.756 0-1.084.54-1.759 1.404-1.759Zm3.813 5.321v.88c.096.014.34.024.426.024 1.06 0 1.552-.405 1.996-1.665l1.939-5.392h-1.088l-1.3 4.113h-.081l-1.304-4.113H71.7l1.883 5.197-.077.252a.89.89 0 0 1-.94.723 2.452 2.452 0 0 1-.336-.019Zm5.16-2.444h1.022c.1.456.53.694 1.132.694.683 0 1.103-.3 1.103-.766 0-.499-.377-.737-1.103-.737h-.779v-.794h.765c.62 0 .936-.237.936-.67 0-.38-.305-.67-.936-.67-.574 0-.993.242-1.06.65h-.99a1.822 1.822 0 0 1 2.05-1.516c1.236 0 1.944.556 1.944 1.431.012.502-.33.944-.821 1.06v.081a1.163 1.163 0 0 1 1.017 1.165c0 .985-.842 1.636-2.126 1.636-1.136 0-2.059-.518-2.153-1.564Zm5.757-3.71v5.18h1.018l2.401-3.582h.077v3.581h1.017v-5.178h-1.017l-2.397 3.562h-.081v-3.562h-1.018Zm10.118.861h-1.638v4.318h-1.027v-4.318h-1.638v-.86h4.303v.86Zm5.53 2.92a2.113 2.113 0 0 1-2.255 1.498 2.367 2.367 0 0 1-1.823-.782 2.346 2.346 0 0 1-.58-1.89 2.382 2.382 0 0 1 .58-1.898 2.404 2.404 0 0 1 1.818-.808c1.448 0 2.322.984 2.322 2.61v.357h-3.673v.057c-.033.385.099.765.363 1.047.263.283.635.441 1.022.437.502.06.99-.188 1.236-.628h.99Zm-3.61-1.669h2.625a1.246 1.246 0 0 0-.341-.953 1.258 1.258 0 0 0-.938-.388 1.331 1.331 0 0 0-.958.387 1.32 1.32 0 0 0-.389.954Zm7.96-2.111h2.345c1.018 0 1.615.513 1.615 1.317.003.525-.364.981-.879 1.094v.08c.631.04 1.12.565 1.112 1.194 0 .904-.682 1.493-1.824 1.493h-2.369v-5.178Zm1.018.784v1.341h1.017c.621 0 .917-.237.917-.675 0-.404-.258-.666-.803-.666h-1.131Zm0 3.61V15.13h1.088c.693 0 1.061.242 1.061.76 0 .49-.325.757-.932.757h-1.217ZM90.824 31.62c.158 1.417 1.54 2.346 3.428 2.346 1.81 0 3.11-.93 3.11-2.206 0-1.109-.784-1.773-2.643-2.227l-1.859-.446c-2.633-.634-3.856-1.86-3.856-3.85 0-2.464 2.156-4.157 5.219-4.157 3.03 0 5.108 1.693 5.178 4.157h-2.167c-.13-1.425-1.313-2.285-3.042-2.285-1.729 0-2.912.87-2.912 2.137 0 1.01.756 1.603 2.604 2.058l1.58.387c2.943.692 4.166 1.87 4.166 3.958 0 2.672-2.137 4.345-5.537 4.345-3.18 0-5.328-1.634-5.467-4.217h2.197Zm-39.435.12h5.467l1.312 3.86h2.355L55.345 21.32h-2.406L47.761 35.6h2.315l1.313-3.86Zm4.9-1.782h-4.334l2.138-6.264h.06l2.136 6.264Zm11.054 5.75c2.624 0 4.364-2.079 4.364-5.314 0-3.227-1.75-5.315-4.404-5.315a3.713 3.713 0 0 0-3.33 1.84h-.039v-1.732h-2.078v13.857h2.147v-5.157h.05a3.548 3.548 0 0 0 3.29 1.821Zm-.606-8.808c1.67 0 2.764 1.386 2.764 3.494 0 2.127-1.095 3.503-2.764 3.503-1.64 0-2.743-1.405-2.743-3.503 0-2.079 1.103-3.494 2.743-3.494Zm16.48 3.494c0 3.235-1.74 5.314-4.364 5.314a3.548 3.548 0 0 1-3.29-1.821h-.05v5.157h-2.147V25.188h2.078v1.732h.04a3.713 3.713 0 0 1 3.329-1.84c2.654 0 4.403 2.088 4.403 5.315Zm-2.207 0c0-2.108-1.094-3.494-2.763-3.494-1.64 0-2.743 1.415-2.743 3.494 0 2.098 1.103 3.503 2.743 3.503 1.67 0 2.763-1.376 2.763-3.503Zm23.252-5.206v-2.464h-2.157v2.464h-1.52v1.692h1.52v5.968c0 2.02.826 2.81 2.943 2.81.4.008.799-.025 1.192-.098v-1.682c-.234.029-.47.045-.706.05-.874 0-1.272-.416-1.272-1.308v-5.74h1.989v-1.692h-1.989Zm8.1-.128c-3.022 0-4.96 2.058-4.96 5.334 0 3.285 1.919 5.335 4.96 5.335 3.042 0 4.96-2.05 4.96-5.335 0-3.276-1.928-5.334-4.96-5.334Zm0 1.76c1.739 0 2.773 1.327 2.773 3.574 0 2.256-1.034 3.572-2.773 3.572s-2.773-1.316-2.773-3.572c0-2.237 1.034-3.573 2.773-3.573Zm8.777-1.633h-2.047V35.6h2.146v-6.176a2.15 2.15 0 0 1 .565-1.71c.43-.46 1.041-.71 1.672-.685.326-.01.652.034.964.13v-2a3.321 3.321 0 0 0-.735-.08 2.492 2.492 0 0 0-2.515 1.882h-.05v-1.773Zm8.694 10.542c2.366 0 4.214-1.298 4.503-3.188h-2.038a2.366 2.366 0 0 1-2.415 1.465 2.73 2.73 0 0 1-2.075-.843 2.705 2.705 0 0 1-.738-2.106v-.13h7.386v-.732c0-3.157-1.82-5.136-4.713-5.136-2.941 0-4.84 2.119-4.84 5.384 0 3.256 1.888 5.286 4.93 5.286Zm2.475-6.295h-5.228a2.63 2.63 0 0 1 .779-1.874 2.652 2.652 0 0 1 1.884-.769 2.52 2.52 0 0 1 1.863.764 2.5 2.5 0 0 1 .702 1.879ZM34.738 10.558a5.587 5.587 0 0 1-1.287 4.014 4.743 4.743 0 0 1-3.739 1.76 5.317 5.317 0 0 1 1.322-3.865 5.734 5.734 0 0 1 3.704-1.909Zm4.59 8.543a5.686 5.686 0 0 0-2.723 4.774 5.499 5.499 0 0 0 3.372 5.06 12.585 12.585 0 0 1-1.753 3.556c-1.033 1.538-2.117 3.042-3.836 3.07-.817.018-1.37-.216-1.944-.46-.6-.254-1.225-.52-2.203-.52-1.038 0-1.69.274-2.32.538-.545.228-1.072.45-1.814.48-1.638.06-2.889-1.642-3.96-3.166-2.14-3.113-3.805-8.772-1.572-12.623a6.143 6.143 0 0 1 5.167-3.137c.928-.02 1.82.337 2.6.65.598.239 1.13.452 1.567.452.384 0 .902-.205 1.507-.444.951-.376 2.115-.836 3.302-.712a5.858 5.858 0 0 1 4.61 2.482Z"
                        fill="#fff"
                        fillOpacity=".9"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className={styles.appLink}>
                  <Link to="/">
                    <svg
                      width="150px"
                      height="45px"
                      viewBox="0 0 155 47"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M.515 13.186c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C6.594.386 8.834.386 13.315.386h128.4c4.48 0 6.72 0 8.432.872a8.001 8.001 0 0 1 3.496 3.496c.872 1.711.872 3.951.872 8.432v20.4c0 4.48 0 6.72-.872 8.432a8.001 8.001 0 0 1-3.496 3.496c-1.712.872-3.952.872-8.432.872h-128.4c-4.48 0-6.721 0-8.432-.872a8 8 0 0 1-3.496-3.496c-.872-1.712-.872-3.952-.872-8.432v-20.4Z"
                        fill="#444"
                        fillOpacity=".4"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="m66.018 9.406-.204-.002-.245.004a3.664 3.664 0 0 0-3.223 2.288 3.644 3.644 0 0 0-.261 1.44 3.642 3.642 0 0 0 1.067 2.647 3.662 3.662 0 0 0 2.664 1.071l.276-.01.188-.013.236-.032c.312-.054.618-.148.91-.279a3.51 3.51 0 0 0 1.205-.935l.163-.198-.999-.997-.196.245-.137.156a2.334 2.334 0 0 1-1.665.717 2.227 2.227 0 0 1-1.63-.644 2.54 2.54 0 0 1 .009-3.426 2.218 2.218 0 0 1 1.617-.636 1.925 1.925 0 0 1 1.626.73l.192.245 1.01-.97-.168-.201-.143-.161a3.34 3.34 0 0 0-2.292-1.039ZM74 9.557v-.01h-5.11v1.378h1.854v5.786h1.413v-5.786H74V9.78l2.232 4.931-.232.507a.747.747 0 0 1-.18.226.536.536 0 0 1-.26.044.64.64 0 0 1-.323-.083l-.314-.182-.385 1.366.225.098.149.058c.2.069.41.106.623.108a1.948 1.948 0 0 0 1.795-1.376l2.67-5.93h-1.627l-1.406 3.355-1.442-3.345H74Zm13.954 2.817V9.547h-1.412v7.164h1.412V13.73H90.7v2.98h1.413V9.548h-1.412l-.001 2.827h-2.746Zm-34.462 2.958V9.547h-4.976v3.55l.018.222c.017.367-.031.715-.141 1.046l-.073.196-.087.19a2.857 2.857 0 0 1-.34.524l-.061.069h-.85v2.763h1.381v-1.396h4.488v1.386h1.38v-2.764h-.74ZM97.767 9.67a3.707 3.707 0 0 0-4.05.807 3.842 3.842 0 0 0-.005 5.288 3.73 3.73 0 0 0 5.258.006 3.828 3.828 0 0 0 .006-5.29 3.713 3.713 0 0 0-1.21-.811Zm-38.225 0a3.706 3.706 0 0 0-4.048.807 3.842 3.842 0 0 0-.005 5.288 3.73 3.73 0 0 0 5.256.006 3.828 3.828 0 0 0 .006-5.29 3.713 3.713 0 0 0-1.209-.811Zm47.599.452a2.223 2.223 0 0 0-1.536-.575h-2.67v7.169l2.824-.05.194-.005a2.334 2.334 0 0 0 1.404-.607c.446-.387.699-.96.686-1.557a1.767 1.767 0 0 0-.379-1.114l-.107-.127-.118-.118-.127-.108-.106-.075.098-.09.114-.124.102-.135c.197-.295.297-.639.291-.989a1.928 1.928 0 0 0-.67-1.495ZM85.594 16.71V9.547h-5.35v7.164h1.411v-5.786h2.527v5.786h1.412Zm9.16-5.284a2.272 2.272 0 0 1 3.189.01 2.528 2.528 0 0 1-.01 3.394 2.27 2.27 0 0 1-3.188-.01 2.528 2.528 0 0 1 .01-3.394Zm-38.224 0a2.271 2.271 0 0 1 3.19.01 2.528 2.528 0 0 1-.01 3.394 2.27 2.27 0 0 1-3.19-.01 2.528 2.528 0 0 1 .01-3.394Zm-6.634-.502h2.118v4.451h-2.558l.125-.29a4.67 4.67 0 0 0 .314-1.973v-2.188Zm54.456 4.407.025-1.625 1.399.001.103.006a.82.82 0 0 1 .718.812.817.817 0 0 1-.23.553.748.748 0 0 1-.582.254h-1.433Zm.002-2.958.032-1.484 1.31.001.097.004a.666.666 0 0 1 .422.22.693.693 0 0 1-.022 1.012.733.733 0 0 1-.572.248h-1.267Zm-30.86 15.059a4.681 4.681 0 0 1 3.303-1.38 4.631 4.631 0 0 1 3.35 1.342 4.602 4.602 0 0 1 1.36 3.333 4.682 4.682 0 0 1-4.68 4.675 4.682 4.682 0 0 1-4.696-4.66 4.682 4.682 0 0 1 1.363-3.31Zm1.673 5.755a2.848 2.848 0 0 0 1.63.378 2.716 2.716 0 0 0 2.486-1.776c.124-.34.18-.7.162-1.062a2.839 2.839 0 0 0-1.809-2.635 2.851 2.851 0 0 0-3.122.709 2.832 2.832 0 0 0 .653 4.386ZM63.22 27.425a4.682 4.682 0 0 1 3.308-1.373 4.63 4.63 0 0 1 3.338 1.342 4.601 4.601 0 0 1 1.36 3.333 4.68 4.68 0 0 1-4.683 4.675 4.682 4.682 0 0 1-4.692-4.667c0-1.241.492-2.432 1.37-3.31Zm1.675 5.768a2.848 2.848 0 0 0 1.633.372h-.011a2.717 2.717 0 0 0 2.486-1.776c.125-.34.18-.7.162-1.062a2.84 2.84 0 0 0-1.812-2.635 2.851 2.851 0 0 0-3.122.714 2.832 2.832 0 0 0 .664 4.387Zm-10.6-3.72v-1.98l6.696-.055c.076.41.113.826.11 1.243a6.59 6.59 0 0 1-1.722 4.642 6.629 6.629 0 0 1-5.085 2.036 7.296 7.296 0 0 1-6.55-3.55 7.253 7.253 0 0 1 0-7.433 7.296 7.296 0 0 1 6.55-3.549 6.948 6.948 0 0 1 4.997 2.058l-1.4 1.396a5.082 5.082 0 0 0-3.608-1.42 5.287 5.287 0 0 0-5.295 5.28 5.288 5.288 0 0 0 5.295 5.28 4.883 4.883 0 0 0 3.674-1.451 4.141 4.141 0 0 0 1.103-2.497h-4.766Zm48.438-2.555a4.412 4.412 0 0 1 1.544 2.115l.232.495-6.278 2.585a2.383 2.383 0 0 0 2.274 1.42 2.68 2.68 0 0 0 2.306-1.3l1.598 1.1a4.668 4.668 0 0 1-3.904 2.07 4.596 4.596 0 0 1-4.33-2.878 4.568 4.568 0 0 1-.326-1.798 4.393 4.393 0 0 1 2.659-4.316 4.42 4.42 0 0 1 1.754-.36 4.412 4.412 0 0 1 2.471.867Zm-4.719 2.673a2.557 2.557 0 0 0-.135 1.004l4.192-1.738a1.821 1.821 0 0 0-1.743-.99 2.575 2.575 0 0 0-2.314 1.724Zm-3.169 5.536H92.781v-13.75h2.063v13.75Zm-5.515-8.03h.077v-.77h1.897v8.326c0 3.454-1.996 4.873-4.412 4.873a4.468 4.468 0 0 1-4.16-2.76l1.799-.75a2.592 2.592 0 0 0 2.36 1.662c1.545 0 2.505-.956 2.505-2.75v-.67h-.066a3.203 3.203 0 0 1-2.472 1.1 4.692 4.692 0 0 1-4.47-4.68 4.693 4.693 0 0 1 4.47-4.68 3.314 3.314 0 0 1 2.472 1.1Zm-2.287 6.468a2.852 2.852 0 0 1-2.603-2.838 2.852 2.852 0 0 1 2.606-2.838 2.65 2.65 0 0 1 1.852.893c.472.534.707 1.236.653 1.945a2.612 2.612 0 0 1-1.492 2.588c-.319.15-.664.236-1.016.25Zm21.966-12.188H113.951a4.295 4.295 0 0 1 3.97 2.041 4.27 4.27 0 0 1-1.699 6.031c-.7.36-1.486.52-2.271.464h-2.879v5.214h-2.064v-13.75Zm2.053 6.6h2.878l.044.033a2.365 2.365 0 0 0 2.367-2.36 2.357 2.357 0 0 0-1.462-2.18 2.363 2.363 0 0 0-.905-.179h-2.922v4.686Zm13.448-1.477a3.86 3.86 0 0 1 2.15-.503l.055.034c2.35 0 4.181 1.396 4.181 3.806v5.29h-1.986v-1.1h-.066a2.9 2.9 0 0 1-2.647 1.32 3.196 3.196 0 0 1-2.351-.792 3.178 3.178 0 0 1-1.069-2.233c0-1.99 1.997-3.09 3.971-3.09a4.565 4.565 0 0 1 2.151.527v-.143a1.976 1.976 0 0 0-1.426-1.706 1.989 1.989 0 0 0-.78-.065 1.955 1.955 0 0 0-1.875 1.012l-1.831-.758c.341-.67.87-1.225 1.523-1.599Zm.286 5.866c0 .825.937 1.166 1.61 1.166l.056.033a2.49 2.49 0 0 0 2.415-2.2 3.67 3.67 0 0 0-1.875-.462c-1.037 0-2.206.363-2.206 1.463Zm10.976-.077 2.36-5.962h2.295l-5.648 12.969h-2.151l2.096-4.63-3.674-8.339h2.206l2.45 5.962h.066Zm-14.12 2.838h-2.064v-13.75h2.064v13.75ZM37.43 25.093l-4.681 2.664-4.157-3.695L33.2 19.99l4.23 2.407c.656.373 1.025.855 1.087 1.347v.002c-.062.491-.43.973-1.087 1.347Zm-5.607-5.887-14.618-8.32c-.417-.236-.812-.349-1.164-.349-.358 0-.671.117-.915.338-.213.192-.373.463-.466.803l12.803 11.38 4.36-3.852Zm-5.492 4.853L14.57 13.605v20.847L26.33 24.06Zm-11.505 12.17a1.5 1.5 0 0 0 .224.31l.077.075c.244.22.557.338.916.337.351 0 .746-.112 1.162-.348l14.167-8.063-3.912-3.477-12.635 11.165Z"
                        fill="#fff"
                        fillOpacity=".9"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className={styles.appLink}>
                  <Link to="/">
                    <svg
                      width="150px"
                      height="45px"
                      viewBox="0 0 155 47"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M.515 13.186c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C6.594.386 8.834.386 13.315.386h128.4c4.48 0 6.72 0 8.432.872a8.001 8.001 0 0 1 3.496 3.496c.872 1.711.872 3.951.872 8.432v20.4c0 4.48 0 6.72-.872 8.432a8.001 8.001 0 0 1-3.496 3.496c-1.712.872-3.952.872-8.432.872h-128.4c-4.48 0-6.721 0-8.432-.872a8 8 0 0 1-3.496-3.496c-.872-1.712-.872-3.952-.872-8.432v-20.4Z"
                        fill="#444"
                        fillOpacity=".4"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M83.083 10.411a1.286 1.286 0 0 1-.495-.442 1.5 1.5 0 0 1-.215-.583h.738c.08.437.336.656.77.656.435 0 .693-.219.776-.656h.743a1.47 1.47 0 0 1-.216.583c-.114.18-.279.328-.496.442-.217.114-.487.171-.805.171-.318 0-.584-.057-.8-.17Zm-7.495 6.162a2.468 2.468 0 0 1-.996-1.048c-.229-.451-.345-.973-.345-1.57 0-.625.123-1.173.368-1.642a2.58 2.58 0 0 1 1.058-1.086c.46-.256 1.004-.383 1.629-.383.6 0 1.113.124 1.546.37.433.248.761.596.988 1.044.227.449.34.968.34 1.557 0 .637-.125 1.19-.371 1.66-.248.47-.6.833-1.058 1.086-.457.255-.996.382-1.613.382-.596.004-1.112-.122-1.546-.37Zm2.658-.728c.287-.193.5-.458.643-.796.142-.338.214-.723.214-1.157 0-.426-.064-.807-.19-1.14a1.688 1.688 0 0 0-.602-.796c-.276-.198-.632-.298-1.066-.298-.415 0-.767.102-1.058.302-.29.201-.508.47-.652.809a2.8 2.8 0 0 0-.217 1.116c0 .43.069.813.206 1.153.137.34.346.607.627.803.28.196.63.296 1.045.296.411-.003.762-.1 1.05-.292Zm-10.492 1.018h1.156l-2.207-3.236 1.085-1.557c.092-.134.182-.23.268-.29.087-.061.19-.09.31-.09.102 0 .208.024.32.07l.214-.8a1.562 1.562 0 0 0-.615-.115c-.276 0-.505.06-.688.178-.182.12-.364.312-.543.577l-1.23 1.78h-.537v-2.453h-1.025v5.936h1.025v-2.615h.7l1.767 2.615Zm3.537-5.936h-1.599v5.936h1.026v-2.287c.292.054.551.082.778.082.417 0 .784-.079 1.104-.236.32-.156.568-.382.748-.676.178-.293.268-.638.268-1.031 0-.58-.201-1.022-.6-1.33-.398-.305-.974-.458-1.725-.458Zm1.3 1.812c0 .361-.108.642-.327.84-.219.197-.537.296-.955.296-.138 0-.335-.02-.591-.062v-2.107h.558c.431 0 .76.08.981.241.224.162.335.427.335.792Zm12.804.86v3.264h.952v-5.936H85.17l-2.936 4.6c.025-.437.038-.84.038-1.209v-3.391h-.952v5.936h1.14l2.98-4.674c-.03.53-.045 1-.045 1.41Zm-31.54 2.974a2.47 2.47 0 0 1-.996-1.048c-.229-.45-.344-.973-.344-1.57 0-.625.122-1.173.367-1.642a2.582 2.582 0 0 1 1.058-1.086c.46-.256 1.004-.383 1.63-.383.599 0 1.113.124 1.545.37.433.249.761.596.988 1.044.227.447.34.968.34 1.557 0 .637-.124 1.19-.37 1.66-.249.47-.6.833-1.059 1.086-.459.253-.996.383-1.613.383-.597.003-1.112-.123-1.546-.371Zm2.656-.728c.288-.193.502-.458.644-.795.142-.338.213-.724.213-1.158 0-.426-.063-.806-.189-1.14a1.688 1.688 0 0 0-.602-.796c-.276-.198-.632-.297-1.066-.297-.415 0-.768.1-1.058.302-.29.2-.508.47-.652.808a2.8 2.8 0 0 0-.217 1.117c0 .429.069.813.206 1.152.137.34.346.607.627.803.28.196.63.296 1.045.296.413-.003.762-.1 1.05-.292Zm2.17-4.06h1.838v5.08h1.025v-5.08h1.752l.094-.857h-4.62l-.09.857Zm30.374 0h-1.841l.089-.857h4.622l-.096.857h-1.75v5.08h-1.024v-5.08Zm3.741-.857h3.497l-.099.842h-2.373v1.636h2.238v.792h-2.238v1.812h2.5l-.086.854h-3.439v-5.936Zm10.673 3.003c.212.13.378.3.5.513.12.212.183.46.183.744 0 .332-.084.622-.249.875a1.618 1.618 0 0 1-.725.591c-.318.14-.7.211-1.146.211h-1.935v-5.938h1.853c.629 0 1.1.12 1.414.364.316.243.472.576.472 1 0 .354-.101.647-.301.884a1.594 1.594 0 0 1-.79.498c.272.043.513.127.724.258Zm-2.371-.576h.641c.213 0 .401-.043.563-.128a.946.946 0 0 0 .375-.343.88.88 0 0 0 .131-.473c0-.243-.089-.425-.265-.545-.176-.121-.431-.18-.764-.18h-.681v1.669Zm1.72 2.494c.208-.171.313-.411.313-.723 0-.331-.116-.583-.346-.754-.23-.171-.563-.258-.997-.258h-.69v1.992h.771c.423 0 .74-.087.949-.257Zm2.224 16.294v-10.59l2.043-.167v10.392c0 .382.065.651.195.81.131.158.337.236.619.236.128 0 .307-.03.541-.091l.242 1.47c-.195.08-.432.141-.711.187-.279.047-.544.07-.793.07-1.424.002-2.136-.77-2.136-2.317Zm-18.609 1.584a4.98 4.98 0 0 1-2.044-2.106c-.477-.914-.713-1.994-.713-3.24 0-1.351.274-2.499.82-3.443a5.29 5.29 0 0 1 2.24-2.125c.944-.474 2.004-.71 3.178-.71a8.503 8.503 0 0 1 3.737.855l-.524 1.579c-1.09-.521-2.132-.78-3.123-.78-.836 0-1.57.177-2.198.535-.628.357-1.117.881-1.466 1.574-.348.692-.524 1.528-.524 2.51 0 .858.134 1.619.403 2.283.268.665.693 1.19 1.27 1.579.578.389 1.308.581 2.19.581a7.21 7.21 0 0 0 1.197-.1 6.338 6.338 0 0 0 1.121-.29v-2.436h-2.782v-1.595h4.777v5.068a10.66 10.66 0 0 1-2.163.74c-.756.17-1.507.257-2.256.257-1.208-.001-2.255-.246-3.14-.736ZM60.63 31.072h-4.818l-1.179 3.223h-2.117l4.718-12.038h2.002l4.826 12.038h-2.227l-1.205-3.223Zm-4.212-1.636h3.596l-1.288-3.448a26.663 26.663 0 0 1-.524-1.579c-.155.51-.323 1.03-.506 1.563l-1.278 3.464Zm8.599-1.91c0-.664-.023-1.396-.067-2.193h1.927c.071.371.12.752.15 1.138.797-.87 1.71-1.304 2.741-1.304.598 0 1.153.15 1.66.452.51.302.921.779 1.235 1.429.313.651.47 1.477.47 2.48 0 1.046-.18 1.941-.537 2.684-.356.743-.857 1.304-1.499 1.686-.642.383-1.385.573-2.227.573-.609 0-1.21-.102-1.802-.306v3.704l-2.053.175V27.526h.002Zm5.394 4.581c.418-.561.627-1.383.627-2.463 0-1.003-.173-1.73-.519-2.181a1.657 1.657 0 0 0-1.383-.678 2.24 2.24 0 0 0-1.105.282c-.338.188-.66.441-.963.756v4.802c.204.1.442.178.713.237.271.058.54.086.807.086.798.002 1.405-.279 1.823-.84Zm3.968-6.774c.044.797.067 1.529.067 2.193h-.002v10.518l2.052-.175v-3.704a5.504 5.504 0 0 0 1.803.306c.842 0 1.585-.19 2.227-.573.641-.382 1.142-.943 1.498-1.686.358-.743.538-1.638.538-2.684 0-1.003-.157-1.829-.47-2.48-.314-.65-.725-1.127-1.235-1.429a3.192 3.192 0 0 0-1.66-.452c-1.03 0-1.945.434-2.742 1.304a9.955 9.955 0 0 0-.15-1.138h-1.926Zm6.09 4.31c0 1.081-.21 1.903-.627 2.464-.418.562-1.026.843-1.824.841-.266 0-.536-.028-.807-.086a3.151 3.151 0 0 1-.713-.237v-4.802c.303-.315.625-.568.963-.756a2.24 2.24 0 0 1 1.106-.282c.576 0 1.036.227 1.382.677.346.453.52 1.18.52 2.182Zm20.777 3.464c.022.444.069.839.14 1.188v-.002h1.927a30.945 30.945 0 0 1-.067-1.686v-3.564c0-.968-.152-1.74-.457-2.314-.304-.573-.728-.978-1.27-1.213-.544-.235-1.202-.352-1.978-.352-.664 0-1.296.068-1.893.207-.6.139-1.081.29-1.447.457l.323 1.496a7.35 7.35 0 0 1 1.313-.457 5.68 5.68 0 0 1 1.404-.192c.632 0 1.115.164 1.453.487.34.323.508.882.508 1.674v.174a11.478 11.478 0 0 0-1.628-.116c-1.463 0-2.506.258-3.131.778-.626.519-.94 1.21-.94 2.081 0 .586.125 1.084.375 1.49.25.409.586.713 1.009.915.424.203.893.304 1.409.304.638 0 1.21-.133 1.716-.395a3.95 3.95 0 0 0 1.234-.96Zm-.043-1.236c-.271.305-.62.56-1.046.764a2.893 2.893 0 0 1-1.256.307c-.404 0-.725-.106-.96-.32-.235-.213-.352-.542-.352-.985 0-.465.163-.834.486-1.108.323-.275.91-.412 1.757-.412.356 0 .811.031 1.371.092v1.662Zm8.948-10.319v10.591c0 1.547.713 2.319 2.136 2.317.25 0 .515-.023.794-.07.279-.046.516-.108.71-.186l-.242-1.471c-.233.06-.413.091-.54.091-.282 0-.488-.078-.619-.237-.131-.158-.195-.427-.195-.81V21.387l-2.044.166Zm12.146 8.524h-5.864c.095 1.878.989 2.817 2.684 2.817.421 0 .851-.05 1.292-.154.441-.103.861-.24 1.266-.411l.449 1.404c-1.002.486-2.129.731-3.381.731-.952 0-1.755-.18-2.409-.54a3.471 3.471 0 0 1-1.475-1.554c-.33-.676-.495-1.49-.495-2.443 0-.99.174-1.843.524-2.558.349-.715.834-1.26 1.458-1.636.623-.377 1.343-.565 2.155-.565.848 0 1.556.197 2.122.594.567.397.989.924 1.263 1.582.275.66.411 1.388.411 2.185v.548Zm-2.001-1.304c-.037-.715-.219-1.25-.541-1.608-.321-.358-.751-.536-1.288-.536-.52 0-.953.18-1.3.54-.345.361-.571.895-.677 1.604h3.806Zm3.588-3.44c.045 1.007.068 1.758.068 2.251v6.71h2.043v-5.756c.41-.565.794-.97 1.155-1.217.359-.244.78-.369 1.262-.369.243 0 .465.031.664.092l.258-1.778c-.227-.067-.5-.1-.814-.1-.392 0-.743.084-1.05.253a2.862 2.862 0 0 0-.807.657c-.23.27-.464.599-.702.992a25.057 25.057 0 0 0-.158-1.735h-1.919Zm6.681 12.632a5.154 5.154 0 0 1-.739-.178l.373-1.496c.14.04.314.075.525.113.211.036.41.054.598.054.907 0 1.588-.585 2.043-1.754l.133-.331-3.306-9.039h2.2l1.662 5.052c.272.864.446 1.526.525 1.985a25.71 25.71 0 0 1 .548-1.944l1.687-5.093h2.068l-3.298 9.08c-.31.859-.644 1.55-1.005 2.077-.361.525-.786.915-1.276 1.17-.491.255-1.082.382-1.773.382a5.59 5.59 0 0 1-.965-.078ZM32.637 9.386H20.392c-5.767 0-7.877 2.11-7.877 7.878v12.244c0 5.768 2.11 7.878 7.877 7.878h12.241c5.768 0 7.882-2.11 7.882-7.878V17.264c.001-5.768-2.109-7.878-7.878-7.878Z"
                        fill="#fff"
                        fillOpacity=".9"
                      ></path>
                      <path
                        d="M26.516 18.728a4.665 4.665 0 0 1-4.66-4.662h.659a4.008 4.008 0 0 0 4.002 4.003 4.008 4.008 0 0 0 4.003-4.003h.66a4.672 4.672 0 0 1-4.664 4.662Zm-8.456 4.66h.742v3.661h-.742v-1.487h-1.677v1.487h-.744v-3.66h.744v1.476h1.677v-1.477Zm4.184 2.096c0 .596-.295.913-.832.913-.54 0-.837-.328-.837-.938v-2.07h-.743v2.094c0 1.03.572 1.62 1.57 1.62 1.007 0 1.585-.602 1.585-1.651v-2.064h-.742v2.096h-.001Zm8.585.421-.832-2.517h-.605l-.832 2.517-.81-2.515h-.79l1.277 3.66h.615l.833-2.404.832 2.403h.619l1.273-3.66h-.77l-.81 2.516Zm2.912-.431h1.35v-.666h-1.35v-.749h1.962v-.667h-2.694v3.655h2.764v-.667h-2.032v-.906Zm2.918 1.57h.733v-3.656h-.733v3.656Zm-12.205-.76-.333.764h-.76l1.614-3.66h.655l1.607 3.66h-.778l-.33-.763h-1.675Zm.277-.66h1.124l-.563-1.31-.56 1.31Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className={styles.copyrights}>
                <p className={styles.copyrightsTextRoot}>
                  Apple, ?????????????? Apple ???????????????? ?????????????????? ?????????????? Apple Inc.,
                  <br /> ?????????????????????????????????????? ?? ?????? ?? ???????? ?????????????? ?? ????????????????.
                  <br /> App Store ???????????????? ???????????? ???????????????????????? Apple Inc.
                </p>
                <p className={styles.copyrightsTextRoot}>
                  Google Play ?? ?????????????? Google Play ????????????????
                  <br /> ?????????????????? ?????????????? ???????????????????? Google LLC.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.devicesMobileRight}>
          <img
            className={styles.devicesMobileImg}
            src="https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/_next/static/media/devices-tablet.f5c84d3e.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.buttonWrap}>
        <Button variant="main">?????????????????????? ?????????????????? ???? ?????????? ????????</Button>
      </div>
      <Footer />
    </>
  );
};

export default Main;
