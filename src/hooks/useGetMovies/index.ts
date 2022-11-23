import {useEffect, useState} from "react";
import useApiCall from "../useApiCall";
import {Movie} from "./types";

const useGetMovies = (url: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const host = useApiCall();

  useEffect(() => {
    host.get<{films: Movie[]}>(url).then(res => {
      if (res.status === 200) {
        setMovies(res.data.films);
      }
    });
  }, []);

  return movies;
};

export default useGetMovies;
