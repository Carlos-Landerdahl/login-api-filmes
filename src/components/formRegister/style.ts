import { styled } from '@/styles/stitches.config';

export const ContainerForm = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    gap: '10px',
    backgroundColor: 'green',
    padding: '40px',
    margin: '10px',
    borderRadius: '10px',

    h1: {
      textAlign: 'center',
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

      '&:focus': {
        backgroundColor: 'orange',
      },
    },

    button: {
      padding: '10px',
      fontWeight: 'bold',
      marginTop: '10px',
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
