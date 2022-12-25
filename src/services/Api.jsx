import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const MY_KEY = '3d8b97d0f6e631ee52451d149da311a3';

export const getMoviesTrends = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${MY_KEY}`);
  return data;
};

export const getSearchMovies = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${MY_KEY}&query=${query}&page=1`
  );
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${MY_KEY}`);

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${MY_KEY}`
  );

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${MY_KEY}`
  );

  return data;
};
