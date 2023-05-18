import axios from 'axios';
const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function getMoviesNews() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch movies', error);
    return [];
  }
}
