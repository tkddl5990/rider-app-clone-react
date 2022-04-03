import { globalStyle } from '@vanilla-extract/css';

globalStyle(':root', { fontSize: '10px' });
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
