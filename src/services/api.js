import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

export const fetchTrending = async () => {
  const response = await axios.get(`${BASE_URL}trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
  );

  return response.data.results;
};

export const fetchMovieId = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data.results;
};

export const fetchCast = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data.cast;
};
