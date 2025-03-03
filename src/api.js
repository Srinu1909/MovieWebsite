import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = async (type, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  );
  return response.data;
};

export { IMAGE_BASE_URL };
