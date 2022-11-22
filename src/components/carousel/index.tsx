import React, {FC, HTMLProps, useState} from "react";

import styles from "./styles.scss";
import {Link} from "react-router-dom";
import {Movie} from "../../hooks/useGetMovies/types";

interface ICarouselProps extends HTMLProps<HTMLElement> {
	movies: Movie[],
	title: string,
}

const Carousel: FC<ICarouselProps> = ({movies, title}) => {
	const [transform, setTransform] = useState(0);

	const slideRight = () => {
		if (transform < 65) {
			setTransform(transform + 5);
			console.log(transform);
		}
	}

	const slideLeft = () => {
		if (transform > 0) {
			setTransform(transform - 5);
			console.log(transform);
		}
	}

	return (
			<>
				<div className={styles.carouselRoot}>
					{/*<div className={styles.carouselHeader}>*/}
					{/*	<Link className={styles.carouselLink} to="/">*/}
					{/*		<h3 className={styles.headerTitle}>{title}</h3>*/}
					{/*		<svg className={styles.carouselSvg} width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-tid="f8b68a96">*/}
					{/*			<path fillRule="evenodd" clipRule="evenodd" d="M10.704 8.7348L5 3.46961L6.35656 2L13.6526 8.7348L6.35656 15.4696L5 14L10.704 8.7348Z"></path>*/}
					{/*		</svg>*/}
					{/*	</Link>*/}
					{/*</div>*/}
					<div className={styles.carouselContainer}>
						<button onClick={slideLeft} className={styles.leftHandle}>
							<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-tid="ca33cd8c"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z" fill="white"></path></svg>
						</button>
						<ul style={{transform: `translate(-${transform}%)`}} className={styles.carouselContainerScroll}>
							{movies.map((movie, key) =>
								<li key={key} style={{backgroundImage: `url(${movie.posterUrlPreview})`}} className={styles.carouselItem}></li>
							)}
						</ul>
						<button onClick={slideRight} className={styles.rightHandle}>
							<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-tid="ca33cd8c"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z" fill="white"></path></svg>
						</button>
					</div>
				</div>
			</>
	);
};

export default Carousel;
