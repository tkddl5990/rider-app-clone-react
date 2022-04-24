import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  height: 'calc(100vh - 5.7rem)',
});

export const bottomButton = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '5.4rem',
  backgroundColor: vars.color.blue.default,
  color: vars.color.gray[100],
  fontSize: vars.sizes[16],
});

export const listWrapper = style({
  height: 'calc(100% - (4.3rem + 17rem + 5.4rem))',
  backgroundColor: '#f6f6f7',
  textAlign: 'center',
});
