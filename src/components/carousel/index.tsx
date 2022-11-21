import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";
import {Link} from "react-router-dom";
import {Movie} from "../../hooks/useGetMovies/types";

interface ICarouselProps extends HTMLProps<HTMLElement> {
	movies: Movie[],
	title: string,
}

const Carousel: FC<ICarouselProps> = ({movies, title}) => {
	return (
			<>
				<div className={styles.carouselRoot}>
					<div className={styles.carouselHeader}>
						<Link className={styles.carouselLink} to="/">
							<h3 className={styles.headerTitle}>{title}</h3>
							<svg className={styles.carouselSvg} width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-tid="f8b68a96">
								<path fillRule="evenodd" clipRule="evenodd" d="M10.704 8.7348L5 3.46961L6.35656 2L13.6526 8.7348L6.35656 15.4696L5 14L10.704 8.7348Z"></path>
							</svg>
						</Link>
					</div>
					<div className={styles.carouselContainer}>
						<ul className={styles.carouselContainerScroll}>
							{movies.map((movie, key) =>
								<li key={key} style={{backgroundImage: `url(${movie.posterUrlPreview})`}} className={styles.carouselItem}></li>
							)}
						</ul>
					</div>
				</div>
			</>
	);
};

export default Carousel;
