import { ContainerBanner, SectionTitle } from './styles';

import 'swiper/css';
import 'swiper/css/bundle';
import { getMoviesPopular } from '@/pages/api/getMoviesPopular'; //Ajuste esse import conforme a localização real do arquivo em seu projeto
import { Movies } from '@/types/movieTypes';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from 'react';

interface CarouselMoviesProps {
  fetchMovies: () => Promise<Movies[]>;
  title: string;
}

export function CarouselMovies({ fetchMovies, title }: CarouselMoviesProps) {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchMovies();
      setMovies(result);
    };

    fetch();
  }, [fetchMovies]);

  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 9,
      spaceBetween: 10,
    },
  };

  return (
    <ContainerBanner>
      <SectionTitle>
        <h1>{title}</h1>
      </SectionTitle>
      <Swiper
        modules={[Navigation]}
        breakpoints={breakpoints}
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
    </ContainerBanner>
  );
}
