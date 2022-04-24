import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  height: 'calc(100vh - 57px)',
});

export const bottomButton = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '54px',
  backgroundColor: vars.color.blue.default,
  color: vars.color.gray[100],
  fontSize: vars.sizes[16],
});

export const listWrapper = style({
  height: 'calc(100% - (43px + 170px + 54px))',
  backgroundColor: '#f6f6f7',
  textAlign: 'center',
});
