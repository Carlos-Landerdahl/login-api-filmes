import axios from 'axios';
const key = 'b2d67c77d4b9d542fecc365e88421442';

export async function getMovies() {
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
