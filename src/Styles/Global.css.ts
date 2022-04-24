import { globalStyle } from '@vanilla-extract/css';

// font-size: 10px = 1rem;
globalStyle('html', { fontSize: '62.5%' });
globalStyle('body, body *, body *::after, bosy *::before', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  fontFamily: 'sans-serif',
});
globalStyle('ul, li', {
  listStyle: 'none',
});
globalStyle('button, img', {
  border: 0,
  outline: 'none',
});
globalStyle('input, textarea, select', {
  outline: 'none',
  border: 0,
});
