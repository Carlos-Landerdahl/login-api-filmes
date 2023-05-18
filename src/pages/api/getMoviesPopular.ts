import axios from 'axios';
const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function getMoviesPopular() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch movies', error);
    return [];
  }
}
