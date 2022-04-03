import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const bottmButton = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '54px',
  backgroundColor: '#1ba4ed',
  color: '#fff',
  fontSize: '1.6rem',
});
