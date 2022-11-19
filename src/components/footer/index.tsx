import React, {FC} from "react";

import styles from "./styles.scss";
import {Link} from "react-router-dom";

const Footer: FC = () => {
	return (
			<>
				<div className={styles.footerRoot}>
					<div className={styles.footerContent}>
						<div className={styles.footerSocialNetworks}>
							<Link to="/">
								<svg width="28px" height="28px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<path fillRule="evenodd" clipRule="evenodd" d="M4.264 4.264C3 5.53 3 7.567 3 11.625v.786c0 4.034 0 6.065 1.264 7.325C5.53 21 7.567 21 11.625 21h.925c3.941 0 5.94 0 7.186-1.249C21 18.484 21 16.448 21 12.375v-.786c0-4.034 0-6.065-1.264-7.325C18.47 3 16.433 3 12.375 3h-.786C7.555 3 5.524 3 4.264 4.264Zm1.773 4.203c.098 4.687 2.438 7.5 6.54 7.5l.233.007v-2.677a3.701 3.701 0 0 1 3.105 2.677h2.137a5.92 5.92 0 0 0-3.082-3.75 5.715 5.715 0 0 0 2.625-3.75H15.66c-.42 1.485-1.665 2.835-2.85 2.963V8.474h-1.935v5.183c-1.2-.315-2.715-1.755-2.783-5.19H6.037Z" fill="#636363"></path>
								</svg>
							</Link>
							<Link to="/">
								<svg width="28px" height="28px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<path fillRule="evenodd" clipRule="evenodd" d="m21.094 3.634-3.199 16.523s-.447 1.146-1.677.596l-4.551-3.575-2.92 2.727s-.227.177-.477.066l.559-5.066.019.016.012-.103s8.186-7.54 8.521-7.86c.336-.321.224-.39.224-.39.022-.39-.604 0-.604 0L6.154 13.626l-4.519-1.558s-.693-.252-.76-.802c-.067-.55.783-.848.783-.848l17.96-7.22s1.476-.664 1.476.436Z" fill="#636363"></path>
								</svg>
							</Link>
							<Link to="/">
								<svg width="28px" height="28px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<path fillRule="evenodd" clipRule="evenodd" d="M21.654 7.252c-.244-1.068-1.114-1.856-2.162-1.974-2.48-.278-4.99-.28-7.489-.278-2.499-.001-5.01 0-7.49.278-1.046.118-1.916.906-2.16 1.974C2.002 8.773 2 10.434 2 12c0 1.566 0 3.227.348 4.748.245 1.068 1.115 1.856 2.162 1.974C6.99 19 9.5 19.002 12 19c2.499.001 5.009 0 7.488-.278 1.047-.118 1.917-.906 2.162-1.974C22 15.226 22 13.566 22 12c0-1.566.003-3.227-.346-4.748ZM10 15.267V8.733l6 3.277-6 3.257Z" fill="#636363"></path>
								</svg>
							</Link>
							<Link to="/">
								<svg width="28px" height="28px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<path fillRule="evenodd" clipRule="evenodd" d="M11.9007 3C8.19101 3.00035 5.62048 3.01269 4.30101 4.30119C3.01257 5.62037 3.00023 8.31161 3.00023 11.9007C6.98546 11.7804 8.80788 11.6806 10.2614 10.2613C11.6806 8.80777 11.7805 6.98539 11.9007 3ZM4.30078 19.6989C3.01234 18.3798 3 15.6885 3 12.0995C6.98523 12.2197 8.80766 12.3195 10.2612 13.7389C11.6804 15.1924 11.7802 17.0148 11.9005 20.9998C8.19078 20.9998 5.62025 20.9878 4.30078 19.6989ZM12.0994 20.9998C12.2197 17.0148 12.3195 15.1924 13.7388 13.7389C15.1923 12.3195 17.0147 12.2197 20.9999 12.0995C20.9996 15.6885 20.9872 18.3798 19.6988 19.6989C18.3793 20.9878 15.8092 20.9998 12.0994 20.9998ZM12.0994 3C12.2197 6.98539 12.3195 8.80777 13.7388 10.2613C15.1923 11.6806 17.0147 11.7804 20.9999 11.9007C20.9996 8.31161 20.9872 5.62037 19.6988 4.30119C18.3793 3.01269 15.8092 3.00035 12.0994 3Z" fill="#636363"></path>
								</svg>
							</Link>
							<Link to="/">
								<svg width="28px" height="28px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<path d="M20.402 10.283a4.805 4.805 0 0 1-4.463-2.15v7.398a5.469 5.469 0 1 1-5.47-5.468c.115 0 .226.01.338.017v2.695c-.112-.014-.222-.034-.338-.034a2.791 2.791 0 1 0 0 5.582c1.542 0 2.904-1.215 2.904-2.756L13.4 3h2.578a4.803 4.803 0 0 0 4.427 4.287v2.996" fill="#636363"></path>
								</svg>
							</Link>
						</div>
						<div className={styles.footerSupport}>
							<p>Мы всегда готовы вам помочь.</p>
							<div className={styles.footerSupportLinks}>
								<button className={styles.textRootButton}>Задать вопрос</button>
							</div>
						</div>
						<div className={styles.footerCopyrights}>
							<div className={styles.footerCopyrightsLeft}>
								<div className={styles.footerCopyrightsRow}>
									<span className={styles.footerCopyrightsRec}>
										<span className={styles.textRoot}>© 2003–2022</span>
										<span className={styles.textRoot}>
											<span>
												<Link className={styles.linkRoot} to="/">Кинопоиск.</Link>
											</span>
										</span>
										<span className={styles.textRoot}>18+</span>
									</span>
								</div>
								<div className={styles.footerCopyrightsRow}>
									<span className={styles.textRoot}>Федеральные каналы доступны для бесплатного просмотра круглосуточно</span>
								</div>
								<div className={styles.footerCopyrightsRow}>
									<span className={styles.textRoot}>HBO ® and related service marks are the property of Home Box Office, Inc</span>
								</div>
								<div className={styles.footerCopyrightsRow}>
									<span className={styles.textRoot}>ООО «Кинопоиск», адрес местонахождения: 115035, Россия, г. Москва, ул. Садовническая, д. 82, стр. 2, пом. 9А01</span>
								</div>
								<div className={styles.footerCopyrightsRow}>
									<span className={styles.textRoot}>
										Адрес для обращений пользователей:
										<span>
											<Link className={styles.linkRoot} to="/">kinopoisk@support.yandex.ru</Link>
										</span>
									</span>
								</div>
								<div className={styles.footerCopyrightsRow}>
									<span className={styles.textRoot}>
										<span>
											<Link className={styles.linkRoot} to="/">Cоглашение</Link>
										</span>
										<span>
											<Link className={styles.linkRoot} to="/">Справка</Link>
										</span>
									</span>
								</div>
							</div>
							<div className={styles.footerCopyrightsRight}>
								<span className={styles.footerCopyrightsCompanyRec}>
									<span className={styles.textRoot}>Проект компании</span>
									<Link to="/">
										<svg width="80px" height="24px" viewBox="0 0 48 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="yandex-logo" data-tid="6200f054">
											<path d="M5.85198 11.9271H7.92849V0H4.90812C1.87058 0 0.27458 1.56167 0.27458 3.86128C0.27458 5.69753 1.1498 6.77869 2.71148 7.89417L0 11.9271H2.24812L5.2685 7.41366L4.22167 6.71005C2.95173 5.85198 2.33393 5.1827 2.33393 3.74115C2.33393 2.47122 3.22631 1.61316 4.92528 1.61316H5.85198V11.9271ZM45.8892 12.0987C46.833 12.0987 47.5023 11.9271 48 11.5667V9.90204C47.4852 10.2624 46.8674 10.4855 46.0093 10.4855C44.5506 10.4855 43.9499 9.35288 43.9499 7.56811C43.9499 5.69753 44.6879 4.7365 46.0265 4.7365C46.8159 4.7365 47.5881 5.01108 48 5.2685V3.53522C47.571 3.29496 46.8159 3.12335 45.8034 3.12335C43.1949 3.12335 41.8391 4.99392 41.8391 7.61959C41.8391 10.5027 43.1605 12.0987 45.8892 12.0987ZM33.1212 11.3436V9.67894C32.4862 10.108 31.4222 10.4855 30.4269 10.4855C28.9339 10.4855 28.3675 9.78191 28.2817 8.34036H33.207V7.25921C33.207 4.25599 31.8856 3.12335 29.8434 3.12335C27.355 3.12335 26.1709 5.02824 26.1709 7.63675C26.1709 10.64 27.6468 12.0987 30.2553 12.0987C31.5595 12.0987 32.5206 11.7555 33.1212 11.3436ZM14.4154 3.29496V6.71005H11.6868V3.29496H9.64462V11.9271H11.6868V8.3232H14.4154V11.9271H16.4576V3.29496H14.4154ZM25.6732 10.3139H24.7637V3.29496H18.8087V4.03289C18.8087 6.14373 18.6714 8.87236 17.9507 10.3139H17.3157V13.9006H19.2034V11.9271H23.7855V13.9006H25.6732V10.3139ZM39.6425 11.9271H41.9592L38.6814 7.27637L41.5645 3.29496H39.5052L36.6221 7.27637V3.29496H34.5799V11.9271H36.6221V7.68824L39.6425 11.9271ZM29.8091 4.7365C30.8216 4.7365 31.1305 5.5774 31.1305 6.65856V6.83018H28.2817C28.3332 5.45728 28.8309 4.7365 29.8091 4.7365ZM22.7215 10.3139H19.8384C20.4047 9.00965 20.5592 6.65856 20.5592 5.16553V4.90812H22.7215V10.3139Z" fill="#636363"></path>
										</svg>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</>
	);
};

export default Footer;
