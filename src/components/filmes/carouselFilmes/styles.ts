import { styled } from '@/styles/stitches.config';

export const ContainerFilmesLancamentos = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  lineHeight: 0,

  h1: {
    margin: '30px 30px 30px 10px',
  },
});

export const ContainerBanner = styled('div', {
  '.mySwiper': {
    width: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '5%',
      background: 'linear-gradient(to right, rgb(20,20,20, 1), transparent)',
      zIndex: 4,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '5%',
      background: 'linear-gradient(to left, rgb(20,20,20, 1), transparent)',
      zIndex: 4,
    },
  },
});

export const SectionTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '40px 10px 10px 10px',
});
