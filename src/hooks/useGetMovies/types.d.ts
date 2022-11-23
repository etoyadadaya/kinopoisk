export type Movie = {
  filmId: number;
  nameRu: string;
  year: number;
  countries: Country[];
  genres: Genre[];
  rating: number;
  posterUrl: string;
  posterUrlPreview: string;
};

type Country = {
  country: string;
};

type Genre = {
  genre: string;
};
