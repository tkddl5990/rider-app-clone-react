import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

const aside = style({
  position: 'absolute',
  top: 0,
  left: '-70%',
  width: '70%',
  height: '100vh',
  maxWidth: '470px',
  backgroundColor: vars.color.gray[100],
  transition: 'left .25s linear',
  zIndex: 10,
});

export const backScreen = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(1, 1, 1, .5)',
  zIndex: 8,
});

const move = style({
  left: 0,
});

export const active = style([aside, move]);
export const inactive = style([aside]);
