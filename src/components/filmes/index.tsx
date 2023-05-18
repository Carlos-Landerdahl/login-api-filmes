import { CarouselMovies } from './carouselFilmes';
import { ContainerFilmes } from './styles';

import { getMoviesPopular } from '@/pages/api/getMoviesPopular';
import { getMoviesTopRated } from '@/pages/api/getMovieTopRated';

export function ListaFilmes() {
  return (
    <ContainerFilmes>
      <CarouselMovies title="Em alta" fetchMovies={getMoviesPopular} />
      <CarouselMovies title="Os melhores" fetchMovies={getMoviesTopRated} />
    </ContainerFilmes>
  );
}
