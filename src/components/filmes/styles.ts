import { styled } from '@/styles/stitches.config';

export const ContainerFilmes = styled('section', {
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',

  '.mySwiper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});
