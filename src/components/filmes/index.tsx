import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { ContainerFilmes } from './styles';

import { getMovies } from '@/pages/api/getMovies';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Movies {
  poster_path: string;
  id: number;
  title: string;
  poster: string;
}

export function ListaFilmes() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  return (
    <ContainerFilmes>
      <h1>Populares</h1>
      <Swiper
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="imgCarousel"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerFilmes>
  );
}
