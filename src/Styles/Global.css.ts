import { globalStyle } from '@vanilla-extract/css';

// font-size: 10px = 1rem;
globalStyle('html', { fontSize: '62.5%' });
globalStyle('body, body *', {
  boxSizing: 'border-box',
  padding: '0px',
  fontFamily: 'sans-serif',
  margin: '0px',
});
globalStyle('ul, li', {
  listStyle: 'none',
});
globalStyle('button, img', {
  border: 0,
  outline: 'none',
});
