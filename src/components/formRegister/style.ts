import { styled } from '@/styles/stitches.config';

export const ContainerForm = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  color: '$gray400',

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    gap: '10px',
    backgroundColor: 'rgba(0,0,0,.8)',
    padding: '40px',
    margin: '10px',
    borderRadius: '7px',

    h1: {
      textAlign: 'center',
    },

    a: {
      fontWeight: 'bold',
      color: 'white',
    },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',

    input: {
      borderRadius: '10px',
      padding: '10px',
      border: 'none',
      outline: 'none',
      fontSize: '18px',
      transition: 'all 0.2s ease-out',

      '&:focus': {
        backgroundColor: 'rgba(200,200,200,.9)',
      },
    },

    button: {
      padding: '10px',
      fontWeight: 'bold',
      marginTop: '10px',
      color: 'white',
      backgroundColor: '$red',
      cursor: 'pointer',

      '&:disabled': {
        opacity: '.6',
        cursor: 'not-allowed',
      },
    },

    small: {
      color: '$red',
      fontSize: '14px',
    },

    '.termos': {
      display: 'flex',
      alignItems: 'center',

      'input[type="checkbox"]': {
        marginRight: '10px',
        zoom: '1.5',
      },
    },
  },
});
